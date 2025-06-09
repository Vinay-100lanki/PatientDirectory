import React from 'react';

function PatientCard({ patient }) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <img
        src={patient.photo_url}
        alt={patient.patient_name}
        className="w-16 h-16 rounded-full mb-2"
      />
      
      <h2 className="text-lg font-bold">{patient.patient_name}</h2>
      <p>Age: {patient.age}</p>
      <p>Issue: {patient.medical_issue}</p>
      <p>Email: {patient.contact[0]?.email}</p>
      <p>Number: {patient.contact[0]?.number}</p>
      <p>Address: {patient.contact[0]?.address}</p>
    </div>
  );
}

export default PatientCard;