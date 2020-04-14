import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, IconButton, InputBase, Divider } from '@material-ui/core'
import { Search } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    textAlign: 'end',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();
  const [searchInput, changeSearchInput] = useState('');
  return (
    <div style={{
      display: 'flex',
      margin: '10px',
      justifyContent: 'flex-end'
    }}>
      <Paper component="form" className={classes.root}>
        <InputBase
          fullWidth
          className={classes.input}
          placeholder="Search..."
          value={searchInput}
          onChange={(event) => {
            changeSearchInput(event.target.value)
          }}
        />
        <IconButton className={classes.iconButton} onClick={() => props.handleSearch(searchInput)}>
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchBar;