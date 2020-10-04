# eleventy-auto-navigation

Directory structure-based navigation for eleventy-plugin-navigation.

[Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin defines its tree structure based on `key` and `parent` data in a site's pages.

If we want the site tree to mimic the folder structure, we can automate the setting of these properties by leveraging [`Computed Data`](https://www.11ty.dev/docs/data-computed/#real-world-example), and a little URL path wrangling. See [`eleventyComputed.js`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_data/eleventyComputed.js) data, [`nav.njk`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_includes/components/nav.njk) include and [`startsWith`](https://github.com/adamduncan/eleventy-auto-navigation/blob/main/src/_11ty/filters/startsWith.js) filter for most of the action. (Also check the Eleventy `log` for details on the navigation structure.)

Under the hood here we're setting the `key` and `parent` values as their URL paths, which are inherently unique (whereas setting by page title could become problematic). We also pass the `order` property from the page's frontmatter to `eleventyNavigation`. This allows us to override the default sort order (returned based on [date created](https://www.11ty.dev/docs/collections/#sorting) in collections) should you want to manually re-order siblings (see Mammals child pages).

Perhaps not a bullet-proof approach, but certainly gets us most the way there without breaking a sweat.

## Install

```
npm install
```

## Run development

```
npm run dev
```
