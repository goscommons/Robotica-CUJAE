 This website is going to act as a portal template for every group/project that is interested of being part of the [GO!Commons][gocommons] open source community. Every new group/project could fork this template and using a simple yml file should be enough to re-edit and create new content in combination with markdown wich allow for flexible composition of content.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Building locally](#building-locally)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Building locally

This project uses [yarn](https://yarnpkg.com), you'll need to install this globally before you can get started.

```
npm install -g yarn
```

Then you need to install the project dependencies:

```
yarn install
```

Now you're ready to go.
To run the local dev server just use the following command:

```
yarn start
```

Your website should be available at [http://localhost:8080/]

_Read more at VuePress' [documentation][]._

[project]: https://vuepress.vuejs.org/
[documentation]: https://vuepress.vuejs.org/guide/
[gocommons]: https://go_commons.gitlab.io/home/
