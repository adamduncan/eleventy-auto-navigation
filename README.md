## 11ty auto navigation book template

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->



## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

### To contribute 
```
git clone git@github.com:pietrop/11ty-auto-navigation-book-template.git
```
```
cd 11ty-auto-navigation-book-template
```

```
npm install
```

### To use

click on `Use this template`. Will prompt you to create a new repo based on this one. And you can then name it, clone it and follow rest of the instructions.

## Usage

```
npm start
```


## System Architecture

<!-- _High level overview of system architecture_ -->

<!-- ## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

Originally forked from [adamduncan/eleventy-auto-navigation](https://github.com/adamduncan/eleventy-auto-navigation)

>Directory structure-based navigation concept for eleventy-plugin-navigation. Based on a moonshoot :rocket: in [a discussion](https://github.com/11ty/eleventy/issues/1171#issuecomment-637038522) about automatic hierarchical navigation.
>
>[Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin defines its tree structure based on `key` and `parent` data in a site's pages.
>
>If we want the site tree to mimic the folder structure, we can automate the setting of these properties by leveraging [Computed Data](https://www.11ty.dev/docs/data-computed/#real-world-example), and a little URL path wrangling. See [`eleventyComputed.js`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_data/eleventyComputed.js) data, [`nav.njk`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_includes/components/nav.njk) include and [`startsWith`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_11ty/filters/startsWith.js) filter for most of the action. (Also check the Eleventy `log` for details on the navigation structure.)
>
>Under the hood here we're setting the `key` and `parent` values to their URL paths, which are inherently unique (whereas setting by page title could become problematic). We also pass the `order` property from the page's frontmatter to `eleventyNavigation`. This allows us to override the default sort order (based on [date created](https://www.11ty.dev/docs/collections/#sorting) in collections) should you want to manually re-order siblings (see _Mammals_ child pages, for example).
>
>Perhaps not a bullet-proof approach, but certainly gets us most the way there without breaking a sweat.

uses modified version of [Simple Tree Menu](http://www.dynamicdrive.com/dynamicindex1/navigate1.htm) for the collapsable sidebar navigation.


## Development env

 <!-- _How to run the development environment_ -->

- npm > `6.14.13`
- [Node 14](https://nodejs.org/docs/latest-v14.x/api)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

```
nvm use
```


<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build

<!-- _How to run build_ -->

```
npm run build
```

It generates the `_site` folder

## Tests

<!-- _How to carry out tests_ -->

_NA_

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

```
npm run build:deploy
```

or just `npm run deploy` if for some reason you don't need to build the site.


This publishes the site to github pages for this github repository.

---


## TODOS: 
- [x] sidebar Navbar layout
- [x] Tree navigation in sidebar
- [x] add to github ass template site 
- [x] publish to github pages
- [x] add other 11ty things, like syntax highlight etc.. and example pages 
- [x] Test local images, to see if needs extra configuration 
- [x] figure out why `_data` `site.js` is not working
- [x] figure out why current page has stop showing up
- [x] edit on github link 
- [x] support for font awesome icons
- [x] optional footer

_stretch goals_
- [x] add footer 
- [ ] breakdown templates into parts, eg head.njk etc..
- [x] make outward links open new tab 
- [ ] ~show markdown alt image text as description of image?~
- [x] images embed for social media share options
- [x] Other head social media tags
- [ ] optional Google analytics setup `~` (needs testing)
- [x] figure out what to do about mobile `~`
- [ ] ~see if can move content page inside `src/content`~
- [x] site search (~nice to have)
- [ ] 404 page 
- [ ] ...


---

## To use as a template
- [ ] Modify `/src/_data/site.js`
  - [ ] change `pathPrefix` on line 3
  - [ ] Change other site info
- [ ] Modify `/manifest.json` (TODO: minfest.json should pull a lot of the info from site.js)
- [ ] Markdown files and folder in `/src` folder. Eg replace with your content.
- [ ] Modify `/CNAME` file with name of your site
- [ ] Change the favicon if you wish. `public/favicon.ico`
- [ ] ...