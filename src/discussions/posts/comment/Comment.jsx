import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postShape from '../post/post-shape';
import PostIcons from '../post-icons/PostIcons';
import Reply from '../reply/Reply';
import { selectCommentReplies } from '../data/selectors';
import { fetchCommentReplies } from '../data/thunks';

function Comment({ comment }) {
  const dispatch = useDispatch();
  const replies = useSelector(selectCommentReplies(comment.id));
  useEffect(() => {
    dispatch(fetchCommentReplies(comment.id));
  }, [comment.id]);

  return (
    <div className="discussion-comment d-flex flex-column">
      <div className="list-group-item">
        <div className="d-flex flex-row">
          <div className="d-flex flex-column flex-fill">
            <div className="status small">
              { comment.author } commented on { comment.created_at }
            </div>
            <div className="comment-body d-flex" dangerouslySetInnerHTML={{ __html: comment.rendered_body }} />
          </div>
          <PostIcons post={comment} />
        </div>
        <div className="visibility-comment d-flex small text-gray-300">
          This post is visible to everyone
        </div>
      </div>
      { replies.map(reply => <Reply reply={reply} key={reply.id} />) }
    </div>
  );
}

Comment.propTypes = {
  comment: postShape.isRequired,
};

export default Comment;
