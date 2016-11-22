import { PostMeta, PostNotes, PrePost } from './_includes.jsx';

export default class AudioPost extends React.Component {
  render() { return (
    <div className="r_post_audio">
      <div className="audio post">

        <div className="ap-player"
             dangerouslySetInnerHTML={{__html: this.props.AudioPlayerGrey}}>
        </div>

        <div className="audio_details">
          {!!this.props.Artist &&
            <b>{this.props.Artist}</b>
          } &ndash;
          {!!this.props.TrackName &&
            <b>{this.props.TrackName} </b>
          }
          <span className="playcount">({this.props.PlayCountWithLabel})</span>
        </div>

        {!!this.props.Caption &&
          <div className="audio_caption"
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
  )}
}
