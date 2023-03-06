import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import CardCharacter from '../components/CardCharacter';
import PaginationBtn from '../components/PaginationBtn';
import './styles/home.css';

const Home = () => {
  const { server } = useSelector(state => state);
  const [characters, setCharacters] = useState();
  const [pageCharacter, setPageCharacter] = useState(1);
  const [characterByName, setCharacterByName] = useState();
  const [errorInputHandler, setErrorInputHandler] = useState(false);
  const [isLogged, setIsLogged] = useState(server.readToken());
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/signin');
  };
  const handleClickLogIn = () => {
    navigate('/login');
  };

  const handleClickProfile = () => {
    navigate('/profile');
  };

  const handleClockLogOut = () => {
    server.logout();
    setIsLogged(false);
    swal({ text: 'Logged out successfully', icon: 'success' });
  };

  const handleInput = e => {
    setPageCharacter(1);
    setCharacterByName(e.target.value);
  };

  useEffect(() => {
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
            {isLogged ? (
              <>
                <button className="Home__btn" onClick={handleClickProfile}>
                  View profile
                </button>
                <button className="Home__btn" onClick={handleClockLogOut}>
                  Log out
                </button>
              </>
            ) : (
              <>
                <button className="Home__btn" onClick={handleClickSignIn}>
                  Sign in
                </button>
                <button className="Home__btn" onClick={handleClickLogIn}>
                  Log in
                </button>
              </>
            )}
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
          <CardCharacter
            key={character.id}
            character={character}
            isLogged={isLogged}
          />
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
