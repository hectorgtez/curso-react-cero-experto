import { Box } from '@mui/system';
import { Toolbar } from '@mui/material';
import PropTypes from 'prop-types';

import { Navbar, Sidebar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      className='animate__animated animate__fadeIn animate__faster'
      sx={{ display: 'flex' }}
    >
      <Navbar drawerWidth={ drawerWidth }/>

      <Sidebar drawerWidth={ drawerWidth }/>

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3
        }}
      >
        <Toolbar/>

        { children }
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.array,
}
