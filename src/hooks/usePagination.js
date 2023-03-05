import { useEffect, useState } from 'react';

const usePagination = (pageCharacter, infoPagination) => {
  const [btnsBlock, setBtnsBlock] = useState();
  const maxBtns = 5;
  const generateBlocks = () => {
    const btnsContent = [];
    for (let i = 0; i < infoPagination.pages; i++) {
      btnsContent.push(i + 1);
    }
    const btnsArrayContent = btnsContent.reduce(
      (acc, el) => {
        const lastArray = acc[acc.length - 1];
        if (lastArray.length !== maxBtns) lastArray.push(el);
        if (lastArray.length === maxBtns) acc.push([]);
        return acc;
      },
      [[]]
    );
    return btnsArrayContent;
  };

  useEffect(() => {
    if (pageCharacter % maxBtns !== 0) {
      console.log('cambiando bloques');
      setBtnsBlock(generateBlocks()[Math.floor(pageCharacter / maxBtns)]);
    } else {
      setBtnsBlock(generateBlocks()[Math.floor(pageCharacter / maxBtns - 1)]);
    }
  }, [pageCharacter, infoPagination]);

  return { btnsBlock };
};

export default usePagination;
