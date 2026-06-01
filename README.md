# Spotcast — Spotify PKCE Auth Flow

Spotcast is a Vue 3 application that integrates with the Spotify Web API using **Authorization Code Flow with PKCE**. It allows users to authenticate with their Spotify account and explore podcasts, shows, playlists, and profile-related data through a clean dashboard interface.

## Features

* Spotify authentication with **PKCE** (Authorization Code with Proof Key for Code Exchange)
* Secure token handling without exposing client secrets
* User profile dashboard
* View followed podcasts/shows
* Browse top shows
* Display user playlists
* View saved episodes
* Dedicated show details page
* Loading states for async API requests
* Responsive UI built with Vuetify + TailwindCSS

---

## Tech Stack

* **Vue 3**
* **Vite**
* **Vue Router**
* **Pinia / Vue Store**
* **Vuetify**
* **TailwindCSS**
* **Spotify Web API**

---

## Project Structure

```bash
src/
├── assets/          # Static assets, logos, images, styles
├── components/      # Reusable UI components
├── plugins/         # Vuetify configuration
├── router/          # Route definitions
├── services/        # Spotify + Auth API services
├── store/           # Global state management
└── views/           # Page views
```

---

## Authentication Flow

This project uses Spotify’s **Authorization Code with PKCE Flow**.

### Flow overview

1. User clicks **Login with Spotify**
2. App generates:

   * `code_verifier`
   * `code_challenge`
3. User is redirected to Spotify authorization page
4. Spotify redirects back with authorization code
5. App exchanges the code for:

   * Access token
   * Refresh token
6. Authenticated requests are made to Spotify Web API

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
```

### Get Spotify credentials

1. Open the Spotify Developer Dashboard
2. Create an app
3. Copy your Client ID
4. Add your redirect URI to the app settings

Spotify Developer Dashboard:

https://developer.spotify.com/dashboard

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/spotcast.git
cd spotcast
```

Install dependencies:

```bash
npm install
```

---

## Development

Run locally:

```bash
npm run dev
```

Vite will start the development server.

Default:

```bash
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Deployment

This project includes `vercel.json`, making it ready for deployment on Vercel.

Deploy with:

```bash
vercel
```

or connect the repository directly in the Vercel dashboard.

---

## Main Views

### HomeView

Landing page of the application.

### LoginView

Handles Spotify login initiation.

### RedirectView

Processes Spotify callback and token exchange.

### DashboardView

Displays authenticated user content.

### showView

Detailed view for an individual podcast/show.

---

## Services

### AuthService.js

Responsible for:

* PKCE generation
* Spotify authorization redirect
* Token exchange
* Authentication helpers

### SpotifyService.js

Responsible for:

* Fetching user profile
* Fetching playlists
* Fetching followed shows
* Fetching saved episodes
* Fetching show details

---

## License

MIT

---

## Author

Built by **therealzoux**
