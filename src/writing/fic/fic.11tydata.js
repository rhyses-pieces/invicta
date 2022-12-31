module.exports = {
  layout: "chapter.html",
  eleventyComputed: {
    chapters(data) {
      if (data.collections && data.collectionName) {
        return data.collections[data.collectionName];
      }
      return [];
    },
    title(data) {
      if (data.bookTitle && data.chapterTitle) {
        return `${data.chapterTitle}`;
      }
      return data.bookTitle;
    },
  }
};
