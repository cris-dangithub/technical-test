import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import Server from '../server/server';
import { getNewFavorites } from '../store/slices/favorites.slice';
import getCharacterPower from '../utils/getCharacterPower';
import './styles/cardCharacter.css';

const CardCharacter = ({ character, isLogged }) => {
  const [loadedImage, setLoadedImage] = useState(false);
  const [isFavorite, setIsFavorite] = useState();
  const server = new Server();
  const dispatch = useDispatch();

  const handleFavorite = () => {
    // Leer el token
    if (!server.readToken()) {
      return swal({
        text: 'You have to log in first to add favorite characters',
        icon: 'error',
      });
    }

    // Validar que no exista ya en favoritos
    if (isFavorite) {
      const data = {
        characterId: character.id,
        userId: server.getUser().id,
      };
      server.deleteFavorite(data);
      dispatch(getNewFavorites());
      setIsFavorite(false);
      return swal({
        text: 'Favorite character removed successfully',
        icon: 'success',
      });
    }
    // Si no existe, agregar a favoritos
    const data = {
      id: new Date().getTime(),
      userId: server.getUser().id,
      characterId: character.id,
    };
    server.postFavorites(data);
    dispatch(getNewFavorites());
    setIsFavorite(true);
    return swal({
      text: 'Character added successfully',
      icon: 'success',
    });
  };

  const handleLoad = () => {
    setLoadedImage(true);
  };

  useEffect(() => {
    if (isLogged) {
      const favorites = server.getFavorites();
      setIsFavorite(favorites.includes(character.id));
    }
  }, []);
  useEffect(() => {
    if (!isLogged) {
      setIsFavorite();
    }
  }, [isLogged]);

  return (
    <div className="c-card-character--container">
      <div
        className={`card-character--container__favorite ${
          isFavorite
            ? 'card-character--container__favorite--added'
            : 'card-character--container__favorite--no-added'
        }`}
        onClick={handleFavorite}
      >
        {isFavorite ? (
          <i className="icon-favorite fa-solid fa-heart-circle-minus"></i>
        ) : (
          <i className="icon-favorite fa-solid fa-heart-circle-plus"></i>
        )}
      </div>
      <div className="c-card-character">
        <header className="card-character__header">
          <span className="card-character__status">
            <span
              className={`card-character__status-circle card-character__status-circle--${character.status}`}
            ></span>
            {character.status}
          </span>
          <div className="card-character__img-container">
            <img
              className={`card-character__img ${
                loadedImage ? 'card-character__img--loaded' : ''
              }`}
              src={character.image}
              alt={`${character.name} image`}
              onLoad={handleLoad}
            />
            {loadedImage ? (
              ''
            ) : (
              <div className="card-character__loader-img">
                <div className="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span className="lds-roller__txt">Loading image...</span>
              </div>
            )}
          </div>
        </header>
        <section className="card-character__info-container">
          <h3 className="card-character__name">{character.name}</h3>
          <hr className="card-character__hr-line" />
          <ul className="card-character__list">
            <li className="card-character__item">
              <h4 className="card-character__attribute">Specie</h4>
              <span className="card-character__value">{character.species}</span>
            </li>
            <li className="card-character__item">
              <h4 className="card-character__attribute">Origin</h4>
              <span className="card-character__value">
                {character.origin.name}
              </span>
            </li>
            <li className="card-character__item">
              <h4 className="card-character__attribute">Episodes</h4>
              <span className="card-character__value">
                {character.episode.length}
              </span>
            </li>
          </ul>
          <div className="card-character__power">
            <h3 className="card-character__power-title">POWER</h3>
            <span className="card-character__power-value">
              {getCharacterPower(character).toFixed(0)}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardCharacter;
