// This is a zany workaround to get out of manually declaring
// `parent` in every page's frontmatter. There will be a nicer
// way of doing this, but for a POC, maybe it's okay.

module.exports = {
  eleventyNavigation: {
    key: (data) => {
      const urlParts = data.page.url.split("/");
      // Taking all but first and last leaves us with the page path
      const pathDirs = urlParts.slice(1, urlParts.length - 1);
      const path = pathDirs.join("/");
      return data.key || path;
    },
    title: (data) => data.title,
    parent: (data) => {
      // Let's deduce parent value, based on URL path.
      // This is a bit sketchy, but 11ty's navigation plugin
      // would require us setting these properties in frontmatter
      // of every post, which isn't very sustainable.

      // Get URL directory fragments
      const urlParts = data.page.url.split("/");
      // Taking all but first and last two leaves us with the parent directory path
      const parentDirs = urlParts.slice(1, urlParts.length - 2);
      const parent = parentDirs.join("/");
      // If no specific parent specified, try to automatically use fallback
      return data.parent || parent;
    },
    order: (data) => data.order,
  },
};
