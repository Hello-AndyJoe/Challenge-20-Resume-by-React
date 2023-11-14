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

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
