/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var PhotoPost = __webpack_require__(1);
	var QuotePost = __webpack_require__(3);
	var VideoPost = __webpack_require__(4);
	var LinkPost = __webpack_require__(5);
	var ChatPost = __webpack_require__(6);
	var TextPost = __webpack_require__(7);
	var AudioPost = __webpack_require__(8);
	
	/** Includes: Blog title, links to pages and description */
	var Header = React.createClass({
	  displayName: 'Header',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { id: 'header' },
	      React.createElement(
	        'h1',
	        null,
	        React.createElement(
	          'a',
	          { href: '/' },
	          this.props.Title
	        )
	      ),
	      React.createElement(
	        'p',
	        { id: 'description' },
	        !!this.props.Pages && Object.keys(this.props.Pages).map(function (p) {
	          var page = this.props.Pages[p];
	          return React.createElement(
	            'a',
	            { href: page.URL, style: { marginRight: ".5em" } },
	            page.Label
	          );
	        }.bind(this)),
	        !!this.props.AskEnabled && React.createElement(
	          'a',
	          { href: '/ask', style: { marginRight: ".5em" } },
	          'ask'
	        ),
	        !!this.props.SubmissionsEnabled && React.createElement(
	          'a',
	          { href: '/submit', style: { marginRight: ".5em" } },
	          this.props.SubmitLabel
	        ),
	        React.createElement('br', null),
	        !!this.props.Description && React.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.Description } })
	      )
	    );
	  }
	});
	
	/** Pagination shown on post-list pages (like the index page of the blog, for example) */
	var Pagination = React.createClass({
	  displayName: 'Pagination',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { id: 'navigation' },
	      !!this.props.NextPage && React.createElement(
	        'a',
	        { href: this.props.NextPage, id: 'nav-next', style: { textTransform: "lowercase" } },
	        '\u2190 ',
	        this.props["lang:Older"]
	      ),
	      React.createElement(
	        'span',
	        { className: 'page_number' },
	        ' \xA0 ',
	        this.props.CurrentPage,
	        '/',
	        this.props.TotalPages,
	        ' \xA0'
	      ),
	      !!this.props.PreviousPage && React.createElement(
	        'a',
	        { href: this.props.PreviousPage, id: 'nav-prev', style: { textTransform: "lowercase" } },
	        this.props["lang:Newer"],
	        ' \u2192'
	      )
	    );
	  }
	});
	
	/** Pagination shown on permalink pages */
	var PermalinkPagination = React.createClass({
	  displayName: 'PermalinkPagination',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { id: 'navigation' },
	      !!this.props.PreviousPost && React.createElement(
	        'a',
	        { href: this.props.PreviousPost, id: 'nav-next', style: { textTransform: "lowercase" } },
	        '\u2190 ',
	        this.props["lang:Older"]
	      ),
	      React.createElement(
	        'span',
	        { className: 'page_number' },
	        ' \xA0 ',
	        this.props.CurrentPage,
	        '/',
	        this.props.TotalPages,
	        ' \xA0'
	      ),
	      !!this.props.NextPost && React.createElement(
	        'a',
	        { href: this.props.NextPost, id: 'nav-prev', style: { textTransform: "lowercase" } },
	        this.props["lang:Newer"],
	        ' \u2192'
	      )
	    );
	  }
	});
	
	/** Includes: theme attribution and search field */
	var Footer = React.createClass({
	  displayName: 'Footer',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { id: 'footer' },
	      React.createElement(
	        'form',
	        { action: '/search', method: 'get', id: 'searchform' },
	        React.createElement('input', { type: 'text', name: 'q', results: '5' })
	      ),
	      React.createElement(
	        'div',
	        { className: 'attribution' },
	        React.createElement(
	          'a',
	          { href: 'http://www.tumblr.com/theme/3357', title: 'tumblr theme feather' },
	          'feather'
	        ),
	        ' by ',
	        React.createElement(
	          'a',
	          { href: 'http://erichu.tumblr.com', title: 'eric hu' },
	          'eric hu'
	        ),
	        React.createElement('br', null),
	        'react.js edit by ',
	        React.createElement(
	          'a',
	          { href: 'http://shoesnosocks.tumblr.com', title: 'kevin chavez' },
	          'kevin chavez'
	        )
	      )
	    );
	  }
	});
	
	/**
	 * The Blog. This is the only class that gets "manually" appended to the HTML.
	 * Recieves the JSON object from feather.html
	 */
	window.Blog = React.createClass({
	  displayName: 'Blog',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Header, this.props),
	      React.createElement(
	        'div',
	        { id: 'content' },
	        Object.keys(this.props.Posts).map(function (p) {
	          var post = this.props.Posts[p];
	
	          console.log(post["Video-500"], !post["Video-500"]);
	          switch (post.PostType) {
	
	            /** Photosets have type photo, but get passed as video smh */
	            case "photo":
	              return !post["Video-500"] ? React.createElement(PhotoPost, post) : React.createElement(VideoPost, post);
	            case "quote":
	              return React.createElement(QuotePost, post);
	            case "video":
	              return React.createElement(VideoPost, post);
	            case "link":
	              return React.createElement(LinkPost, post);
	            case "chat":
	              return React.createElement(ChatPost, post);
	            case "text":
	              return React.createElement(TextPost, post);
	            case "audio":
	              return React.createElement(AudioPost, post);
	          }
	        }.bind(this)),
	        !!this.props.Pagination && React.createElement(Pagination, this.props.Pagination),
	        !!this.props.PermalinkPagination && React.createElement(PermalinkPagination, this.props.PermalinkPagination)
	      ),
	      React.createElement(Footer, null)
	    );
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var PostMeta = __webpack_require__(2).PostMeta;
	var PostNotes = __webpack_require__(2).PostNotes;
	var PrePost = __webpack_require__(2).PrePost;
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'r_post_photo' },
	      React.createElement(
	        'div',
	        { className: 'photo post' },
	        React.createElement('div', { className: 'pp-photo',
	          dangerouslySetInnerHTML: { __html: '' + this.props.LinkOpenTag + '\n' + '<img src="' + this.props["PhotoURL-500"] + '" alt="' + this.props.PhotoAlt + '" />' + this.props.LinkCloseTag
	          } }),
	        !!this.props.Caption && React.createElement('p', { dangerouslySetInnerHTML: { __html: this.props.Caption } }),
	        React.createElement(PostMeta, this.props)
	      ),
	      !!this.props.PostNotes && React.createElement(PostNotes, { PostNotes: this.props.PostNotes })
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Elements all posts include
	 */
	
	/** Meta-info and permalink */
	var PostMeta = React.createClass({
	  displayName: "PostMeta",
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "postmeta" },
	      !!this.props.TimeAgo && React.createElement(
	        "a",
	        { href: this.props.Permalink,
	          style: { marginRight: ".5em" } },
	        this.props.TimeAgo
	      ),
	      React.createElement(
	        "a",
	        { href: this.props.Permalink,
	          style: { textTransform: 'lowercase' } },
	        this.props["lang:Notes"],
	        " (",
	        this.props.NoteCount,
	        ")"
	      )
	    );
	  }
	});
	
	/** Notes (basically just loads the props.PostNotes html tumblr gives us) */
	var PostNotes = React.createClass({
	  displayName: "PostNotes",
	
	  render: function render() {
	    return !!this.props.PostNotes ? React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.PostNotes } }) : false;
	  }
	});
	
	/** A post-type for testing: simply renders the JSON as text **/
	var PrePost = React.createClass({
	  displayName: "PrePost",
	
	  render: function render() {
	    return React.createElement(
	      "pre",
	      null,
	      JSON.stringify(this.props)
	    );
	  }
	});
	
	module.exports = {
	  PostMeta: PostMeta,
	  PostNotes: PostNotes,
	  PrePost: PrePost
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var PostMeta = __webpack_require__(2).PostMeta;
	var PostNotes = __webpack_require__(2).PostNotes;
	var PrePost = __webpack_require__(2).PrePost;
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'r_post_quote' },
	      React.createElement(
	        'div',
	        { className: 'quote post' },
	        React.createElement(
	          'h2',
	          null,
	          this.props.Quote
	        ),
	        !!this.props.Source && React.createElement(
	          'p',
	          null,
	          this.props.Source
	        ),
	        React.createElement(PostMeta, this.props)
	      ),
	      React.createElement(PostNotes, { PostNotes: this.props.PostNotes })
	    );
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var PostMeta = __webpack_require__(2).PostMeta;
	var PostNotes = __webpack_require__(2).PostNotes;
	var PrePost = __webpack_require__(2).PrePost;
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'r_post_video' },
	      React.createElement(
	        'div',
	        { className: 'video post' },
	        React.createElement('div', { className: 'vp-body',
	          dangerouslySetInnerHTML: { __html: this.props["Video-500"] } }),
	        !!this.props.Caption && React.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.Caption } }),
	        React.createElement(PostMeta, this.props)
	      ),
	      !!this.props.PostNotes && React.createElement(PostNotes, { PostNotes: this.props.PostNotes })
	    );
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _includes = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LinkPost = function (_React$Component) {
	  _inherits(LinkPost, _React$Component);
	
	  function LinkPost() {
	    _classCallCheck(this, LinkPost);
	
	    return _possibleConstructorReturn(this, (LinkPost.__proto__ || Object.getPrototypeOf(LinkPost)).apply(this, arguments));
	  }
	
	  _createClass(LinkPost, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "r_post_link" },
	        React.createElement(
	          "div",
	          { className: "link post" },
	          React.createElement(
	            "h2",
	            null,
	            React.createElement(
	              "a",
	              { href: this.props.URL,
	                target: !!this.props.Target ? "_blank" : "_self" },
	              this.props.Name
	            )
	          ),
	          !!this.props.Description && React.createElement("div", { className: "lp-body",
	            dangerouslySetInnerHTML: { __html: this.props.Description } }),
	          React.createElement(_includes.PostMeta, this.props)
	        ),
	        React.createElement(_includes.PostNotes, { PostNotes: this.props.PostNotes })
	      );
	    }
	  }]);
	
	  return LinkPost;
	}(React.Component);
	
	exports.default = LinkPost;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var PostMeta = __webpack_require__(2).PostMeta;
	var PostNotes = __webpack_require__(2).PostNotes;
	var PrePost = __webpack_require__(2).PrePost;
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'r_post_audio' },
	      React.createElement(
	        'div',
	        { className: 'conversation post' },
	        !!this.props.Title && React.createElement(
	          'b',
	          null,
	          this.props.Title
	        ),
	        React.createElement(
	          'ul',
	          null,
	          Object.keys(this.props.Lines).map(function (l) {
	            var line = this.props.Lines[l];
	            return React.createElement(
	              'li',
	              { className: 'member{line.UserNumber}' },
	              !!line.Label && React.createElement(
	                'span',
	                { className: 'label' },
	                line.Label
	              ),
	              line.Line
	            );
	          }.bind(this))
	        ),
	        React.createElement(PostMeta, this.props)
	      ),
	      React.createElement(PostNotes, { PostNotes: this.props.PostNotes })
	    );
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var PostMeta = __webpack_require__(2).PostMeta;
	var PostNotes = __webpack_require__(2).PostNotes;
	var PrePost = __webpack_require__(2).PrePost;
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'r_post_text' },
	      React.createElement(
	        'div',
	        { className: 'text post' },
	        !!this.props.Title && React.createElement(
	          'h2',
	          null,
	          this.props.Title
	        ),
	        React.createElement('div', { className: 'tp-body',
	          dangerouslySetInnerHTML: { __html: this.props.Body } }),
	        React.createElement(PostMeta, this.props)
	      ),
	      React.createElement(PostNotes, { PostNotes: this.props.PostNotes })
	    );
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var PostMeta = __webpack_require__(2).PostMeta;
	var PostNotes = __webpack_require__(2).PostNotes;
	var PrePost = __webpack_require__(2).PrePost;
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'r_post_audio' },
	      React.createElement(
	        'div',
	        { className: 'audio post' },
	        React.createElement('div', { className: 'ap-player',
	          dangerouslySetInnerHTML: { __html: this.props.AudioPlayerGrey } }),
	        React.createElement(
	          'div',
	          { className: 'audio_details' },
	          !!this.props.Artist && React.createElement(
	            'b',
	            null,
	            this.props.Artist
	          ),
	          ' \u2013',
	          !!this.props.TrackName && React.createElement(
	            'b',
	            null,
	            this.props.TrackName,
	            ' '
	          ),
	          React.createElement(
	            'span',
	            { className: 'playcount' },
	            '(',
	            this.props.PlayCountWithLabel,
	            ')'
	          )
	        ),
	        !!this.props.Caption && React.createElement('div', { className: 'audio_caption',
	          dangerouslySetInnerHTML: { __html: this.props.Caption } }),
	        !!this.props.ExternalAudio && React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'a',
	            { href: '{this.props.ExternalAudioURL}' },
	            this.props["lang:Download"]
	          )
	        ),
	        React.createElement(PostMeta, this.props)
	      ),
	      React.createElement(PostNotes, { PostNotes: this.props.PostNotes })
	    );
	  }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map