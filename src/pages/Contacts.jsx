import { useState } from 'react';

function Contacts() {
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
        setName(value);
      } else {
        setEmail(value);
      }
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message') {
        setMessage(value);
      }
  };

  const checkFullName = (e) => {
    if (fullName === '') {
      alert('Please make sure to enter your name.');
    }
  }

  const checkEmail = (e) => {
    const emailValidator = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (emailValidator.test(email)) {
      return;
    } else {
      alert('Please make sure to enter a valid email address.');
    }
  }

  const checkMessage = (e) => {
    if (message === '') {
      alert('Please make sure to enter a message.');
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`From ${fullName} at ${email}:
    
    ${message}`
    );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
    <h2>Contacts</h2>
    <section id="thecontacts">
        <div className="flexcontainer">
            <form className="form" onSubmit={handleFormSubmit}>
                <div>
                  <h3>Full Name:</h3>
                    <input
                    value={fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    onBlur={checkFullName}
                    type="text"
                    placeholder="Your Name"
                    />
                </div>
                <div>
                  <h3>Email Address:</h3>
                    <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={checkEmail}
                    type="email"
                    placeholder="Your eMail"
                    />
                </div>
                <div>
                  <h3>Message:</h3>
                    <textarea
                    value={message}
                    name="message"
                    onChange={handleTextAreaChange}
                    onBlur={checkMessage}
                    type="text"
                    placeholder="Your Message"
                    />
                </div>
                <button type="submit">
                Submit
                </button>
            </form>
        </div>
    </section>
    </div>
  );
}

export default Contacts;
