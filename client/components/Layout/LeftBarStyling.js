import { Styles } from 'material-ui';

const {Spacing, Typography} = Styles;

module.exports = {
  menuHeader: {
    cursor: 'pointer',
    fontSize: 24,
    color: Typography.textFullWhite,
    lineHeight: Spacing.desktopKeylineIncrement + 'px',
    fontWeight: Typography.fontWeightLight,
    backgroundColor: '#E64A19',
    paddingLeft: Spacing.desktopGutter,
    marginBottom: 8
  }
};
