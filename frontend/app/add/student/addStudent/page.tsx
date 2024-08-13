// pages/add-student.tsx
"use client"
import React from 'react';
import AddForm from '@/components/addForm';

// Dummy data
const dummyClassrooms = [
  { id: '101', name: 'Classroom A' },
  { id: '102', name: 'Classroom B' },
];

const AddStudent = () => {
  const handleStudentSubmit = (data: { name: string; email: string; password: string; classroom: string }) => {
    console.log('Student Added:', data);
    // Implement your logic to handle adding the student here
  };

  return (
    <AddForm
      entityType="student"
      dummyClassrooms={dummyClassrooms}
      onSubmit={handleStudentSubmit}
    />
  );
};

export default AddStudent;
