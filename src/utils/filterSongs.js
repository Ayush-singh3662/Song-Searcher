const filterSongs = (songs) => {
    const excludedKeywords = ['Haryanvi', 'Bhojpuri'];
    return songs.filter(song => {
        const trackName = song.name.toLowerCase();
        const albumName = song.album.name.toLowerCase();
        const artistNames = song.artists.map(artist => artist.name.toLowerCase()).join(' ');

        return !excludedKeywords.some(keyword =>
            trackName.includes(keyword.toLowerCase()) ||
            albumName.includes(keyword.toLowerCase()) ||
            artistNames.includes(keyword.toLowerCase())
        );
    });
};

export default filterSongs;
