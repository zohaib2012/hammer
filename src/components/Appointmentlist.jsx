import React, { useEffect } from "react";
import { useappointmentstore } from "../lib/store/useappointmentstore";
// import { useappointmentstore } from "../store/appointmentStore"; // Apne store ka correct path use karein

export const Appointmentlist = () => {
  const { getappoinment, appointments, loading } = useappointmentstore();

  // Fetch appointments on component mount
  useEffect(() => {
    getappoinment();
  }, []);
console.log(appointments)
  if (loading) {
    return <p className="text-center mt-8">Loading Appointments...</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <div
            key={appointment._id}
            className="border rounded-lg shadow-lg p-4 bg-white"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-2">
              {appointment.name}
            </h2>
            <p><strong>Age:</strong> {appointment.age}</p>
            <p><strong>Gender:</strong> {appointment.gender}</p>
            <p><strong>Phone:</strong> {appointment.phone}</p>
            <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
            <p><strong>Doctor:</strong> {appointment.doctor}</p>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">
          No Appointments Available
        </p>
      )}
    </div>
  );
};

// export default AppointmentList;
