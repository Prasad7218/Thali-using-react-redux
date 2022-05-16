import React from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
const { Meta } = Card;
import './Thali.css'
import {useDispatch} from 'react-redux'
import { Dishes } from './Dishes';
import {addTocart} from './thaliSlice'



const Thali = () => {

 const dispatch=useDispatch();


  const clickHandler=(ele)=>{
    dispatch(addTocart(ele));
   } 

  return (
      <>
    <div className="container">
      {
        Dishes.map((ele)=>{
          const { id, title, img, price, quantity, description } = ele
          return(
            <>
            <Card
            hoverable
            style={{ width: 240}}
            cover={<img alt="example" src={img}/>}
          >
            <Meta title={title} description={description} />
            <div><h3>Price:{price}</h3></div>
            <div>Qty:{quantity}</div>
            <button onClick={()=>clickHandler(ele)}>Add to cart</button>
          </Card>
          </>

          )
        })
      }
      </div>
      </>
  )
}

export default Thali;