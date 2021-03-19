import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function createData( assest, type, stike, exp, price,compacity, status ) {
  return { assest, type, stike, exp, price, compacity,status};
}

const rows = [
  createData('BTC', 'C', 6.0, '02-28-2021', 4.0,1000,true),
  createData('USDT', 'P', 9.0, '03-12-2021', 4.3,2000,true),
  createData('ETH', 'C', 16.0, '03-14-2021', 6.0,3000,false),
  createData('VSYS', 'p', 3.7, '03-19-2021', 4.3,1000,false),
];

const BasicTable = ()=> {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Assest</TableCell>
            <TableCell align="right">Call / Put</TableCell>
            <TableCell align="right">Strike</TableCell>
            <TableCell align="right">Exp Date (MM-DD-YY)</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Compacity</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.asset}>
              <TableCell component="th" scope="row">
                {row.assest}
              </TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.stike}</TableCell>
                <TableCell align="right">{row.exp}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.compacity}</TableCell>
                <TableCell align="right">{row.status ? <Button variant="contained" color="primary">Collect</Button> 
                : <Button variant="contained" color="secondary" disabled>Collected</Button>}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default BasicTable