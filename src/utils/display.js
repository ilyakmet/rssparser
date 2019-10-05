// rendering
export default (res, a) => {
  const author = a.author || a.feed.name;
  res.write('<div class="article">');
  res.write(`<h3>${a.title}</h3>`);
  res.write(`<p><strong>${author} - ${a.published}</strong><br/>\n`);
  res.write(`${a.content}</p></div>\n`);
};
