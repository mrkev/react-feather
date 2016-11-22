let PostMeta  = require('./_includes.jsx').PostMeta
let PostNotes = require('./_includes.jsx').PostNotes
let PrePost   = require('./_includes.jsx').PrePost

module.exports = React.createClass({
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