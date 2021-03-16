import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      width: 400,
      margin: '0 auto 60px',
    },
  },
}));

export const PaginationButtons = ({ handlePageChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={9}
        hidePrevButton
        hideNextButton
        size='large'
        onChange={e => handlePageChange(e)}
      />
    </div>
  );
};
