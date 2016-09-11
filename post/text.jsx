
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