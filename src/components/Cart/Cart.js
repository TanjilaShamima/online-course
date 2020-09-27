import React from 'react';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
        //  console.log(props);



         const cart = props.cart;
         console.log(cart);

     let price = 0;

   
    // //  const price = cart.reduce((total,prd) => total+prd,0);
    
    for(let i=0;i<cart.length; i++){
       let cartValue = parseFloat(cart[i].price);
        price = price + cartValue;
    }



    function fixedValue(num){
        return num.toFixed(2);
    }

    let discount = 0;

    if(price<35 && price>0){
        discount = price*.05;
    }

    else if(price>35) discount = price * .15;


    function fixedValue(num){
        return num.toFixed(2);
    }



     const total = price  - discount;



    return (
        <div className ="cart-container">        
            <h3 className="text-center">Course Summery</h3>
            <div className="cart-body">
                <h5>Iteams Order : {cart.length}</h5>       
                <p>Course Price  : ${fixedValue(price)}</p>    
                <p>Discount:	:	 ${fixedValue(discount)}</p>
                <h5>Order Total :  ${fixedValue(total)}</h5> 

                <button className="btn btn-dark preview-button"><FontAwesomeIcon icon={faShoppingBasket} />  Preview The Order</button>
            </div> 

        </div>
    );
};

export default Cart;