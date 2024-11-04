import React, { useEffect } from "react";
import { usepatientStore } from "../lib/store/usepatientstore";


export default function PatientList() {
  const { patients, loading, getpatient } = usepatientStore();

  // Fetch patients on component mount
  useEffect(() => {
    getpatient();
  }, []);
console.log(patients)
  if (loading) return <p className="text-center text-xl">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Patient List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {patients.map((patient) => (
          <div
            key={patient._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div>

            <h2 className="text-center  text-xl font-bold mb-2">{patient.name}</h2>
            </div>
            <p className="text-gray-600">Email: {patient.email}</p>
            {/* <p className="text-gray-600">password: {patient.password}</p> */}
            <p className="text-gray-600">Age: {patient.age}</p>
            <p className="text-gray-600">Serial no: {patient.serialno}</p>
            <p className="text-gray-600">Disease: {patient.disease}</p>
            {/* <p className="text-gray-600">Condition: {patient.condition || "N/A"}</p> */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
