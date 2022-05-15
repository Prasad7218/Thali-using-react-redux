import './Checkout.css'
import { Card } from 'antd';
const { Meta } = Card;

const Checkout=()=>{
    return(
        <>
        <div className='containers'>
            <h2>Items added in cart</h2>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://th.bing.com/th/id/OIP.pTih5dJf-aeqSgB36mzffQHaE8?pid=ImgDet&rs=1" />}
            >
            <Meta title="Pickle" description="www.instagram.com" />
             </Card>

           
        </div>
        </>
    )
}

export default Checkout;