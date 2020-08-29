import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { CSVLink } from "react-csv";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  button: {
    textDecoration: 'none',
    backgroundColor: '#73D8F1',
    borderRadius: '0.8vw',
    border: 0,
    textAlign: 'center',
    outline: 'none',
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#0F4552',
    letterSpacing: '0.3vw',
    fontFamily: 'Montserrat',
    fontSize: '1.5rem',
    transition: '0.1s',
    mozBoxShadow: `
      inset 0 0 0.1vw #BDF2FF,
      0 0 3vw 0.1vw #73D8F1
    `,
    webkitBoxShadow: `
      inset 0 0 0.1vw #BDF2FF,
      0 0 3vw 0.1vw #73D8F1
    `,
    boxShadow: `
      inset 0 0 0.1vw #BDF2FF,
      0 0 3vw 0.1vw #73D8F1
    `,
    '&:hover': {
      mozBoxShadow: `
        inset 0 0 0.3vw #BDF2FF,
        0 0 3vw 0.3vw #73D8F1
      `,
      webkitBoxShadow: `
        inset 0 0 0.3vw #BDF2FF,
        0 0 3vw 0.3vw #73D8F1
      `,
      boxShadow: `
        inset 0 0 0.3vw #BDF2FF,
        0 0 3vw 0.3vw #73D8F1
      `,
      color: '#0F4552',
    },
    '&:active': {
      mozBoxShadow: `
        inset 0 0 0.3vw #000000,
        0 0 3vw 0.3vw #73D8F1
      `,
      webkitBoxShadow: `
        inset 0 0 0.3vw #000000,
        0 0 3vw 0.3vw #73D8F1
      `,
      boxShadow: `
        inset 0 0 0.3vw #000000,
        0 0 3vw 0.3vw #73D8F1
      `,
      color: '#0F4552',
    },
    '&:link': {
      color: '#0F4552',
    },
    '&:visited': {
      color: '#0F4552',
    }
  }
});

export default function CustomPaginationActionsTable({ rows, style }) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} style={style}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.email}>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell>
                  {row.first_name}
                </TableCell>
                <TableCell>
                  {row.last_name}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <br/><br/><br/>
      <div>
        <center>
        <CSVLink
          data={rows}
          filename={"connect-mindanao-2020-sigs.csv"}
          className={classes.button}
          target="_blank"
        >
          Export to CSV/Excel
        </CSVLink>
        </center>
      </div>
    </>
  );
}