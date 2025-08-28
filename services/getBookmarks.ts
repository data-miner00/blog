export function isBookmarked(articleId: string) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  return bookmarks.includes(articleId);
}

export function toggleBookmark(articleId: string) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  if (bookmarks.includes(articleId)) {
    const updatedBookmarks = bookmarks.filter((id: string) => id !== articleId);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    return false;
  } else {
    bookmarks.push(articleId);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    return true;
  }
}
