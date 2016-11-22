import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'


export default class PhotoPost extends React.Component {
  render() { return (
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
  )}
}
