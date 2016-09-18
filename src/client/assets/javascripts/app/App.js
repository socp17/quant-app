import React, { PropTypes } from 'react';
import Theme from 'components/Theme';
import AppBar from 'material-ui/AppBar';

const App = (props) => (
  <Theme>
    <AppBar title="Quant" />
    <div>
      {React.cloneElement({...props}.children, {...props})}
    </div>
  </Theme>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
