import initModel from './initModel';

// Server simulation with localStorage
class Server {
  constructor() {
    this.database();
    //
    //this.login('cristiandaniel8080@gmail.com', 'cris123456');
  }

  database() {
    const initJSON = JSON.stringify(initModel());
    if (!localStorage.getItem('server_RickAndMortyApp')) {
      localStorage.setItem('server_RickAndMortyApp', initJSON);
    }
  }

  signin(data) {
    const obj = JSON.parse(localStorage.getItem('server_RickAndMortyApp'));
    obj.users.push(data);
    const newUser = JSON.stringify(obj);
    localStorage.setItem('server_RickAndMortyApp', newUser);
  }

  login(email, password) {
    const { users } = JSON.parse(
      localStorage.getItem('server_RickAndMortyApp')
    );
    for (let user of users) {
      if (user.email === email && user.password === password) {
        this.generateToken(user.id);
        return true;
      }
    }
  }

  logout() {
    localStorage.removeItem('token_RickAndMortyApp');
  }

  generateToken(id) {
    localStorage.setItem('token_RickAndMortyApp', `token ${id}`);
  }

  readToken() {
    return localStorage.getItem('token_RickAndMortyApp');
  }

  getUser() {
    const tokenID = +this.readToken().split(' ')[1];
    const users = JSON.parse(
      localStorage.getItem('server_RickAndMortyApp')
    ).users;
    return users.find(user => user.id === tokenID);
  }

  getFavorites() {
    const tokenID = +this.readToken().split(' ')[1];
    const favorites = JSON.parse(
      localStorage.getItem('server_RickAndMortyApp')
    ).favorites;
    return favorites.reduce((acc, favorite) => {
      if (favorite.userId === tokenID) acc.push(favorite.characterId);
      return acc;
    }, []);
  }

  postFavorites(data) {
    const obj = JSON.parse(localStorage.getItem('server_RickAndMortyApp'));
    obj.favorites.push(data);
    const newFavorite = JSON.stringify(obj);
    localStorage.setItem('server_RickAndMortyApp', newFavorite);
  }
}

export default Server;
