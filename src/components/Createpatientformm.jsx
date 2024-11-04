import React, { useState } from 'react';
import { usepatientStore } from '../lib/store/usepatientstore';

export const Createpatientformm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    serialno: '',
    age: '',
    disease: '',
  });

  const createPatient = usepatientStore((state) => state.createPatient);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPatient(formData);
    setFormData({
      name: '',
      email: '',
      password: '',
      serialno: '',
      age: '',
      disease: '',
    }); // Reset form
  };

  return (
    <div >

   
    <h1 className='mt-4 text-4xl text-center font-bold'>Register patient </h1>
    <div className='mx-56 my-10'>

      
  
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Patient Name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-2 border rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-2 border rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-2 border rounded-md"
      />
      <input
        type="text"
        name="serialno"
        placeholder="Serial Number"
        value={formData.serialno}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-2 border rounded-md"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-2 border rounded-md"
      />
      <input
        type="text"
        name="disease"
        placeholder="Disease"
        value={formData.disease}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-2 border rounded-md"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Register Patient
      </button>
    
    </form>
    </div>
    </div>
  );
};
