

import React, { useState, useEffect } from 'react';
import FindCustomer from './findOne';
import Menu from './menu/menu';
function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://127.0.0.1:5000/users/customers/visi');
      const jsonData = await response.json();
     setData(jsonData.members);
      console.log(jsonData.members)
    }
  
    fetchData();





  }, []);

  return (
    <div className='body'>
      {/* <FindCustomer></FindCustomer>

    <div></div>
      {data.map((item, index) => (<>
        <div>
        <p key={index}> {item.first_name}</p>
          <h2>Customer Details</h2>
          <p>Customer ID: {item.customer_id}</p>
          <p>First Name: {item.first_name}</p>
          <p>Last Name: {item.last_name}</p>
          <p>Join Date: {item.join_date}</p>
        </div>
      </>
    
      ))} */}
<Menu>

</Menu>
      
    </div>
  );
}

export default MyComponent;