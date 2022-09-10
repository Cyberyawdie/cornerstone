import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
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

          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                target="_blank"
                underline="none"
                component="a"
                href="https://www.facebook.com/Cornerstone-Medical-Training-Center-107220402082805"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                target="_blank"
                underline="none"
                component="a"
                href="https://www.linkedin.com/company/cornerstone-medical-training-center/"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>
            </Box>

            <Box marginTop={1} marginRight={2}>
              <Link
                target="_blank"
                underline="none"
                component="a"
                href="https://www.instagram.com/cornerstonemedicaltraining/"
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                target="_blank"
                underline="none"
                component="a"
                href="https://www.youtube.com/channel/UCRjTrrtIrT27s8yWMHKPsow"                
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Cornerstone Medical Training Center 2022. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
