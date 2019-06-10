import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Hidden from '@material-ui/core/Hidden';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PaletteIcon from '@material-ui/icons/Palette';
import LinkIcon from '@material-ui/icons/Link';
import SecurityIcon from '@material-ui/icons/Security';

import SwipeableViews from 'react-swipeable-views';

import AccountTab from '../../tabs/AccountTab/AccountTab';

import PropTypes from 'prop-types';

const tabs = [
  {
    key: 'account',
    icon: <AccountCircleIcon />,
    label: 'Account'
  },

  {
    key: 'appearance',
    icon: <PaletteIcon />,
    label: 'Appearance'
  },

  {
    key: 'connections',
    icon: <LinkIcon />,
    label: 'Connections'
  },

  {
    key: 'security',
    icon: <SecurityIcon />,
    label: 'Security'
  }
];

class SettingsDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    };
  }

  handleKeyPress = (event) => {
    const key = event.key;

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (key === 'Enter') {
      this.props.onOkClick();
    }
  };

  handleTabChange = (event, value) => {
    this.setState({
      selectedTab: value
    });
  };

  handleIndexChange = (index) => {
    this.setState({
      selectedTab: index
    });
  };

  render() {
    // Dialog Properties
    const { fullScreen, open } = this.props;

    // Custom Properties
    const { user } = this.props;

    // Dialog Events
    const { onClose } = this.props;

    const { selectedTab } = this.state;

    if (!onClose) {
      return null;
    }

    return (
      <Dialog fullScreen={fullScreen} open={open} onClose={onClose} onKeyPress={this.handleKeyPress}>
        <DialogTitle>Settings</DialogTitle>

        <Tabs indicatorColor="primary" textColor="primary" value={selectedTab} onChange={this.handleTabChange}>
          {tabs.map((tab) => {
            return (
              <Tab key={tab.key} icon={tab.icon} label={tab.label} />
            );
          })}
        </Tabs>

        <Hidden only="xs">
          {selectedTab === 0 &&
            <AccountTab user={user} />
          }
        </Hidden>

        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <SwipeableViews index={selectedTab} onChangeIndex={this.handleIndexChange}>
            <AccountTab user={user} />
          </SwipeableViews>
        </Hidden>
      </Dialog>
    );
  }
}

SettingsDialog.propTypes = {
  fullScreen: PropTypes.bool,
  open: PropTypes.bool.isRequired,

  user: PropTypes.object.isRequired,

  onClose: PropTypes.func.isRequired
};

export default SettingsDialog;