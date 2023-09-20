import React from 'react'
import  CardItem  from './CardItem';
import './Card.css';
import vid9 from './Assets/img-9.jpg';
import vid2 from './Assets/img-2.jpg';
import vid3 from './Assets/img-3.jpg'
import vid4 from './Assets/img-4.jpg'
import vid8 from './Assets/img-8.jpg'


const Card = () => {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src={vid9}
                        text="Explore the hidden waterfall deep in
                        the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />

                        <CardItem
                        src={vid2}
                        text="Travel through the Islands of Bali in a Private Pruise"
                        label="Luxury"
                        path="/services"
                        />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem
                        src={vid3}
                        text="Explore the hidden waterfall deep in
                        the Amazon Jungle"
                        label="Mystery"
                        path="/services"
                        />

                        <CardItem
                        src={vid4}
                        text="Travel through the Islands of Bali in a Private Pruise"
                        label="Soccer"
                        path="/services"
                        />
                        <CardItem
                        src={vid8}
                        text="Travel through the Islands of Bali in a Private Pruise"
                        label="Desert"
                        path="/services"
                        />
                    </ul>

                </div>
            </div>

    </div>
  )
}

export default Card;
