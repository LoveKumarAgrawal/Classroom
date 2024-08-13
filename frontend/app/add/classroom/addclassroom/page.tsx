"use client";

import { useState } from 'react';
import { Container, Button, Grid, TextField, Typography, Box, Card, CardHeader, Divider } from '@mui/material';

interface Classroom {
  name: string;
  startTime: string;
  endTime: string;
  days: string[];
}

const AddClassroom = () => {
  const [classroom, setClassroom] = useState<Classroom>({
    name: '',
    startTime: '',
    endTime: '',
    days: []
  });

  const [classrooms, setClassrooms] = useState<Classroom[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClassroom(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selectedDays = value.split(',').map(day => day.trim()).filter(day => day !== '');
    setClassroom(prev => ({
      ...prev,
      days: selectedDays
    }));
  };

  const handleSubmit = () => {
    setClassrooms([...classrooms, classroom]);
    setClassroom({
      name: '',
      startTime: '',
      endTime: '',
      days: []
    });
  };

  return (
    <Container>
      <Card>
        <CardHeader title="Add New Classroom" titleTypographyProps={{ variant: "h3" }} />
        <Divider />
        <Box p={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Classroom Name"
                name="name"
                value={classroom.name}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Time (e.g., 12:00 PM)"
                name="startTime"
                value={classroom.startTime}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Time (e.g., 6:00 PM)"
                name="endTime"
                value={classroom.endTime}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Days (comma-separated, e.g., Monday, Wednesday)"
                name="days"
                value={classroom.days.join(', ')}
                onChange={handleDaysChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Add Classroom
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
      <Box mt={4}>
        <Card>
          <CardHeader title="Classrooms List" titleTypographyProps={{ variant: "h3" }} />
          <Divider />
          <Box p={3}>
            {classrooms.length === 0 ? (
              <Typography variant="body1">No classrooms added yet.</Typography>
            ) : (
              <ul>
                {classrooms.map((cls, index) => (
                  <li key={index}>
                    <Typography variant="body1"><strong>Name:</strong> {cls.name}, <strong>Time:</strong> {cls.startTime} - {cls.endTime}, <strong>Days:</strong> {cls.days.join(', ')}</Typography>
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default AddClassroom;
