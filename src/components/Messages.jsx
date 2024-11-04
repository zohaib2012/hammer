// 

import React, { useEffect, useCallback } from 'react';
import { usemessagesstore } from '../lib/store/usemessagesstore';

const Messages = () => {
  // Accessing state inside the component with selective mapping
  const messages = usemessagesstore((state) => state.messages);
  const loading = usemessagesstore((state) => state.loading);
  const getMessages = usemessagesstore((state) => state.getMessages);

  // Using useCallback to memoize the getMessages function
  const fetchMessages = useCallback(() => {
    getMessages();
  }, [getMessages]);

  // Fetch messages only once when the component mounts
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);


  console.log('Fetched Messages:', messages); // Debugging

  if (loading) {
    return <p>Loading messages...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Messages</h1>

      <div className="bg-white p-4 shadow rounded">
        {messages.length === 0 ? (
          <p>No messages available.</p>
        ) : (
          <ul>
            {messages.map((msg, index) => (
              <li key={index} className="border-b border-gray-200 py-2">
                <p><strong>Name:</strong> {msg.name}</p>
                <p><strong>Phone:</strong> {msg.phone}</p>
                <p><strong>Subject:</strong> {msg.subject}</p>
                <p><strong>Message:</strong> {msg.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Messages;
