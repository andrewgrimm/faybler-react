import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) => createStyles({
  copyright: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
  },
}));

const Copyright: React.FunctionComponent<{}> = () => {
  const classes = useStyles({});

  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
      Copyright ©
      <Link color="inherit" href="https://faybler.com/">
        Faybler
      </Link>
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
