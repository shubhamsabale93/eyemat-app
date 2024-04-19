import React, { useState } from 'react';

const SimpleForm = () => {
  // Define state variables for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as logging it to the console
    console.log(formData);
    // You can also perform actions like sending the data to a server here
  };

  // Handle input changes and update state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
