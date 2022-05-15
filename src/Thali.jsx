import React from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
const { Meta } = Card;
import './Thali.css'
import addToCart  from './thaliSlice';
import {useDispatch} from 'react-redux'




const Thali = () => {

 const dispatch=useDispatch();


  const clickHandler=()=>{
    console.log("clicked")
    dispatch(addToCart());
   } 

  return (
      <>
    <div className="container">
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://www.mydelicious-recipes.com/home/getogimage?id=234" />}
  >
    <Meta title="Roti" description="www.instagram.com" />
    <button onClick={clickHandler}>Add to cart</button>
  </Card>

  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://th.bing.com/th/id/OIP.pTih5dJf-aeqSgB36mzffQHaE8?pid=ImgDet&rs=1" />}
  >
    <Meta title="Pickle" description="www.instagram.com" />
    <button onClick={clickHandler}>Add to cart</button>
  </Card>

  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://i1.wp.com/thefoodsamaritan.com/wp-content/uploads/2016/07/IMG_1496.jpg" />}
  >
    <Meta title="Curd" description="www.instagram.com" />
    <button onClick={clickHandler}>Add to cart</button>
  </Card>

  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://th.bing.com/th/id/OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk?pid=ImgDet&rs=1" />}
  >
    <Meta title="Sweet" description="www.instagram.com" />
    <button onClick={clickHandler}>Add to cart</button>
  </Card>
  </div><br/><br/>
<div className="container2">
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://th.bing.com/th/id/OIP.yPauStRvdDFJkdCd-oDmhQHaFj?pid=ImgDet&rs=1" />}
  >
    <Meta title="Daal" description="www.instagram.com" />
    <button onClick={clickHandler}>Add to cart</button>
  </Card>


  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://1.bp.blogspot.com/-M5Dg73HC7TY/Xd5gSLLDm8I/AAAAAAAAH4M/E1Ofe3O5XwwYe15VtB1B-VCg-unhXuLFACLcBGAsYHQ/s1600/IMG_0042.JPG" />}
  >
    <Meta title="Paneer" description="www.instagram.com" />
    <button onClick={clickHandler}>Add to cart</button>
  </Card>

  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://th.bing.com/th/id/OIP.Ki-WMNOKmyk0sXfzQPmctAHaE8?pid=ImgDet&rs=1" />}
  >
    <Meta title="Milk" description="www.instagram.com" />
    <button onClick={clickHandler}>Add to cart</button>
  </Card>
  </div>
    </>
  )
}

export default Thali;