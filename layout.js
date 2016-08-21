
window.Header = React.createClass({
  render: function() { return (
    <div id="header">
      <h1><a href="/">{this.props.Title}</a></h1>

      <p id="description">

        {!!this.props.Pages &&
          Object.keys(this.props.Pages).map(function (p) {
            var page = this.props.Pages[p];
            return <a href={page.URL}>{page.Label}</a> 
          }.bind(this))
        }

        {!!this.props.AskEnabled &&
          <a href="/ask">ask</a> 
        }

        {!!this.props.SubmissionsEnabled &&
          <a href="/submit">{this.props.SubmitLabel}</a> 
        }

        <br />

        {!!this.props.Description &&
          <div dangerouslySetInnerHTML={{__html: this.props.Description}}>
          </div>
        }

      </p>
    </div>
  );}
});

window.Post = React.createClass({
  render: function() {
    switch (this.props.PostType) {
      case "quote": return <QuotePost {... this.props} />
      case "photo": return <PhotoPost {... this.props} />
      case "video": return <VideoPost {... this.props} />
      case  "link": return <LinkPost  {... this.props} />
      case  "chat": return <ChatPost  {... this.props} />
      case  "text": return <TextPost  {... this.props} />
      case "audio": return <AudioPost {... this.props} />
    }
  }
});

window.PostMeta = React.createClass({
  render: function() { return (
    <div className="postmeta">
      {!!this.props.TimeAgo &&
        <a href={this.props.Permalink}>
          {this.props.TimeAgo}
        </a>
      }
        <a href={this.props.Permalink}
           style={{textTransform: 'lowercase'}}>
           {this.props["lang:Notes"]} ({this.props.NoteCount})
        </a>
    </div>
  );}
});

window.PostNotes = React.createClass({
  render: function() { return (
    !!this.props.PostNotes
    ? <div dangerouslySetInnerHTML={{__html: this.props.PostNotes}}></div>
    : false
  );}
});

window.TextPost = React.createClass({
  render: function() { return (
      <div className="r_post_text">
        <div className="text post">

          {!!this.props.Title &&
            <h2>{this.props.Title}</h2>
          }

          <div className="tp-body"
               dangerouslySetInnerHTML={{__html: this.props.Body}}>
          </div>
          <PostMeta {... this.props}/>
        </div>

        <PostNotes PostNotes={this.props.PostNotes} />

      </div>
  );}
});

window.QuotePost = React.createClass({
  render: function() { return (
     <div className="r_post_quote">
       <div class="quote post">
         <h2>{this.props.Quote}</h2>

         {!!this.props.Source &&
           <p>{this.props.Source}</p>
         }

         <PostMeta {... this.props}/>
       </div>

        <PostNotes PostNotes={this.props.PostNotes} />

     </div>
  );}
});


window.LinkPost = React.createClass({
  render: function() { return (
      <div className="r_post_link">
        <div className="link post">

          <h2>
            <a href={this.props.URL}
               target={!!this.props.Target ? "_blank" : "_self"}>
               {this.props.Name}
            </a>
          </h2>

          {!!this.props.Description &&
            <div className="lp-body"
                 dangerouslySetInnerHTML={{__html: this.props.Description}}>
            </div>
          }

          <PostMeta {... this.props}/>
        </div>

        <PostNotes PostNotes={this.props.PostNotes} />

      </div>
  );}
});


window.VideoPost = React.createClass({
  render: function() { return (
     <div className="r_post_video">
       <div class="video post">
         <div className="vp-body"
              dangerouslySetInnerHTML={{__html: this.props["Video-500"]}}>
         </div>

         {!!this.props.Caption &&
           <div dangerouslySetInnerHTML={{__html: this.props.Caption}}></div>
         }

         <PostMeta {... this.props}/>
       </div>

       {!!this.props.PostNotes &&
         <PostNotes PostNotes={this.props.PostNotes} />
       }

     </div>
  );}
});


window.AudioPost = React.createClass({
  render: function() { return (
      <div className="r_post_audio">
        <div className="audio post">

          <div className="ap-player"
               dangerouslySetInnerHTML={{__html: this.props.AudioPlayerGrey}}>
          </div>

          <div class="audio_details">
            {!!this.props.Artist &&
              <b>{this.props.Artist}</b>
            } &ndash;
            {!!this.props.TrackName &&
              <b>{this.props.TrackName}</b>
            }
              <span class="playcount">({this.props.PlayCountWithLabel})</span>
          </div>

          {!!this.props.Caption &&
            <div class="audio_caption"
                 dangerouslySetInnerHTML={{__html: this.props.Caption}}>
            </div>
          }

          {!!this.props.ExternalAudio &&
            <p><a href="{this.props.ExternalAudioURL}">{this.props["lang:Download"]}</a></p>
          }

          <PostMeta {... this.props}/>
        </div>

        <PostNotes PostNotes={this.props.PostNotes} />

      </div>
  );}
});

window.ChatPost = React.createClass({
  render: function() { return (
      <div className="r_post_audio">
        <div className="conversation post">

          {!!this.props.Title &&
            <b>{this.props.Title}</b>
          }

          <ul>
          {Object.keys(this.props.Lines).map(function (l) {
            var line = this.props.Lines[l];
            return (
              <li class="member{line.UserNumber}">

                {!!line.Label && <span class="label">{line.Label}</span> }
                {line.Line}
              </li>
            );
          }.bind(this))}
          </ul>

          <PostMeta {... this.props}/>
        </div>

        <PostNotes PostNotes={this.props.PostNotes} />

      </div>
  );}
});

window.PhotoPost = React.createClass({
  render: function() { return (
    <div className="r_post_quote">
      <div class="photo post">

        <div class="pp-photo"
             dangerouslySetInnerHTML={{__html: '' +
                this.props.LinkOpenTag + '\n' +
                '<img src="' + this.props["PhotoURL-500"] +
                '" alt="' + this.props.PhotoAlt + '" />' +
                this.props.LinkCloseTag
             }}>
        </div>

        {!!this.props.Caption &&
          <p dangerouslySetInnerHTML={{__html: this.props.Caption}}></p>
        }

        <PostMeta {... this.props}/>
      </div>

      {!!this.props.PostNotes &&
        <PostNotes PostNotes={this.props.PostNotes} />
      }

    </div>
  );}
});

window.PrePost = React.createClass({
  render: function() { return (
    <pre>
     {JSON.stringify(this.props)}
    </pre>
  );}
});


window.Pagination = React.createClass({
  render: function() { return (
    <div id="navigation">

      {!!this.props.NextPage &&
        <a href={this.props.NextPage} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span class="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.PreviousPage &&
        <a href={this.props.PreviousPage} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </div>
  );}
});

window.PermalinkPagination = React.createClass({
  render: function() { return (
    <div id="navigation">

      {!!this.props.PreviousPost &&
        <a href={this.props.PreviousPost} id="nav-next" style={{textTransform:"lowercase"}}>&larr; {this.props["lang:Older"]}</a>
      }

      <span class="page_number"> &nbsp; {this.props.CurrentPage}/{this.props.TotalPages} &nbsp;</span>

      {!!this.props.NextPost &&
        <a href={this.props.NextPost} id="nav-prev" style={{textTransform:"lowercase"}}>{this.props["lang:Newer"]} &rarr;</a>
      }

    </div>
  );}
});

window.Footer = React.createClass({
  render: function() { return (
    <div id="footer">

      <form action="/search" method="get" id="searchform">
        <p><input type="search" name="q" value="" results="5" /></p>
      </form>

      <div className="attribution">
        <a href="http://www.tumblr.com/theme/3357" title="tumblr theme feather">feather</a> by <a href="http://erichu.tumblr.com" title="eric hu">eric hu</a>
      </div>
    </div>
  );}
});