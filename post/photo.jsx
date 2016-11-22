let PostMeta  = require('./_includes.jsx').PostMeta
let PostNotes = require('./_includes.jsx').PostNotes
let PrePost   = require('./_includes.jsx').PrePost

module.exports = React.createClass({
  render: function() { return (
    <div className="r_post_photo">
      <div className="photo post">

        <div className="pp-photo"
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
