import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {  useTheme } from '@mui/material/styles';


const Topbar = ({ colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="CMTC"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://res.cloudinary.com/dcaltxhyy/image/upload/v1662576201/logo_hosylx.svg'
              : 'https://res.cloudinary.com/dcaltxhyy/image/upload/v1662576201/logo_hosylx.svg'
          }
          height={1}
          width={1}
        />
      </Box>
     
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
