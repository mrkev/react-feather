
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