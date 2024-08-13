"use client"
import { FC } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface DashboardProps {
  user: {
    name: string;
    email: string;
    role: 'principal' | 'teacher' | 'student';
  };
}

const DashboardComponent: FC<DashboardProps> = ({ user }) => {
  // const router = useRouter();

  // const handleAddTeacher = () => router.push('/add-teacher');
  // const handleAddStudent = () => router.push('/add-student');
  // const handleAddClassroom = () => router.push('/add-classroom');
  // const handleAddTimetable = () => router.push('/add-timetable');
  // const handleViewTimetable = () => router.push('/view-timetable');
  // const handleViewStudents = () => router.push('/view-students');

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.name}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Email: {user.email}
        </Typography>
        <Box sx={{ mt: 4 }}>
          {user.role === 'principal' && (
            <>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Add Teacher
              </Button>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Add Student
              </Button>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Add Classroom
              </Button>
              <Link href={'/add/student'}>
                <Button variant='contained' color='primary' sx={{ mr: 2 }}>
                  All Students
                </Button>
              </Link>
              <Link href={'/add/Teacher'}>
                <Button variant='contained' color='primary'>
                  All Teachers
                </Button>
              </Link>
            </>
          )}
          {user.role === 'teacher' && (
            <>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Add Student
              </Button>
              <Button variant="contained" color="primary" >
                Add Timetable
              </Button>
            </>
          )}
          {user.role === 'student' && (
            <>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                View Timetable
              </Button>
              <Button variant="contained" color="primary" >
                View Classmates
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardComponent;
