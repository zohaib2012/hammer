

import { create } from 'zustand';

import axioinstance from '../axios';

export const usemessagesstore = create((set) => ({
  messages: [], // Messages state
  loading: false, // Loading state

  // Send a new message
  sendMessage: async (messageData) => {
    try {
      const response = await axioinstance.post('http://localhost:3000/api/sendmessage', messageData);
      console.log('Message sent:', response.data);
      set((state) => ({
        messages: [...state.messages, response.data], // Add new message to the state
      }));
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  },

  // Get all messages from backend
  getMessages: async () => {
    set({ loading: true });
    try {
      const response = await axioinstance.get('http://localhost:3000/api/getmessages');
      set({ messages: response.data.getmessages, loading: false });
      console.log(response.data.getmessages); // Verify response structure

  
    } catch (error) {
      console.error('Failed to fetch messages:', error);
      set({ loading: false });
    }
  },
}));


