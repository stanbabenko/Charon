// LandingPageComponent.js
import React, { useEffect } from 'react';
import './style.css';

//import React from 'react';

const LandingPageComponent = () => {
  useEffect(() => {
    // If there are any initialization functions, you might execute them here
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Charon</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.3/tailwind.min.css' />
      </head>
      <body>
        <div id="root"></div>
        {/* You can optionally add your React component(s) here */}
        <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.13.0/umd/react.production.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.0/umd/react-dom.production.min.js'></script>
        <script src='https://unpkg.com/prop-types/prop-types.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/@react-spring/web@9.0.0-rc.3/index.umd.js'></script>
        <script src='https://unpkg.com/recharts@1.6.2/umd/Recharts.min.js'></script>
        <script type="module" src="./script.js"></script>
      </body>
    </html>
  );
};

export default LandingPageComponent;
