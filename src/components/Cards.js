import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out famous Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-9.jpg'} alt="Tower Bridge"
              text='Marvel at the Victorian engineering of the Tower Bridge'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-2.jpg'} alt="The Shard"
              text='Witness the expansive city views from The Shard'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-3.jpg'} alt="Buckingham Palace"
              text='Experience regal British tradition at Buckingham Palace'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-4.jpg'} alt="London Eye"
              text='Ride the London Eye for a unique view of the city skyline'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-8.jpg'} alt="Borough Maeket"
              text='Explore Borough Market, a vibrant Londons culinary scene'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;