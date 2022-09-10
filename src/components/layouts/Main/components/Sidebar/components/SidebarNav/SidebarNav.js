import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material/styles';


const SidebarNav = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://res.cloudinary.com/dcaltxhyy/image/upload/v1662576201/logo_hosylx.svg'
                : 'https://res.cloudinary.com/dcaltxhyy/image/upload/v1662576201/logo_hosylx.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
     
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
