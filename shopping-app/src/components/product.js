import "./product.css"

function Product(props){
    return(
        <div className="product">
            <div className="product-image">
                <img src={props.img}/>
            </div>
            <div className="product-details">
                <h2>{props.name}</h2>
                <h3>Rs.<span>{props.price}</span></h3>
                <p>details</p>
            </div>
        </div>
    )
}

export default Product;