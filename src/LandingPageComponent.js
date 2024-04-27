// landingpage.js

import React, { useEffect } from 'react';

const LandingPageComponent = () => {
  useEffect(() => {
    // If there are any initialization functions in script.js, you might execute them here
  }, []);

  return (
    <div>
      {/* todo: put HTML here */}
      <div id="root">Hello from Landing Page</div>
    </div>
  );
};

export default LandingPageComponent;

