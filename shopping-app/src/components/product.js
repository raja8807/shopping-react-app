import "./product.css"
import {useState} from 'react'



function Product(props){

    const [price , setPrice] = useState(props.price)
    const[offer , setOffer] = useState(props.offer)
    const[dis, setDis] = useState(false)
    

    
    const updatePrice = ()=>{
        let newPrice = props.price-((props.offer/100)*props.price)
        setPrice(newPrice)
        setOffer(0)
        setDis(true)
    }

    return(
        <div className="product">
            <div className="product-image">
                <img src={props.img}/>
            </div>
            <div className="product-details">
                <h2>{props.name}</h2>
                <h3>Rs.<span>{price}</span></h3>
                <p>details</p>
                <p>{offer}% off</p> <button onClick={updatePrice} disabled={dis}>Apply Offer</button>
            </div>
        </div>
    )
}

export default Product;