"use client";
import { useState } from 'react';
import { Container, Button, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography, Card, CardHeader, Divider, IconButton, Tooltip } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Link from 'next/link';

// Dummy data for classrooms
const dummyClassrooms = [
  { id: '1', name: 'Classroom 1', startTime: '12:00 PM', endTime: '06:00 PM', days: 'Monday to Saturday' },
  { id: '2', name: 'Classroom 2', startTime: '09:00 AM', endTime: '03:00 PM', days: 'Monday to Friday' },
];

const ClassroomTable = () => {
  const [classrooms, setClassrooms] = useState(dummyClassrooms);

  const handleDelete = (id: string) => {
    setClassrooms(classrooms.filter(classroom => classroom.id !== id));
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
      >
        <Link href="/add/classroom" style={{ color: 'white', textDecoration: 'none' }}>
          Add Classroom
        </Link>
      </Button>
      <Card>
        <CardHeader title="All Classrooms" titleTypographyProps={{ variant: "h3" }} />
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='center'>Start Time</TableCell>
                <TableCell align='center'>End Time</TableCell>
                <TableCell align='center'>Days</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classrooms.map((classroom) => (
                <TableRow hover key={classroom.id}>
                  <TableCell>{classroom.name}</TableCell>
                  <TableCell align='center'>{classroom.startTime}</TableCell>
                  <TableCell align='center'>{classroom.endTime}</TableCell>
                  <TableCell align='center'>{classroom.days}</TableCell>
                  <TableCell align='right'>
                    <Tooltip title="Edit Classroom" arrow>
                      <Link href={`/edit-classroom?id=${classroom.id}`}>
                        <IconButton>
                          <EditTwoToneIcon />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip title="Delete Classroom" arrow>
                      <IconButton onClick={() => handleDelete(classroom.id)}>
                        <DeleteTwoToneIcon />
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

export default ClassroomTable;
