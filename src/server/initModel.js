const initModel = () => {
  return {
    users: [
      {
        id: 1,
        name: 'Cristian Daniel',
        email: 'cristiandaniel8080@gmail.com',
        password: 'cris123456',
      },
    ],
    favorites: [
      {
        id: 1,
        userId: 1,
        characterId: 6,
      },
      {
        id: 2,
        userId: 1,
        characterId: 9,
      },
      {
        id: 3,
        userId: 1,
        characterId: 32,
      },
    ],
  };
};

export default initModel;
