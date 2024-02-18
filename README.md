
# 🎶Music Player App

This project is a music player application built using Next.js. It allows users to listen to their favorite songs, create playlists, and manage their music library seamlessly. The app is designed to provide an intuitive and enjoyable music listening experience.


## 🚀Features

- User Authentication: Users can sign up, log in, and manage their accounts securely.
- Music Library Management: Users can upload, organize, and manage their music library.
- Playlist Creation: Users can create custom playlists and add songs to them.
- Search Functionality: Users can search for songs, albums, or artists within the app.
- Music Playback: Utilizes the use-sound package for playing music with sound effects and controls.
- Responsive Design: The app is responsive and works well across various devices and screen sizes.


## 💻Technologies Used

- Next.js: Next.js is a React framework that enables server-side rendering and other advanced features for React applications.
- React: React is a JavaScript library for building user interfaces.
- TypeScript: TypeScript is a superset of JavaScript that adds static types to the language, providing better tooling and code quality.
- Tailwind CSS: Tailwind CSS is a utility-first CSS framework used for styling the application.
- Radix UI: Radix UI provides accessible and customizable UI components for React applications.
- Supabase: Supabase is used for data management, including storing user profiles, music metadata, and playlists.
- use-sound: The use-sound package is used for playing music with sound effects and controls.


## 📷Screenshots

![App Screenshot](https://i.postimg.cc/zXWxN9Wq/Screenshot-2024-02-18-193422.png)

![App Screenshot](https://i.postimg.cc/500PMy5r/Screenshot-2024-02-18-193457.png)

![App Screenshot](https://i.postimg.cc/vT520jt8/Screenshot-2024-02-18-193515.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/varun-singh-0518/music-player.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file in the root directory.

`NEXT_PUBLIC_SUPABASE_URL` = your_public_supabase_url

`NEXT_PUBLIC_SUPABASE_ANON_KEY` = your_supabase_anon_key

`sUPABASE_SERVICE_ROLE_KEY` = your_supabase_service_key

