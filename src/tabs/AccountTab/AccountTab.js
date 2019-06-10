import React, { Component } from 'react';

import DialogContent from '@material-ui/core/DialogContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import moment from 'moment';

import PropTypes from 'prop-types';

class AccountTab extends Component {
  render() {
    // Properties
    const { user } = this.props;

    return (
      <DialogContent>
        <List disablePadding>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={user.photoURL} alt="Avatar" />
            </ListItemAvatar>

            <ListItemText primary="Avatar" />

            <ListItemSecondaryAction>
              <Tooltip title="Change">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText
              primary="First name"
              secondary="John"
            />

            <ListItemSecondaryAction>
              <Tooltip title="Change">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Last name"
              secondary="Doe"
            />

            <ListItemSecondaryAction>
              <Tooltip title="Change">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Username"
              secondary={user.displayName}
            />

            <ListItemSecondaryAction>
              <Tooltip title="Change">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>

            <ListItemText
              primary="E-mail address"
              secondary={user.email}
            />

            <ListItemSecondaryAction>
              <Tooltip title="Change">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Gender"
              secondary="Male"
            />

            <ListItemSecondaryAction>
              <Tooltip title="Change">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>

            <ListItemText
              primary="Last sign-in"
              secondary={moment(user.metadata.lastSignInTime).format('LLLL')}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>

            <ListItemText
              primary="Signed up"
              secondary={moment(user.metadata.creationTime).format('LLLL')}
            />
          </ListItem>
        </List>
      </DialogContent>
    );
  }
}

AccountTab.propTypes = {
  user: PropTypes.object.isRequired
};

export default AccountTab;