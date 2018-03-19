import React from 'react';
import { Grid, Paper, Typography } from 'material-ui';

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBotton: 10 }
}

export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
              <Typography>
                a
              </Typography>
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        Right Pane
      </Paper>
    </Grid>
  </Grid>
);