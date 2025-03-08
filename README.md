# 🍿 usePopcorn

A modern React application for discovering, tracking, and rating your favorite movies.

> This project was created for educational purposes as part of learning React concepts including hooks, custom hooks, API integration, and state management. It demonstrates real-world implementation of React features and best practices.

## Features

- 🎬 Search movies using the OMDB API
- ⭐ Rate movies and keep track of your ratings
- 📊 View movie details including plot, cast, director, and IMDb ratings
- 💾 Persistent storage of your watched movies
- 📱 Responsive design for all devices
- ⌨️ Keyboard shortcuts for better navigation

## Key Components

### Movie Search

- Real-time search functionality
- Displays movie posters, titles, and release years
- Error handling for failed searches
- Loading states for better user experience

### Movie Details

- Comprehensive movie information
- Personal rating system
- Add movies to your watched list
- View IMDb ratings and runtime

### Watched Movies

- Track movies you've watched
- Calculate average IMDb rating of your watched movies
- Calculate average user rating of your movies
- Calculate average runtime of watched movies
- Easy deletion of movies from watched list

## Technical Details

### Built With

- React (Hooks based architecture)
- OMDB API for movie data
- Local Storage for data persistence

### Custom Hooks

- `useMovies`: Handles movie search and API integration
- `useLocalStorageState`: Manages persistent storage
- `useKey`: Handles keyboard interactions

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OMDB API key:

```bash
REACT_APP_OMDB_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm start
```

The application will run on port 3030.

## API Key

The application uses the OMDB API. You'll need to:

1. Get your API key from [OMDB API](http://www.omdbapi.com/)
2. Add it to the `.env` file as shown in the Getting Started section
3. Restart the development server if it's running

> Note: Never commit your `.env` file to version control. It's already added to `.gitignore`.
