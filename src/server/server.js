import initModel from './initModel';

// Server simulation with localStorage
class Server {
  constructor() {
    this.database();
  }

  database() {
    const initJSON = JSON.stringify(initModel());

    if (!localStorage.getItem('server_RickAndMortyApp')) {
      localStorage.setItem('server_RickAndMortyApp', initJSON);
    }
  }
}

export default Server;
