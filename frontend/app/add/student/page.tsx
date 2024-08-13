// components/StudentTable.tsx
"use client";

import React from 'react';
import { Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Card, CardHeader, Divider, IconButton, Tooltip, Button } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useRouter } from 'next/navigation';

// Dummy data
const dummyStudents = [
  { id: '1', name: 'John Doe', email: 'john@example.com', classroom: 'Classroom A' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', classroom: 'Classroom B' },
];

const StudentTable: React.FC = () => {
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(`/edit-student/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log('Delete student with id:', id);
    // Implement delete logic here
  };

  const handleAddStudent = () => {
    router.push('/add/student/addStudent');
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center" mb={2}>
        <Grid item>
          <Typography variant="h4">All Students</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddStudent}>
            Add Student
          </Button>
        </Grid>
      </Grid>
      <Card>
        <CardHeader
          title="Student List"
          titleTypographyProps={{ variant: 'h5' }}
        />
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Classroom</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyStudents.map((student) => (
                <TableRow hover key={student.id}>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                      {student.name}
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                      {student.email}
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                      {student.classroom}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit Student" arrow>
                      <IconButton
                        onClick={() => handleEdit(student.id)}
                        sx={{ '&:hover': { background: 'rgba(0, 0, 0, 0.08)' }, color: 'primary.main' }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Student" arrow>
                      <IconButton
                        onClick={() => handleDelete(student.id)}
                        sx={{ '&:hover': { background: 'rgba(255, 0, 0, 0.08)' }, color: 'error.main' }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default StudentTable;
