// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}

// This one below worked worked fine

sidebar: {
  '/1_Intro/': [
    '',     /* /foo/ */
    'Model',  /* /foo/one.html */
    'Self-Assesment'   /* /foo/two.html */
  ],

  '/2_Build/': [
    '',      /* /bar/ */
    'Assembly', /* /bar/three.html */
    'BOM'   /* /bar/four.html */
  ],

  // fallback
  '/': [
    '',        /* / */
    'contact', /* /contact.html */
    'about'    /* /about.html */
  ]
}
