import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const OneWalker = () => {
  const { star, id } = useParams();
  const [starwars, setStarwars] = useState({});
  const [homeworld, setHomeworld] = useState('');
  const [homeworldUrl, setHomeworldUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getStar = () => {
      axios.get(`https://swapi.dev/api/${star}/${id}`)
        .then(response => {
          setStarwars(response.data);
          if (response.data.homeworld) {
            setHomeworldUrl(response.data.homeworld);
            fetchHomeworldName(response.data.homeworld);
          }
        })
        .catch(error => setErrorMsg("These aren't the droids you're looking for"));
    };

    const fetchHomeworldName = (url) => {
      axios.get(url)
        .then(response => setHomeworld(response.data.name))
        .catch(error => setErrorMsg("Failed to fetch homeworld name"));
    };

    getStar();
  }, [star, id]);

  const extractPlanetId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  return (
    <div>
      {errorMsg ? (
        <h2>{errorMsg}</h2>
      ) : (
        <>
          
          {star === 'people' && (
            
            <ul>
              <h1>{starwars.name}</h1>
              <h4><strong>Height:</strong> {starwars.height}</h4>
              <h4><strong>Mass:</strong> {starwars.mass}</h4>
              <h4><strong>Hair Color:</strong> {starwars.hair_color}</h4>
              <h4><strong>Skin Color:</strong> {starwars.skin_color}</h4>
              {homeworldUrl && (
                <h4>
                  <strong>Homeworld:</strong> 
                  <Link to={`/planets/${extractPlanetId(homeworldUrl)}`}> {homeworld}</Link>
                </h4>
              )}
            </ul>
          )}
          {star === 'planets' && (
            <ul>
              <h1>{starwars.name}</h1>
              <h4><strong>Climate:</strong> {starwars.climate}</h4>
              <h4><strong>Diameter:</strong> {starwars.diameter}</h4>
              <h4><strong>Population:</strong> {starwars.population}</h4>
              <h4><strong>Gravity:</strong> {starwars.gravity}</h4>
            </ul>
          )}
          {star === 'films' && (
            <ul>
              <h1>{starwars.title}</h1>
              <h4><strong>Episodes:</strong> {starwars.episode_id}</h4>
              <h4><strong>Director:</strong> {starwars.director}</h4>
              <h4><strong>Producer:</strong> {starwars.producer}</h4>
              <h4><strong>Release Date:</strong> {starwars.release_date}</h4>
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default OneWalker;
