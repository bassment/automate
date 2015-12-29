import React, { PropTypes } from 'react';

class FacebookLogin extends React.Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    appId: PropTypes.string.isRequired,
    xfbml: PropTypes.bool,
    scope: PropTypes.string,
    textButton: PropTypes.string,
    autoLoad: PropTypes.bool,
    size: PropTypes.string,
    cookie: PropTypes.string
  }

  static defaultProps = {
    scope: 'public_profile, email',
    xfbml: true
  }

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

    const loadAsync = function async(d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;

      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    };

    // Load the SDK asynchronously
    loadAsync(document, 'script', 'facebook-jssdk');
  }

  responseApi = (authResponse) => {
    FB.api('/me', (me) => {
      me.accessToken = authResponse.accessToken;
      this.props.callback(me);
    });
  }

  checkLoginState = (response) => {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.props.callback) {
        console.log(response.status);
        this.props.callback({status: response.status});
      }
    }
  }

  click = () => {
    FB.login(this.checkLoginState, {scope: this.props.scope});
  };

  render() {
    return (
      <div>
        <button onClick={this.click}>
            Login with Facebook
        </button>
      </div>
    );
  }
}

export default FacebookLogin;
