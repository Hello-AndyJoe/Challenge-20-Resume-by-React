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
    <section id="thecontacts">
        <h2>Contacts</h2>
        <div className="flexcontainer">
            <form className="form" onSubmit={handleFormSubmit}>
                <label>Your Name
                    <input
                    value={fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Name"
                    />
                </label>
                <label>Your Email
                    <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Your eMail"
                    />
                </label>
                <label>Your Message
                    <textarea
                    value={message}
                    name="message"
                    onChange={handleTextAreaChange}
                    type="text"
                    placeholder="Your eMail"
                    />
                </label>
                <button type="submit">
                Submit
                </button>
            </form>
        </div>
    </section>
  );
}

export default Contacts;
