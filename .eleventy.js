const { execSync } = require("child_process");
const fs = require('fs');
const path = require('path');
const navigate = require('@11ty/eleventy-navigation');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const ancestry = require('@tigersway/eleventy-plugin-ancestry');

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/assets/sass/style.scss');
  eleventyConfig.addPassthroughCopy({'./src/assets/img': 'img'});
  eleventyConfig.addPassthroughCopy({'./src/assets/fonts': 'fonts'});
  eleventyConfig.addPassthroughCopy({'./src/assets/scripts': 'scripts'});
  eleventyConfig.addPlugin(navigate);
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(ancestry);
  const books = getBooks("./src/writing/fic/");
  for (const book of books) {
    eleventyConfig.addCollection(book.name, function (collectionApi) {
      const pages = collectionApi.getFilteredByGlob(book.glob);
      return pages.sort((a, b) => a.data.chapter - b.data.chapter);
    });
  }
  eleventyConfig.addCollection("writing", function (collectionApi) {
    const pages = collectionApi.getFilteredByGlob("./src/writing/fic/*/index.md");
    return pages;
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}

function getBooks(bookDir) {
  return fs.readdirSync(bookDir, { withFileTypes: true })
    .filter(book => book.isDirectory())
    .map(book => ({
      name: book.name,
      glob: path.join(bookDir, book.name, "chapter-*.md"),
    }));
}