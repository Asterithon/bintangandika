// Rate limit memori sederhana berbasis IP untuk serverless instance
const ipTracker = new Map();
const COOLDOWN_MS = 60 * 1000; // Cooldown 60 detik per IP

export default async function handler(req, res) {
    // Hanya izinkan method POST
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const lastRequestTime = ipTracker.get(clientIp);
    const now = Date.now();

    if (lastRequestTime && now - lastRequestTime < COOLDOWN_MS) {
        const sisaWaktu = Math.ceil((COOLDOWN_MS - (now - lastRequestTime)) / 1000);
        return res.status(429).json({
            message: `Harap tunggu ${sisaWaktu} detik sebelum mengirim pesan kembali.`,
        });
    }

    const { nama, pesan } = req.body || {};

    if (!nama || !pesan) {
        return res.status(400).json({ message: "Nama dan pesan wajib diisi." });
    }

    // Ambil token dari Environment Variables Vercel
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return res
            .status(500)
            .json({ message: "Konfigurasi bot server belum lengkap." });
    }

    const telegramText = `<b>Pesan Baru dari Web!</b>\n\n<b>Nama:</b> ${nama}\n<b>Pesan:</b> ${pesan}`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramText,
                    parse_mode: "HTML",
                }),
            },
        );

        const data = await response.json();

        if (!data.ok) {
            return res
                .status(502)
                .json({ message: "Gagal meneruskan pesan ke Telegram." });
        }

        return res.status(200).json({ message: "Pesan berhasil dikirim!" });
    } catch (error) {
        return res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
}
