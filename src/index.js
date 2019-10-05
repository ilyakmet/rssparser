import feed from 'feed-read';
import http from 'http';
import config from './config';
import display from './utils/display';
import generateStyle from './utils/style';

const { rssUrls } = config;

const style = generateStyle();

const port = process.env.PORT || 5000;

export default http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Transfer-Encoding': 'chunked',
  });
  // page:
  res.write(
    `<html>
    <head>
    <title>RSS Stream</title>
    ${style}
    </head>
    <body>`,
  );

  // rssUrls loop
  for (let j = 0; j < rssUrls.length; j += 1) {
    feed(rssUrls[j], (err, articles) => {
      for (let i = 0; i < articles.length; i += 1) {
        display(res, articles[i]);
        if (i === articles.length - 1 && j === rssUrls.length - 1) {
          res.end('</body>\n</html>'); // end http response
        }
      }
    });
  }

  setTimeout(() => {
    res.end('</body>\n</html>'); // end http response
  }, 4000);
}).listen(port, (err) => {
  if (err) console.log('something bad happened', err);
  console.log(`server is listening on port: ${port}`);
});
