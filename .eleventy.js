module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

  eleventyConfig.addFilter(
    "startsWith",
    require("./src/_11ty/filters/startsWith")
  );

  return {
    dir: {
      input: "src",
    },
  };
};
