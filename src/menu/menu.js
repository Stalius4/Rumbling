
import './menu.css';
import logo from "./images/logo.svg"
import FoodBox from './foodBox';
import breakfast from "./images/breakfast.jpg"
import melt from "./images/melt.png"
function Menu() {


  return ( 
  
  <div>
       <header className='header'>
        <div className='logo'>
          {/* <div className='top-line'></div> */}
          <img src={logo} alt="logo" className='logo-img' />
          <div className='under-logo-text'>Order from <spam className="red-text"> 7.30am till 2.45pm</spam> for collection to suit you<spam className="red-text"> (01775)722014</spam>  </div>
        </div> 
    
    </header>
    <main className='main'>
    <FoodBox image={breakfast} name={"Breakfast"} description={""}></FoodBox>
    <FoodBox image={melt} name={"Cheese melt baguettes"}></FoodBox>
    </main>
    <footer>
     
    </footer>


    </div>
  );
}

export default Menu;