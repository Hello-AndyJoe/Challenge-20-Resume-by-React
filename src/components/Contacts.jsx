import { useState } from 'react';

function Contacts() {
  // Here we set two state variables for fullName and email using `useState`
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setName or setEmail based on what field the user is typing in
    if (name === 'fullName') {
        setName(value);
      } else if (name === 'email') {
        setEmail(value);
      } else {
        setMessage(message);
      }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  };

  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your eMail"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Your eMail"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contacts;
