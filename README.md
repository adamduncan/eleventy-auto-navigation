# eleventy-auto-navigation

fork 
<!-- https://github.com/adamduncan/eleventy-auto-navigation -->

Directory structure-based navigation concept for eleventy-plugin-navigation. Based on a moonshoot :rocket: in [a discussion](https://github.com/11ty/eleventy/issues/1171#issuecomment-637038522) about automatic hierarchical navigation.

[Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin defines its tree structure based on `key` and `parent` data in a site's pages.

If we want the site tree to mimic the folder structure, we can automate the setting of these properties by leveraging [Computed Data](https://www.11ty.dev/docs/data-computed/#real-world-example), and a little URL path wrangling. See [`eleventyComputed.js`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_data/eleventyComputed.js) data, [`nav.njk`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_includes/components/nav.njk) include and [`startsWith`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_11ty/filters/startsWith.js) filter for most of the action. (Also check the Eleventy `log` for details on the navigation structure.)

Under the hood here we're setting the `key` and `parent` values to their URL paths, which are inherently unique (whereas setting by page title could become problematic). We also pass the `order` property from the page's frontmatter to `eleventyNavigation`. This allows us to override the default sort order (based on [date created](https://www.11ty.dev/docs/collections/#sorting) in collections) should you want to manually re-order siblings (see _Mammals_ child pages, for example).

Perhaps not a bullet-proof approach, but certainly gets us most the way there without breaking a sweat.

## Install

```
npm install
```

## Run development

```
npm run dev
```


----


Based upon [eleventy-auto-navigation](https://github.com/adamduncan/eleventy-auto-navigation)
uses modified version of [Simple Tree Menu](http://www.dynamicdrive.com/dynamicindex1/navigate1.htm) for the collapsable sidebar navigation.



---

TODOS: 
- [x] sidebar Navbar layout
- [x] Tree navigation in sidebar
- [ ] add to github ass template site 
- [ ] publish to github pages
- [x] add other 11ty things, like syntax highlight etc.. and example pages 
- [x] Test local images, to see if needs extra configuration 
- [ ] figure out why `_data` `site.js` is not working
- [x] figure out why current page has stop showing up 

_stretch goal_
- [ ] add footer 
- [ ] breakdown templates into parts, eg head.njk etc..
- [ ] make outward links open new tab 
- [ ] show markdown alt image text as description of image?
- [ ] images embed for social media share options
- [ ] optional Google analytics setup 
- [ ] figure out what to do about mobile
- [ ] see if can move content page inside `src/content`
- [ ] site search (~nice to have)
- [ ] 404 page 