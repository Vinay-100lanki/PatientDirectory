import React from 'react';

function PatientRow({ patient }) {
  return (
    <div className="flex justify-between border-b py-2">
      <span>{patient.patient_name}</span>
      <span>{patient.age}</span>
      <span>{patient.medical_issue}</span>
      <span>{patient.contact[0]?.email}</span>
      <span>{patient.contact[0]?.address}</span>
      <span>{patient.contact[0]?.number}</span>
    </div>
  );
}

export default PatientRow;