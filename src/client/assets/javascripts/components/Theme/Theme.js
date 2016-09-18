import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  /* custom stuff */
});

const Theme = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      {children}
    </div>
  </MuiThemeProvider>
);

export default Theme;
