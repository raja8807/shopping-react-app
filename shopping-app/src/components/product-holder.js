import './product-holder.css' 
import Product from './product';

function ProductHolder(props){

    let prodList = props.prodList;

    return (
        <div className='product-holder'>
            <div className='container'>
                <div className='product-wrapper'>
                  <Product name={prodList[0].name}
                    price={prodList[0].price}
                    img = {prodList[0].img}>
                </Product> 
                  <Product name={prodList[1].name}
                  price={prodList[1].price}
                  img = {prodList[0].img}></Product>  

                  <Product name={prodList[2].name}
                  price={prodList[2].price}
                  img = {prodList[0].img}></Product>  

                  <Product name={prodList[3].name}
                  price={prodList[3].price}
                  img = {prodList[0].img}></Product>  
                </div>
            </div>
        </div>
    )
}
export default ProductHolder;