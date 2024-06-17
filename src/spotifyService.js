import axios from 'axios';

const SPOTIFY_CLIENT_ID = '66d291491d2642519caf65210a0d20d3';
const SPOTIFY_CLIENT_SECRET = 'a1b770a8ac954249a94f3113886be6fd';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search';

const getToken = async () => {
    const response = await axios.post(SPOTIFY_TOKEN_URL, 'grant_type=client_credentials', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET)}`,
        },
    });
    return response.data.access_token;
};

const searchSongs = async (query, token) => {
    const response = await axios.get(SPOTIFY_SEARCH_URL, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        params: {
            q: query,
            type: 'track',
            limit: 20,
        },
    });
    return response.data.tracks.items;
};

export { getToken, searchSongs };
