import React from 'react';

export default function Recommended({ movie }) {
    const { imdbID = '', Year = 'N/A', Poster = 'https://via.placeholder.com/400', Title = 'Unknown', Type = 'Unknown' } = movie;

    return (
      <div className="movie" key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>

        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    );
}
