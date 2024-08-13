// pages/add-teacher.tsx
"use client"
import React from 'react';
import AddForm from '@/components/addForm';

// Dummy data
const dummyClassrooms = [
  { id: '101', name: 'Classroom A' },
  { id: '102', name: 'Classroom B' },
];

const AddTeacher = () => {
  const handleTeacherSubmit = (data: { name: string; email: string; password: string; classroom: string }) => {
    console.log('Teacher Added:', data);
    // Implement your logic to handle adding the teacher here
  };

  return (
    <AddForm
      entityType="teacher"
      dummyClassrooms={dummyClassrooms}
      onSubmit={handleTeacherSubmit}
    />
  );
};

export default AddTeacher;
