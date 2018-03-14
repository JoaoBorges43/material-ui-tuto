import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

export default props =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" gutterBotton>
        Exercise Database
      </Typography>
    </Toolbar>
  </AppBar>