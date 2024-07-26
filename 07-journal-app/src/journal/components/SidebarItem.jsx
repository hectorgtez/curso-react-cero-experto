import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

export const SidebarItem = ({ title, body, id }) => {
  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title
  }, [ title ]);

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot/>
        </ListItemIcon>
        
        <Grid container>
          <ListItemText primary={ newTitle }/>
          <ListItemText secondary={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }/>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
