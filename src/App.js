import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import { getToken, searchSongs } from './spotifyService';
import filterSongs from './utils/filterSongs';

function App() {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (query) => {
        setLoading(true);
        setError(null);

        try {
            const token = await getToken();
            const results = await searchSongs(query, token);
            const filteredResults = filterSongs(results);
            setSongs(filteredResults);
        } catch (err) {
            setError('Failed to fetch songs. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Song Searcher</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p className='loading'>Loading...</p>}
            {error && <p className='error'>{error}</p>}
            <SongList songs={songs} />
        </div>
    );
}

export default App;
