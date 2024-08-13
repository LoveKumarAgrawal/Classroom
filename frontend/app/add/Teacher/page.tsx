"use client"
import { useState } from 'react';
import { Container, Button, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography, Card, CardHeader, Divider, IconButton, Tooltip } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Link from 'next/link';

// Dummy data
const dummyTeachers = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', phoneNumber: '1234567890', department: 'Mathematics', class: '10A' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phoneNumber: '0987654321', department: 'English', class: '10B' },
];

const AllTeacherTable = () => {
  const [teachers, setTeachers] = useState(dummyTeachers);

  const handleDelete = (id: string) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
      >
        <Link href="/add/Teacher/addTeacher" style={{ color: 'white', textDecoration: 'none' }}>
          Add Teacher
        </Link>
      </Button>
      <Card>
        <CardHeader title="All Teachers" titleTypographyProps={{ variant: "h3" }} />
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Phone Number</TableCell>
                <TableCell align='center'>Department</TableCell>
                <TableCell align='center'>Class</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow hover key={teacher.id}>
                  <TableCell>{teacher.name}</TableCell>
                  <TableCell align='center'>{teacher.email}</TableCell>
                  <TableCell align='center'>{teacher.phoneNumber}</TableCell>
                  <TableCell align='center'>{teacher.department}</TableCell>
                  <TableCell align='center'>{teacher.class}</TableCell>
                  <TableCell align='right'>
                    <Tooltip title="Edit Data" arrow>
                      <Link href={`/add-teacher?id=${teacher.id}`}>
                        <IconButton>
                          <EditTwoToneIcon />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip title="Delete Teacher" arrow>
                      <IconButton onClick={() => handleDelete(teacher.id)}>
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

export default AllTeacherTable;
