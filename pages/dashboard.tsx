import React from 'react';
import NavBar from '../components/navBar';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    position:'relative',
    left:'30%',
    marginTop:'1%'
  },
});

function createData(firstName: string, lastName: string, email: string, rol: string) {
  return { firstName, lastName, email, rol};
}
const customData = require('../userdata.json');
const rows = [
  createData(customData.data.user.firstName, customData.data.user.lastName, customData.data.user.email, customData.data.user['roles']['0'].name),
];


export default function Dashboard() {
    const classes = useStyles();
  return (
    <div>
        <NavBar/>
        <TableContainer component={Paper} className={classes.table} >
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Rol</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row}>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.rol}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}