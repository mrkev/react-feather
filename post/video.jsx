
window.VideoPost = React.createClass({
  render: function() { return (
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
  );}
});
