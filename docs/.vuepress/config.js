module.exports = {
  title: 'CNC table design',
  dest: 'public',
  base: '/cnc-table-documentation/',
  theme: 'vuepress-theme-gocommons',

  themeConfig: {
    nav: [
      { text: 'Intro', link: '/' },
      { text: 'Build', link: '/2_Build/' },
      { text: 'Contribute', link: '/3_Contribute/' },
      { text: 'Training', link: '/4_Training/' },
      { text: 'Kit', link: '/5_Kit/' },
    ],

    displayAllHeaders: true, // Default: false
    sidebar: 'auto'

  }
};
