import fs from 'fs';
import config from '../config';

// load styles
export default () => {
  const cdn = `<link rel="stylesheet" href="${config.cdn}">`;
  const css = fs.readFileSync('./css/style.css').toString();
  return `${cdn}<style type="text/css">${css}</style>`;
};
