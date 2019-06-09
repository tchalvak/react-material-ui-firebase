import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import FacebookBoxIcon from 'mdi-material-ui/FacebookBox';
import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';
import GoogleIcon from 'mdi-material-ui/Google';
import MicrosoftIcon from 'mdi-material-ui/Microsoft';
import TwitterIcon from 'mdi-material-ui/Twitter';
import YahooIcon from 'mdi-material-ui/Yahoo';

import PropTypes from 'prop-types';

const styles = (theme) => ({
  dialogContent: {
    overflowY: 'hidden'
  },

  icon: {
    marginRight: theme.spacing(0.5)
  },

  divider: {
    margin: 'auto',

    width: theme.spacing(0.125),
    height: '100%'
  }
});

const genders = [
  'female',
  'male'
];

class SignUpDialog extends Component {
  handleKeyPress = (event) => {
    const key = event.key;

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (key === 'Enter') {
      this.props.onOkClick();
    }
  };

  render() {
    // Styling
    const { classes } = this.props;

    // Dialog Properties
    const { fullScreen, open } = this.props;

    // Dialog Events
    const { onClose } = this.props;

    if (!onClose) {
      return null;
    }

    const authProviders = [
      {
        key: 'facebook',
        icon: <FacebookBoxIcon className={classes.icon} />,
        backgroundColor: '#3c5a99',
        color: '#ffffff',
        name: 'Facebook'
      },
      {
        key: 'github',
        icon: <GitHubCircleIcon className={classes.icon} />,
        backgroundColor: '#24292e',
        color: '#ffffff',
        name: 'GitHub'
      },
      {
        key: 'google',
        icon: <GoogleIcon className={classes.icon} />,
        backgroundColor: '#4285f4',
        color: '#ffffff',
        name: 'Google'
      },
      {
        key: 'microsoft',
        icon: <MicrosoftIcon className={classes.icon} />,
        backgroundColor: '#f65314',
        color: '#ffffff',
        name: 'Microsoft'
      },
      {
        key: 'twitter',
        icon: <TwitterIcon className={classes.icon} />,
        backgroundColor: '#1da1f2',
        color: '#ffffff',
        name: 'Twitter'
      },
      {
        key: 'yahoo',
        icon: <YahooIcon className={classes.icon} />,
        backgroundColor: '#410093',
        color: '#ffffff',
        name: 'Yahoo'
      }
    ];

    return (
      <Dialog fullScreen={fullScreen} fullWidth maxWidth="md" open={open} onClose={onClose} onKeyPress={this.handleKeyPress}>
        <DialogTitle>
          Sign up for an account
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Grid container direction="column" spacing={1}>
                {authProviders.map((authProvider) => {
                  return (
                    <Grid key={authProvider.key} item>
                      <Button style={{ width: '100%', backgroundColor: authProvider.backgroundColor, color: authProvider.color }} variant="contained">
                        {authProvider.icon}
                        {authProvider.name}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            <Grid item xs>
              <Divider className={classes.divider} />
            </Grid>

            <Grid item xs={7}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    autoComplete="given-name"
                    fullWidth
                    label="First name"
                    margin="dense"
                    required
                    type="text"
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    autoComplete="family-name"
                    fullWidth
                    label="Last name"
                    margin="dense"
                    required
                    type="text"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    autoComplete="username"
                    fullWidth
                    label="Username"
                    margin="dense"
                    required
                    type="text"
                  />
                </Grid>

                <Grid item xs>
                  <FormControl fullWidth margin="dense" required>
                    <InputLabel>Gender</InputLabel>

                    <Select value="">
                      {genders.map((gender) => {
                        return (
                          <MenuItem key={gender} value={gender}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    autoComplete="email"
                    fullWidth
                    label="E-mail address"
                    margin="dense"
                    required
                    type="email"
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    autoComplete="email"
                    fullWidth
                    label="E-mail address confirmation"
                    margin="dense"
                    required
                    type="email"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    autoComplete="new-password"
                    fullWidth
                    label="Password"
                    margin="dense"
                    required
                    type="password"
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    autoComplete="password"
                    fullWidth
                    label="Password confirmation"
                    margin="dense"
                    required
                    type="password"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={onClose}>Cancel</Button>
          <Button color="primary" variant="contained">Sign Up</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

SignUpDialog.propTypes = {
  classes: PropTypes.object.isRequired,

  fullScreen: PropTypes.bool,
  open: PropTypes.bool.isRequired,

  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(SignUpDialog);