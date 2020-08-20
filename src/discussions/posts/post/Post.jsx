import React from 'react';
import postShape from './post-shape';
import PostIcons from '../post-icons/PostIcons';

function Post({ post }) {
  return (
    <div className="discussion-post d-flex flex-column">
      <div className="header d-flex flex-row card-header">
        <div className="d-flex flex-column flex-fill">
          <div className="title h4">
            { post.title }
          </div>
          <div className="status small">
            { post.type } posted on { post.created_at } by { post.author }
          </div>
        </div>
        <PostIcons post={post} />
      </div>
      <div className="list-group-item">
        <div className="post-body d-flex" dangerouslySetInnerHTML={{ __html: post.rendered_body }} />
        <div className="visibility-post d-flex small text-gray-300">
          This post is visible to everyone
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: postShape.isRequired,
};

export default Post;
