
import './menu.css';
function Menu() {


  return ( <div className='background'>
    <div className='logo'>
        <div>Rumblings to-go</div>
<div className='logo-p'>Order from<spam className="red-text">7:30am till 2:45pm</spam> for collection to suit you<spam className="red-text"> (01775) 722014 </spam></div>
    </div>

<div >
<ul className='food-categories'>
  <li>Breakfast</li>
  <li>Cheese melt baguettes</li>
  <li>Jacket potatoes</li>
  <li>Toasties</li>
  <li>Sandwiches, rolls, wraps & baguettes</li>
  <li>Salad boxes</li>
  <li>Drinks</li>
</ul>
</div>
<div className='description'>
    <h1>Breakfast</h1>
    <p>Served all day, choose your first item bacon, sausage or egg then...</p>
    <div  className='breakfast-choice'>
        <div className='breakfast-box'>Sliced white or brown bread.. £2.95</div>
        <div className='breakfast-box'>Soft white rolls or baguettes £3.50</div>
        <div className='breakfast-box'>Breakfast box £1.50</div>
    </div>
</div>
    </div>
  );
}

export default Menu;