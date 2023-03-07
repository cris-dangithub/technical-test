import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CardCharacter from '../../components/CardCharacter';
import Server from '../../server/server';
import './styles/profile.css';

const Profile = () => {
  const server = new Server();

  const [user, setUser] = useState(server.getUser());
  const [favoriteCharacters, setFavoriteCharacters] = useState();
  const { favorites } = useSelector(state => state);

  const navigate = useNavigate();

  const handleLogOut = () => {
    server.logout();
    swal({ text: 'Logged out successfully', icon: 'success' });
    navigate('/');
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/character/${favorites}`;
    axios
      .get(URL)
      .then(res => {
        if (favorites.length > 1) {
          return setFavoriteCharacters(res.data);
        }
        setFavoriteCharacters([res.data]);
      })
      .catch(err => setFavoriteCharacters());
    return;
  }, [favorites]);

  return (
    <article className="c-Profile">
      <section className="profile-container">
        <h1 className="profile__welcome">Welcome back, {user.name}!</h1>
        <div className="profile__icon-container">
          <i className="profile__icon fa-solid fa-user"></i>
        </div>
        <ul className="profile__list">
          <li className="profile__item">
            <Link to="/">
              <i className="profile__home-btn fa-solid fa-house"></i>
            </Link>
          </li>
          <li className="profile__item">
            <button className="profile__logout-btn" onClick={handleLogOut}>
              <i className="profile__logout-btn-icon fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </li>
        </ul>
      </section>
      <section className="favorites">
        <h2 className="favorites__title">Favorites</h2>
        <section className="Home__cards-container">
          {favoriteCharacters
            ? favoriteCharacters.map(character => (
                <CardCharacter
                  key={character.id}
                  character={character}
                  isLogged={true}
                />
              ))
            : 'There are not favorite characters. Please, go home to add more'}
        </section>
      </section>
    </article>
  );
};

export default Profile;
