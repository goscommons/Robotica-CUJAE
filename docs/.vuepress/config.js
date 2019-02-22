module.exports = {
  title: 'CNC table design',
  dest: 'public',
  base: '/cnc-table-documentation/',
  theme: 'vuepress-theme-gocommons',

  themeConfig: {
    nav: [
      { text: 'Intro', link: '/1_Intro/' },
      { text: 'Build', link: '/2_Build/' },
      { text: 'Contribute', link: '/3_Contribute/' },
      { text: 'Training', link: '/4_Training/' },
      { text: 'Kit', link: '/5_Kit/' },
    ],

    sidebar: {
      '/1_Intro/': [
        '',
        'Model',  /* /foo/one.html */
        'Self-Assesment'   /* /foo/two.html */
      ],

      '/2_Build/': [
        '',      /* /bar/ */
        'Assembly', /* /bar/three.html */
        'BOM'   /* /bar/four.html */
      ],

      '/3_Contribute/': [
        '',      /* /bar/ */
        'For-devs'
      ],

      // fallback
      '/': [
        ''
      ]
    }

  }
};
