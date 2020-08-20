import React from 'react';
import commentShape from '../comment/comment-shape';
import CommentIcons from '../comment-icons/CommentIcons';

function Reply({ reply }) {
  return (
    <div className="discussion-comment d-flex flex-column">
      <div className="list-group-item">
        <div className="d-flex flex-row">
          <div className="d-flex flex-column flex-fill">
            <div className="status small">
              { reply.author } replied on { reply.created_at }
            </div>
            <div className="comment-body d-flex" dangerouslySetInnerHTML={{ __html: reply.rendered_body }} />
          </div>
          <CommentIcons comment={reply} />
        </div>
        <div className="visibility-comment d-flex small text-gray-300">
          This post is visible to everyone
        </div>
      </div>
    </div>
  );
}

Reply.propTypes = {
  reply: commentShape.isRequired,
};

export default Reply;
