import React, { useState } from 'react';

function FindCustomer() {
  const [customerId, setCustomerId] = useState('');
  const [customer, setCustomer] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:5000/users/customers/${customerId}`)
      .then(response => response.json())
      .then(data => setCustomer(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Find a Customer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="customerId">Enter Customer ID:</label>
        <input type="text" id="customerId" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
        <button type="submit">Find Customer</button>
      </form>
      {customer && (
        <div>
          <h2>Customer Details</h2>
          <p>Customer ID: {customer.customer_id}</p>
          <p>First Name: {customer.first_name}</p>
          <p>Last Name: {customer.last_name}</p>
          <p>Join Date: {customer.join_date}</p>
        </div>
      )}
    </div>
  );
}

export default FindCustomer;