import React from 'react';
import commentShape from './comment-shape';
import CommentIcons from '../comment-icons/CommentIcons';

function Comment({ comment }) {
  return (
    <div className="discussion-comment d-flex flex-column">
      <div className="header d-flex flex-row card-header">
        <div className="d-flex flex-column flex-fill">
          <div className="title h4">
            { comment.title }
          </div>
          <div className="status small">
            { comment.type } posted on { comment.created_at } by { comment.author }
          </div>
        </div>
        <CommentIcons comment={comment} />
      </div>
      <div className="list-group-item">
        <div className="comment-body d-flex" dangerouslySetInnerHTML={{ __html: comment.rendered_body }} />
        <div className="visibility-comment d-flex small text-gray-300">
          This post is visible to everyone
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: commentShape.isRequired,
};

export default Comment;
