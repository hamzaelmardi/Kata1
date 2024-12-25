
import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message.length <= 300) {
      setSuccessMessage('Demande de contact envoyée avec succès.');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
    <h1>Contact</h1>
    <form onSubmit={handleSubmit}>
    <div>
    <label>Email:</label>
  <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  />
  </div>
  <div>
  <label>Message:</label>
  <textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
  maxLength="300"
    />
    </div>
    <button type="submit">Envoyer</button>
    </form>
  {successMessage && <p>{successMessage}</p>}
  </div>
  );
};

export default Contact;
