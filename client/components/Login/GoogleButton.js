import React, { PropTypes } from 'react';

import { IconButton } from 'material-ui';

class GoogleLogin extends React.Component {
  static propTypes = {
    loginHandler: PropTypes.func.isRequired,
    clientID: PropTypes.string.isRequired,
    scopes: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.googleAsyncInit = () => {
      gapi.init({
        clientID: this.props.clientID,
        scopes: this.props.scopes
      });
    };

    const loadAsync = function async(d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;

      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//apis.google.com/js/client.js?&output=embed';
      fjs.parentNode.insertBefore(js, fjs);
    };

    loadAsync(document, 'script', 'google-platform');
  }

  handleClick = () => {
    const config = {
      'immediate': false,
      'client_id': this.props.clientID,
      'output': 'embed',
      'scope': this.props.scopes || 'https://www.googleapis.com/auth/plus.me'
    };
    const self = this;

    gapi.auth.authorize(config, function cb() {
      const response = gapi.auth.getToken();
      self.props.loginHandler(response);
    });
  }

  render() {
    return (
      <IconButton style={{width: 'initial', height: 'initial'}}
        iconStyle={{fontSize: 50, color: '#E64A19'}} iconClassName="material-icons" tooltipPosition="bottom-center"
        tooltip="Login with Google" onClick={this.handleClick}>android</IconButton>
    );
  }
}

export default GoogleLogin;
