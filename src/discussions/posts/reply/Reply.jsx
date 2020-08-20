import React from 'react';
import postShape from '../post/post-shape';
import PostIcons from '../post-icons/PostIcons';

function Reply({ reply }) {
  return (
    <div className="discussion-comment d-flex flex-column">
      <div className="d-flex flex-row">
        <div className="d-flex bg-gray-100 px-3" />
        <div className="list-group-item flex-fill">
          <div className="d-flex flex-row">
            <div className="d-flex flex-column flex-fill">
              <div className="status small">
                { reply.author } replied on { reply.created_at }
              </div>
              <div className="comment-body d-flex" dangerouslySetInnerHTML={{ __html: reply.rendered_body }} />
            </div>
            <PostIcons post={reply} />
          </div>
          <div className="visibility-comment d-flex small text-gray-300">
            This post is visible to everyone
          </div>
        </div>
      </div>
    </div>
  );
}

Reply.propTypes = {
  reply: postShape.isRequired,
};

export default Reply;
