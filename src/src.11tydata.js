module.exports = {
  eleventyComputed: {
    permalink(data) {
      if (data.draft) {
        return false;
      }
      return data.permalink;
    },
    eleventyExcludeFromCollections(data) {
      if (data.draft || data.permalink === false) {
        return true;
      }
      return data.eleventyExcludeFromCollections;
    }
  }
}