
import breakfast from "./images/breakfast.jpg"

// import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

function FoodBox() {


    return ( 
    
    <div className="food-box">
<img src={breakfast} alt="" className="box-image" />
<h3 className="box-title">Breakfast</h3>
<p className="box-description">Choose from: <br></br>
Breakfast box, Baguette, Roll or Sandwich</p>
<p className="price">from: £2.95</p>
 <div className="arrow"><IoIosArrowDown></IoIosArrowDown></div>
{/* <IoIosArrowUp></IoIosArrowUp> */}

      </div>
    );
  }
  
  export default FoodBox;