const blog_url = '../blog.jsx'
import Blog from '../blog.jsx'
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

