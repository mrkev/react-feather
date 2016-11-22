import { PostMeta, PostNotes, PrePost } from './_includes.jsx';

export default class VideoPost extends React.Component {
  render() { return (
    <div className="r_post_video">
      <div className="video post">
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
  )}
}
