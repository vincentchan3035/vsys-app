import * as React from 'react';
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
    minWidth: 400,
  },
  hideLastBorder: {
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
});

function createData(type, price, APY ) {
  return { type, price, APY };
}

const rows = [
  createData('CALL', 400, "8.23%"),
];

export default function OrderTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={0}  >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell >Strike Price</TableCell>
            <TableCell >APY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.hideLastBorder}>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell >{row.price}</TableCell>
              <TableCell >{row.APY}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

