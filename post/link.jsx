
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
