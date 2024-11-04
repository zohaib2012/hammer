import React, { useState } from 'react';
import { usedoctorstore } from '../lib/store/usedoctorstore';
// import { usedoctorstore } from '../lib/store/usedoctorstore';
// import { useDoctorStore } from './store'; // ensure this path is correct

const DoctorRegistrationForm = () => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        password: '',
        specialization: '',
        consultationFees: ''
    });

    const { adddoctor } = usedoctorstore(); // accessing the adddoctor function from Zustand store

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctorData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await adddoctor(doctorData);
        // Reset the form after submission
        setDoctorData({
            name: '',
            email: '',
            password: '',
            specialization: '',
            consultationFees: ''
        });
    };
    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Register Doctor</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={doctorData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={doctorData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={doctorData.password}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Specialization</label>
                    <input
                        type="text"
                        name="specialization"
                        value={doctorData.specialization}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Consultation Fees</label>
                    <input
                        type="number"
                        name="consultationFees"
                        value={doctorData.consultationFees}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Add Doctor
                </button>
            </form>
        </div>
    );
};

export default DoctorRegistrationForm;
