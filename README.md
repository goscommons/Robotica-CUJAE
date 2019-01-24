This website is going to act as a portal template for every group/project that is interested of being part of the [GO!Commons][gocommons] open source community. Every new group/project could fork this template and using a simple yml file should be enough to re-edit and create new content in combination with markdown wich allow for flexible composition of content.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [Building locally](#building-locally)
- [GitLab CI](#gitlab-ci)

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

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: node:9.11.1

pages:
  cache:
    paths:
    - node_modules/

  script:
  - yarn install
  - yarn build

  artifacts:
    paths:
    - public

  only:
  - gl-pages

```

This sets up a `node9.11.1` environment, then uses `yarn install` to install dependencies and `yarn build` to build out the website to the `./public` directory.
It also caches the `node_modules` directory to speed up sebsequent builds.


[project]: https://vuepress.vuejs.org/
[documentation]: https://vuepress.vuejs.org/guide/
[gocommons]: https://go_commons.gitlab.io/home/
[ci]: https://about.gitlab.com/gitlab-ci/
