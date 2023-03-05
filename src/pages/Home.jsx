import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCharacter from '../components/CardCharacter';
import PaginationBtn from '../components/PaginationBtn';
import './styles/home.css';

const Home = () => {
  const [characters, setCharacters] = useState();
  const [pageCharacter, setPageCharacter] = useState(1);
  const [characterByName, setCharacterByName] = useState();
  const [errorInputHandler, setErrorInputHandler] = useState(false);
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/signin');
  };
  const handleClickLogIn = () => {
    navigate('/login');
  };

  const handleInput = e => {
    setPageCharacter(1);
    setCharacterByName(e.target.value);
  };

  useEffect(() => {
    //if (!characterByName) {
    console.log('first');
    const URL = `https://rickandmortyapi.com/api/character/?page=${pageCharacter}${
      characterByName ? `&name=${characterByName}` : ''
    }`;
    axios
      .get(URL)
      .then(res => {
        setCharacters(res.data);
        setErrorInputHandler(false);
      })
      .catch(err => {
        setErrorInputHandler(true);
      });
    //}
  }, [pageCharacter, characterByName]);

  return (
    <article className="c-Home">
      <header className="Home__header">
        <div className="Home__header-img-container">
          <img
            className="Home__image"
            src="img/header.jpg"
            alt="image header home"
          />
          <img
            className="Home__title-img"
            src="img/title.png"
            alt="title image"
          />
        </div>
        <section className="Home__header-form">
          <input
            className={`Home__input ${
              errorInputHandler ? 'Home__input--error' : ''
            }`}
            type="text"
            placeholder="Search character..."
            onChange={handleInput}
          />
          <div className="Home__btn-container">
            <button
              className="Home__btn Home__btn--signin"
              onClick={handleClickSignIn}
            >
              Sign in
            </button>
            <button
              className="Home__btn Home__btn--login"
              onClick={handleClickLogIn}
            >
              Log in
            </button>
          </div>
        </section>
      </header>

      {characters && (
        <PaginationBtn
          pageCharacter={pageCharacter}
          infoPagination={characters?.info}
          setPageCharacter={setPageCharacter}
        />
      )}

      <section className="Home__cards-container">
        {characters?.results.map(character => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </section>
      {characters && (
        <PaginationBtn
          pageCharacter={pageCharacter}
          infoPagination={characters?.info}
          setPageCharacter={setPageCharacter}
        />
      )}
    </article>
  );
};

export default Home;
