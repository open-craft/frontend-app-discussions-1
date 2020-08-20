import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '@edx/paragon/dist/Button';
import commentShape from './comment/comment-shape';
import Comment from './comment/Comment';
import Reply from './reply/Reply';
import messages from './messages';

function CommentsView({ intl, comment, replies }) {
  return (
    <div className="discussion-comments d-flex flex-column w-100">
      <div className="card mb-2">
        <div className="list-group list-group-flush">
          <Comment comment={comment} key={comment.id} />
          {
            replies.map(reply => <Reply reply={reply} key={reply.id} />)
          }
        </div>
      </div>
      <div className="actions d-flex">
        <Button>{ intl.formatMessage(messages.add_response) }</Button>
      </div>
    </div>
  );
}

CommentsView.propTypes = {
  intl: intlShape.isRequired,
  comment: commentShape.isRequired,
  replies: PropTypes.arrayOf(commentShape).isRequired,
};

export default injectIntl(CommentsView);
