import React from 'react';
import './card.scss'
import SunIcon from '../../icons/SunIcon';
import CommentIcon from '../../icons/CommentIcon';
import LikeIcon from '../../icons/LikeIcon';

function Card({item}) {
  const {title, img, distance, price, likes, comment, temp} = item;
  return (
    <div className="card-component">
      <img src={img} className="card__img" alt="newyork adventure"/>
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
        <svg className="icon-more">
          <use xlinkHref="./sprite.svg#icon-more"/>
        </svg>
      </div>
      <div className="card__counts">
        <span>&#36; {price}</span>
        <span></span>
        <span>{distance} KM away</span>
      </div>
      <div className="card__footer">
        <div className="tempreture">
          <SunIcon className="icon-sun"/>
          <div className="tempreture__degree">
            <span>{temp} &#176;</span>
            <span>Sunny</span>
          </div>
        </div>
        <div className="statistic">
          <div className="statistic__like">
            <LikeIcon className="icon-like"/>
            <span>{likes} K</span>
          </div>
          <div className="statistic__comment">
            <CommentIcon className="icon-comment"/>
            <span>{comment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
