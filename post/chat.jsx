let PostMeta  = require('./_includes.jsx').PostMeta
let PostNotes = require('./_includes.jsx').PostNotes
let PrePost   = require('./_includes.jsx').PrePost

module.exports = React.createClass({
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
              <li className="member{line.UserNumber}">

                {!!line.Label && <span className="label">{line.Label}</span> }
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

