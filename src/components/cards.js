import React, { useEffect, useState, useRef } from 'react';
import Card from './card';

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const cardContainerRef = useRef(null);

  const cardData = [
    {
      title: "Grilled Tomatoes at Home",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: '/images/card1.png'
    },
    {
      title: "Snacks for Travel",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: '/images/card2.png'
    },
    {
      title: "Post-workout Recipes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: '/images/card3.png'
    },
    {
      title: "How To Grill Corn",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: '/images/card4.png'
    },
    {
      title: "Crunchwrap Supreme",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: '/images/card5.png'
    },
    {
      title: "Broccoli Cheese Soup",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: '/images/card6.png'
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 600) {
      setTotalPages(cardData.length);
    } else {
      setTotalPages(Math.ceil(cardData.length / 3));
    }
  }, [cardData.length,currentPage]);

  const incrementPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
    const translationValue = window.innerWidth < 600 ? 371 : 1330;
    cardContainerRef.current.style.transform = `translateX(-${currentPage * translationValue}px)`;
  };

  const decrementPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    const translationValue = window.innerWidth < 600 ? 371 : 1330;
    cardContainerRef.current.style.transform = `translateX(-${(currentPage - 2) * translationValue}px)`;
  };

  return (
    <div className='cards'>
      <h1>Latest Articles</h1>
      <div className="cardContainer">
        <div className="container" ref={cardContainerRef}>
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <img src="/images/dec.png" onClick={decrementPage} alt="Decrement" />
        <div>
          <span>{currentPage}</span> / <span>{totalPages}</span>
        </div>
        <img src="/images/inc.png" onClick={incrementPage} alt="Increment" />
      </div>
    </div>
  );
};

export default Cards;
