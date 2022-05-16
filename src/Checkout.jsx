import './Checkout.css'
import { Card } from 'antd';
const { Meta } = Card;
import {useEffect} from 'react';
import {removeFromcart, increment, decrement,totalamt} from './thaliSlice'
import {useDispatch,useSelector} from 'react-redux'


const Checkout=()=>{
    const dispatch=useDispatch();
    const {value,total,item}= useSelector((state)=>state.thali);


    const HandleClick1=(id)=>{
      dispatch(increment(id));
    }

    const HandleClick2=(id)=>{
        if (item<1){
            dispatch(removeFromcart(id))
          }
           else{
            dispatch(decrement(id))
           }
    }

    const HandleClick3=(id)=>{
        dispatch(removeFromcart(id));
    }

    useEffect(()=>{
        dispatch(totalamt());
    },[value])


    return(
        <>
        <div className='containers'>
        <h2>Items added in cart</h2>
        {
            value.map((ele)=>{
                const {id, title, img, price, quantity, description}=ele;
                return(
                    <>
                <Card
                hoverable
                style={{ width: 240,position:'relative' ,left:"550px"}}
                cover={<img alt="example" src={img} />}
                >
                <Meta title={title} description={description} />
                <div><h3>Price:{price}</h3></div>
                <div>Qty:{quantity}</div>
                <button onClick={()=>HandleClick1(id)}><b>+</b></button>
                <button onClick={()=>HandleClick2(id)}><b>-</b></button><br/><br/>
                <button onClick={()=>HandleClick3(id)}>Delete entry</button>

                 </Card>
                 </>
                )
            })
            }
            <h1>Total Bill:{total}</h1>

           
        </div>
        </>
    )
}

export default Checkout;