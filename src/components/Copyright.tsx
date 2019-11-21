import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright: React.FunctionComponent<{}> = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    Copyright ©
    <Link color="inherit" href="https://faybler.com/">
      Faybler
    </Link>
    {' '}
    {new Date().getFullYear()}
  </Typography>
);

export default Copyright;
