/**
 * Centralized project data used across the portfolio.
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Add a new object to the `projects` array below.
 * 2. Place your project screenshots inside `public/images/projects/`.
 *    - Recommended: name them like `project-slug-1.png`, `project-slug-2.png`.
 *    - Use absolute paths starting with `/images/projects/`.
 * 3. Set `featured: true` on up to 3 projects to show them on the Home page.
 *
 * IMAGE PATHS:
 * - All images should live in `public/images/projects/` so Vite serves them as static assets.
 * - Reference them with absolute paths, e.g. `/images/projects/seetra-1.png`.
 * - You can also use external URLs (https://...) if needed.
 */

export const projects = [
  {
    id: 1,
    title: 'Seetra: Image Processing Web',
    category: 'Fullstack',
    description:
      'Seetra is a full-featured image processing platform that combines the power of Python OpenCV with a modern React frontend. Users can upload images and apply a variety of transformations including grayscale conversion, edge detection (Canny, Sobel), blurring, thresholding, and color space analysis — all rendered in real-time through a responsive web interface.',
    tech: ['React', 'Tailwind CSS', 'Python', 'Flask', 'OpenCV'],
    badge: 'Fullstack Web App',
    demoUrl: '#',
    githubUrl: 'https://github.com/asterithon/seetra',
    featured: true,
    images: [
      '/images/projects/seetra-1.png',
      '/images/projects/seetra-2.png',
      '/images/projects/seetra-3.png',
    ],
  },
  {
    id: 2,
    title: 'Seat Booking Mobile App',
    category: 'Mobile App',
    description:
      'A feature-rich mobile application designed for seamless venue and event seat booking. The app provides an interactive seat map where users can browse available seats, select their preferred spots, and complete the reservation flow. Built with React Native for cross-platform compatibility and tested on Android Studio emulators.',
    tech: ['React Native', 'Android Studio', 'JavaScript', 'Mobile UI'],
    badge: 'Mobile Application',
    demoUrl: '#',
    githubUrl: 'https://github.com/asterithon/seatbookingapp',
    featured: true,
    images: [
    ],
  },
  {
    id: 3,
    title: 'Futsal Field Booking System',
    category: 'Fullstack',
    description:
      'A comprehensive web-based booking system for futsal courts, built on the Laravel framework. It includes user registration and authentication, an interactive schedule calendar for viewing available time slots, an admin dashboard for managing courts and bookings, and instant confirmation emails upon successful reservation.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'PHP', 'Authentication'],
    badge: 'Fullstack Web App',
    demoUrl: '#',
    githubUrl: 'https://github.com/asterithon/booking-futsal',
    featured: true,
    images: [
    ],
  },
];

/**
 * Available project categories for filtering.
 */
export const categories = ['All', 'Fullstack', 'Mobile App'];
