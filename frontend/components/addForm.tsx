"use client"
import React, { useState } from 'react';
import { Container, Grid, TextField, Button, MenuItem, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

interface FormProps {
  entityType: 'teacher' | 'student';
  dummyClassrooms: { id: string; name: string }[];
  onSubmit: (data: { name: string; email: string; password: string; classroom: string }) => void;
}

const AddForm: React.FC<FormProps> = ({ entityType, dummyClassrooms, onSubmit }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [classroom, setClassroom] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, password, classroom });
    router.push('/add/Teacher'); // Adjust redirect as needed
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New {entityType.charAt(0).toUpperCase() + entityType.slice(1)}
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Classroom"
              value={classroom}
              onChange={(e) => setClassroom(e.target.value)}
              fullWidth
            >
              {dummyClassrooms.map((cls) => (
                <MenuItem key={cls.id} value={cls.id}>
                  {cls.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add {entityType.charAt(0).toUpperCase() + entityType.slice(1)}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ ml: 2 }}
              onClick={() => router.push(`/add/${entityType}`)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddForm;
