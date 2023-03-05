import React, { useState } from 'react';
import getCharacterPower from '../utils/getCharacterPower';
import './styles/cardCharacter.css';

const CardCharacter = ({ character }) => {
  const [loadedImage, setLoadedImage] = useState(false);
  const handleLoad = () => {
    setLoadedImage(true);
  };

  return (
    <div className="c-card-character--container">
      <div className="card-character--container__favorite">
        <i className="fa-solid fa-heart-circle-plus"></i>
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
