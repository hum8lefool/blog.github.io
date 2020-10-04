const meta = {
  // Metadata
  siteTitle: 'HumbleFool - Tech-enthusiast Doctor',
  siteDescription:
    'HumbleFool - Creative & tenacious doctor who loves technology.',
  siteTitleAlt: 'HumbleFool',
  siteShortName: 'HumbleFool',
  siteUrl: 'https://hum8lefool.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@hum8lefool',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'HumbleFool',
  //googleAnalyticsID: '',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
