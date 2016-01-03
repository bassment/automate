module.exports = {
  verticalCenter: {
    minHeight: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  socialButtons: {
    textAlign: 'center'
  },
  fullscreenBg: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: '-100',
    '@media (max-width: 767px)': {
      background: "url('images/Raccoon.jpg') center center / cover no-repeat"
    }
  },

  fullscreenBgVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    width: '300%',
    left: '-100%',
    width: '300%',
    left: '-100%',
    '@media (max-width: 767px)': {
      display: 'none'
    }
  }
}
