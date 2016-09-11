
/**
 * Elements all posts include
 */

/** Meta-info and permalink */
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

/** Notes (basically just loads the props.PostNotes html tumblr gives us) */
window.PostNotes = React.createClass({
  render: function() { return (
    !!this.props.PostNotes
    ? <div dangerouslySetInnerHTML={{__html: this.props.PostNotes}}></div>
    : false
  );}
});

/** A post-type for testing: simply renders the JSON as text **/
window.PrePost = React.createClass({
  render: function() { return (
    <pre>
     {JSON.stringify(this.props)}
    </pre>
  );}
});
