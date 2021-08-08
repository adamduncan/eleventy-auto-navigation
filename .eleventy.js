const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const embedTwitter = require("eleventy-plugin-embed-twitter");
const embedVimeo = require("eleventy-plugin-vimeo-embed");


const IMAGES = ["avif", "jpeg", "jpg", "png", "giff", "gif", "webp"];
async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: IMAGES
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}


// TODO: could add a published logic in the yalm front matter(?)
/**
 * Handling ege case where published attribute is not defined on post
 * When published attribute not define we assume we wanted to publish
 */
 const publishedPosts = (post) => {
  // return post.data.published=== true || typeof  post.data.published === "undefined" ;
  return !(typeof post.data.published === 'boolean' && post.data.published === false);
};


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(embedTwitter);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(embedVimeo);

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  eleventyConfig.setTemplateFormats([
    "md",
    "html",
    ...IMAGES,
    "pdf",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);


  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));
  eleventyConfig.addPassthroughCopy('public')
  eleventyConfig.addPassthroughCopy('img')

  eleventyConfig.addFilter(
    "startsWith",
    require("./src/_11ty/filters/startsWith")
  );

  eleventyConfig.addFilter(
    "endsWith",
    require("./src/_11ty/filters/endsWith")
  );


  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "./_site",
      // data: "_data",
    },
  };
};
