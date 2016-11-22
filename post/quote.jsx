import { PostMeta, PostNotes, PrePost } from './_includes.jsx';

export default class QuotePost extends React.Component {
  render() { return (
    <div className="r_post_quote">
      <div className="quote post">
        <h2>{this.props.Quote}</h2>

        {!!this.props.Source &&
          <p>{this.props.Source}</p>
        }

        <PostMeta {... this.props}/>
      </div>

       <PostNotes PostNotes={this.props.PostNotes} />

    </div>
  )}
}