import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const RightBottomTableContainer = styled(TableContainer)({
  position: "absolute",
  bottom: 0,
  right: 0,
  height: "50%",
  width: "50%",
  overflow: "auto"
});

//Data Table component to display the content of filteredByPolygon
const Datatable = () => {

  const data = useSelector(state => state.demo.app.filteredByPolygon)

  return (
    data !== null &&
    <RightBottomTableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow key={-1}>
            <TableCell component="th" scope="row" key={0}>
              No
            </TableCell>
            <TableCell component="th" scope="row" key={1}>
              Year built
            </TableCell>
            <TableCell component="th" scope="row" key={2}>
              Lat
            </TableCell>
            <TableCell component="th" scope="row" key={3}>
              Lon
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, i) => (<TableCell align="right" key={i}>{`${cell}`}</TableCell>))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RightBottomTableContainer>
  );
};






export default Datatable;