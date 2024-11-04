
import React, { useState } from 'react';
import { usemessagesstore } from '../lib/store/usemessagesstore';

export const Sendmesageform = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const sendMessage = usemessagesstore((state) => state.sendMessage);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, subject, message } = formData;

    // Prevent submission if any field is empty
    if (!name.trim() || !phone.trim() || !subject.trim() || !message.trim()) return;

    await sendMessage(formData); // Send form data to backend
    setFormData({ name: '', phone: '', subject: '', message: '' }); // Reset form after submission
  };

  return (
    
    <div>
  <div>
    <h1 className='text-center text-4xl font-bold m-5 '> Talk with us </h1>
  </div>
<div className='mx-64 my-6' >



    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter your subject"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="w-full h-24 px-4 py-2 border rounded-md"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  </div>
  </div>
  );
};

// export default SendMessageForm;
