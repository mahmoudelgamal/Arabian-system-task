import React, { Component } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import './featured.scss'
import Card from '../card/card';
import { DataConsumer } from '../../context'

class Featured extends Component {
  render() {
    return (
      <section className="featured">
        <div className="featured__container">
          <div className="featured__header">
            <h2 className="featured__title">featured</h2>
            <button className="featured__btn">
              See all 
              <IoIosArrowForward className="icon-arrow"/>
            </button>
          </div>
          <div className="card__container">
          <DataConsumer>
          { ({items}) => {
            console.log(items)
            return items.map(item => (<Card key={item.id} item={item}/>))
            }
          }
          </DataConsumer>
          </div>
        </div>
      </section>
    )
  }
}


export default Featured ;
