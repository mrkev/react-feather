import Blog from '../blog.jsx'
import config from '../config.js'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'


/** Parses URL params */
var urlParams; // http://stackoverflow.com/posts/2880929/revisions
(window.onpopstate = function () {
  var match,
    pl     = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query  = window.location.search.substring(1);
    urlParams = {};
  while (match = search.exec(query))
     urlParams[decode(match[1])] = decode(match[2]);
})();

/** The custom CSS thing */

let css = `
  ${config["CustomCSS"]}
  body { font-family : monospace; background: ${config["color:Background"]}; color: ${config["color:Text"]}; }
  #footer .attribution a, #footer .attribution a:link, #footer .attribution a:visited, #header #description a, #header #description a:link, #header #description a:visited, a { color: ${config["color:Links"]}; }
  a:hover { color: ${config["color:Links Hover"]}; }
  #header h1 a { color: ${config["color:Heading"]}; }
  #header h1 a:hover { color: ${config["color:Heading Hover"]}; }
  #description { color: ${config["color:Description"]}; }
  .permalink a { color: ${config["color:Permalink"]}; }
  .permalink a:hover { color: ${config["color:Permalink Hover"]}; }
  #footer, .quote p, .photo p, .video p, .audio p, #content .conversation, .text blockquote { color: ${config["color:Text Alt"]}; }
`

let head  = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';

if (style.styleSheet) { style.styleSheet.cssText = css; }
else { style.appendChild(document.createTextNode(css)); }

head.appendChild(style);

/** Loads the blog */

let place = () => {
  // if (!window.props) throw new Error("LAME");
  if (!window.props) window.props = {}
  if (urlParams['render'] !== 'raw') {
    console.log('rendering')
    ReactDOM.render(
      <Blog {... window.props} />,
      document.getElementById('blog')
    );
  } else {
    document.open();
    document.write(JSON.stringify(props));
    document.close();
  }
}

place()

if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept('../blog.jsx', () => {
    // Require the new version and render it instead
    var blog = require('../blog.jsx')
    place()
  })
}

