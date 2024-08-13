import { FC } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import DashboardComponent from '@/components/dashboard';

const Dashboard: FC = () => {
  const user = {
    name: "love",
    email: "love@dev.com",
    role: 'principal' as 'principal' | 'teacher' | 'student'
  }

  return (
    <DashboardComponent user={user}/>
  );
};

export default Dashboard;
