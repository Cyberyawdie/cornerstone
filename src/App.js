import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Routes from './Routes';
import Index from './Elearning';
import Page from './components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        {/* <Routes /> */}
        <Index/>
      </BrowserRouter>
    </Page>
  );
};

export default App;
