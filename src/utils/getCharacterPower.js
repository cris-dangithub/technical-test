const getCharacterPower = character => {
  const { name, episode, status } = character;
  let statusPoints = 1;
  if (status === 'Alive') statusPoints = 3;
  if (status === 'unknow') statusPoints = 2;
  if (status === 'Dead') statusPoints = 1;

  const power = name.length + episode.length * statusPoints;

  return power;
};

export default getCharacterPower;
