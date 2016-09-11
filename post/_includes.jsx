
window.PostMeta = React.createClass({
  render: function() { return (
    <div className="postmeta">
      {!!this.props.TimeAgo &&
        <a href={this.props.Permalink}
           style={{marginRight:".5em"}}>
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

/** For testing **/
window.PrePost = React.createClass({
  render: function() { return (
    <pre>
     {JSON.stringify(this.props)}
    </pre>
  );}
});
