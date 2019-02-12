module.exports = {
  title: 'CNC table design',
  dest: 'public',
  base: '/cnc-table-documentation/',
  theme: 'vuepress-theme-gocommons',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'The Project', link: '/the-project/' },
      { text: 'Guide', link: 'https://google.com' },
    ],

    sidebar: [
      ['/the-project/', 'The project'],
      ['/CODEofCONDUCT.md', 'Code of conduct'],
    ]

  }
};
