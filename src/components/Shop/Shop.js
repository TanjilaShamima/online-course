import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Shop.css';
import data from '../../fake data/data.json';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';






const Shop = () => {

    const [course, setCourse] = useState([]);
    const [cart, setCart] = useState([]);




    const addHandaler =(course) =>{
        const newCart = [...cart, course];
        setCart(newCart);

    }

  
  
    useEffect( () => {
      setCourse(data);
    }, []);

    //  console.log(course);
    //  console.log(cart);

    return (
        <div className="shop-container container">
            <div className="shop-course">
                {
                     course.map(course => <Course addHandaler={addHandaler}  course={course}></Course>)
                }
            </div>
            <div className="shop-cart">
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
            
        </div>
    );
};

export default Shop;