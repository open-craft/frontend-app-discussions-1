import { faFlag, faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import commentShape from '../comment/comment-shape';

function CommentIcons({ comment }) {
  return (
    <div className="d-flex flex-column icons">
      {/* Only show the star if the post has a following attribute, indicating it can be followed */}
      { comment.following !== undefined && (
        comment.following
          ? <FontAwesomeIcon icon={faSolidStar} />
          : <FontAwesomeIcon icon={faEmptyStar} />
      )}
      { comment.abuse_flagged && <FontAwesomeIcon className="my-1 mx-auto" icon={faFlag} /> }
      <FontAwesomeIcon className="my-1 mx-auto" icon={faEllipsisV} />
    </div>
  );
}

CommentIcons.propTypes = {
  comment: commentShape.isRequired,
};

export default CommentIcons;
