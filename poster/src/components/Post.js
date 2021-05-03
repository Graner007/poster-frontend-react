const Post = ({ post, person, media }) => {
    return (
        <div className="post" key={ post.id }>
            {/* <div className="profile-name">{ person.username }</div> */}
            <div className="post-date">{ post.postDate }</div>
            <div className="post-message">{ post.message }</div>
            {/* { post.hasImage ? <div className="post-image"><img src={} alt="image"/></div> : null} */}
            <div className="adomCount">{ post.adomCount }</div>
            <div className="commentCount">{ post.commentCount }</div>
            <div className="shareCount">{ post.shareCount }</div>
        </div>
    )
}

export default Post;