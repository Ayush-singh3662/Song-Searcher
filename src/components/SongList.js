import React from 'react';

const SongList = ({ songs }) => {
    songs.sort((a,b) => b.popularity-a.popularity);
    return (
        <div className="song-list">
            {songs.map((song) => (
                <div key={song.id} className="song-item">
                    <img src={song.album.images[0].url} alt={song.name} />
                    <div className="song-info">
                        <h3>{song.name}</h3>
                        <p><span className='artist'>Artists: </span>{song.artists.map(artist => artist.name).join(', ')}</p>
                        <p><span className='artist'>Album Name: </span>{song.album.name}</p>
                        <p><span className='artist'>Popularity: </span>{song.popularity}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SongList;
