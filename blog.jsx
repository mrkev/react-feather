import PhotoPost from './post/photo.jsx'
import QuotePost from './post/quote.jsx'
import VideoPost from './post/video.jsx'
import LinkPost  from './post/link.jsx'
import ChatPost  from './post/chat.jsx'
import TextPost  from './post/text.jsx'
import AudioPost from './post/audio.jsx'

import React from 'react'

require("./feather.css");

/** Includes: Blog title, links to pages and description */
class Header extends React.Component {
  render() { return (
    <div id="header">
      <h1><a href="/">{this.props.Title}</a></h1>

      <p id="description">

        {!!this.props.Pages &&
          Object.keys(this.props.Pages).map(function (p, i) {
            var page = this.props.Pages[p];
            return <a href={page.URL} style={{marginRight:".5em"}} key={i}>{page.Label}</a>
          }.bind(this))
        }

        {!!this.props.AskEnabled &&
          <a href="/ask" style={{marginRight:".5em"}}>ask</a>
        }

        {!!this.props.SubmissionsEnabled &&
          <a href="/submit" style={{marginRight:".5em"}}>{this.props.SubmitLabel}</a>
        }

        <br />

        {!!this.props.Description &&
          <span dangerouslySetInnerHTML={{__html: this.props.Description}}>
          </span>
        }

      </p>
    </div>
  )}
}

/** Pagination shown on post-list pages (like the index page of the blog, for example) */
class Pagination extends React.Component {
  render() { return (
    <div id="navigation">

      {!!this.props.NextPage &&
        <a href={this.props.NextPage} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span className="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.PreviousPage &&
        <a href={this.props.PreviousPage} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </div>
  )}
}

/** Pagination shown on permalink pages */
class PermalinkPagination extends React.Component {
  render() { return (
    <div id="navigation">

      {!!this.props.PreviousPost &&
        <a href={this.props.PreviousPost} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span className="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.NextPost &&
        <a href={this.props.NextPost} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </div>
  )}
}

/** Includes: theme attribution and search field */
class Footer extends React.Component {
  render() { return (
    <div id="footer">

      <form action="/search" method="get" id="searchform">
        <input type="text" name="q" results="5"></input>
      </form>

      <div className="attribution">
        <a href="http://www.tumblr.com/theme/3357" title="tumblr theme feather">feather</a> by <a href="http://erichu.tumblr.com" title="eric hu">eric hu</a><br />react.js edit by <a href="http://shoesnosocks.tumblr.com" title="kevin chavez">kevin chavez</a>
      </div>
    </div>
  )}
}

/**
 * The Blog. This is the only class that gets "manually" appended to the HTML.
 * Recieves the JSON object from feather.html
 */
export default class Blog extends React.Component {
  render() { return !this.props.Posts ? <h1>RIP</h1> : (
    <div>
      <Header {... this.props} />
      <div id="content">
        {Object.keys(this.props.Posts).map(function (p, i) {
          var post = this.props.Posts[p];

          switch (post.PostType) {

            /** Photosets have type photo, but get passed as video smh */
            case "photo": return !post["Video-500"] ? <PhotoPost {... post} key={i}/> : <VideoPost {... post} key={i}/>
            case "quote": return <QuotePost {... post} key={i}/>
            case "video": return <VideoPost {... post} key={i}/>
            case  "link": return <LinkPost  {... post} key={i}/>
            case  "chat": return <ChatPost  {... post} key={i}/>
            case  "text": return <TextPost  {... post} key={i}/>
            case "audio": return <AudioPost {... post} key={i}/>
          }
        }.bind(this))}

        {!!this.props.Pagination &&
          <Pagination {... this.props.Pagination}/>
        }

        {!!this.props.PermalinkPagination &&
          <PermalinkPagination {... this.props.PermalinkPagination}/>
        }

      </div>

      <Footer />

    </div>
  )}
}


import config from './config.js'

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

