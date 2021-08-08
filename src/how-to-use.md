---
title: "How to use"
emoji: 🚧
image: 'https://images.unsplash.com/photo-1478486982180-2de2fafa19f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2702&q=80'
order: 1
---

## Setup 
Follow the [Github Readme instructions]({{site.repo}}#readme)


## Folder taxonomy 
The directory structure you use inside `/src` folder determines the taxonomy of the markdown pages.

## Customizing individual pages 
Each page can have an **optional** yaml front matter, with extra information. Such as a top `image` and an `emoji`. You can also set the title. 
Eg if you call your file `src/how-to-use.md`  then the title and url to the page would be `how-to-use`. If you don't want the `-` you can 
either rename it as `src/how to use.md` but that would make the url as `/how%20to%20use` OR add an optional `title` field to the yaml front matter for the page.

<details>
<summary>see the yaml front matter for this current page</summary>

```yaml
---
title: "How to use"
emoji: 🚧
image: 'https://images.unsplash.com/photo-1478486982180-2de2fafa19f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2702&q=80'
order: 1
---
```
</details>

## Authoring individual pages

See the [kitchen sink example](/kitchen-sink).

One thing to keep in mind, if the `title` of the page is set in the yaml front matter, then it will be rendered as a `h1` tag. So in the body of your markdown file, you should start your other headers from `h2` upwards. 

## Optional site info

In `src/_data/site.js` you can find some of the site's info.

These are optional, and removing them will remove them from the layout of the page
- `title`
- `description`
- `version`
- `owner.mage`

Similarly, if there are no social media or contacts links under the `owner` attribute, the footer will not be displayed.

<details>
<summary> site info without optional elements</summary>

```js/15-17,28-34
const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://pietropassarelli.com/11ty-auto-navigation-book-template';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;
const packageJson = require('../../package.json');
const {name,version,description, homepage} = packageJson;

module.exports = {
    environment,
    isProd,
    tracking: {
      gtag: ''
    },
    title: name.replace(/-/g, ' '),
    version, 
    description,
    baseUrl,
    repo: homepage,
    author: {
      name: "Pietro",
      email: "my.email@example.com"
    },
    owner: {
      name: "Pietro",
      last_name: "Passarelli",
      email: "my.email@example.com", 
      twitter: "pietropassarell", 
      facebook: "pietro.passarelli", 
      github: "pietrop/11ty-auto-navigation-book-template", 
      linkedin: "pietropassarelli", 
      instagram: "pietro.ps", 
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80" 
    },
    og_locale: "en_US"
};
```
</details>


## Contributing to the docs


If you want to contribute to this documentation, at the bottom of the page you can click on <small><a href="{{site.repo}}/blob/master/{{ page.inputPath }}">Edit this page on GitHub <i class="fab fa-github"></i></a></small>.