import React, { PropTypes } from 'react';

import { IconButton } from 'material-ui';

class FacebookLogin extends React.Component {

  static propTypes = {
    callback: PropTypes.func.isRequired,
    appId: PropTypes.string.isRequired,
    xfbml: PropTypes.bool,
    scope: PropTypes.string,
    textButton: PropTypes.string,
    autoLoad: PropTypes.bool,
    size: PropTypes.string
  };

  static defaultProps = {
    textButton: 'Facebook',
    scope: 'public_profile, email',
    xfbml: true,
    size: 'medium'
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: this.props.appId,
        xfbml: this.props.xfbml,
        cookie: this.props.cookie,
        version: 'v2.3'
      });

      if (this.props.autoLoad) {
        FB.getLoginStatus(this.checkLoginState);
      }
    };

    var loadAsync = function(d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;

      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }

    // Load the SDK asynchronously
    loadAsync(document, 'script', 'facebook-jssdk');
  }

  responseApi = (authResponse) => {
    FB.api('/me', (me) => {
      me.accessToken = authResponse.accessToken;
      this.props.callback(me);
    });
  };

  checkLoginState = (response) => {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.props.callback) {
        this.props.callback({status: response.status});
      }
    }
  };

  click = () => {
    FB.login(this.checkLoginState, {scope: this.props.scope});
  };

  render() {
    return (
      <IconButton style={{width: 'initial', height: 'initial'}}
        iconStyle={{fontSize: 50, color: '#E64A19'}} iconClassName="material-icons" tooltipPosition="bottom-center"
        tooltip="Login with Facebook" onClick={this.click}>face</IconButton>
    );
  }
}

export default FacebookLogin;
