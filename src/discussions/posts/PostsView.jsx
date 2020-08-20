import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '@edx/paragon/dist/Button';
import postShape from './post/post-shape';
import Post from './post/Post';
import Comment from './comment/Comment';
import messages from './messages';

function PostsView({ intl, post, comments }) {
  return (
    <div className="discussion-comments d-flex flex-column w-100">
      <div className="card mb-2">
        <div className="list-group list-group-flush">
          <Post post={post} key={post.id} />
          {
            comments.map(comment => <Comment comment={comment} key={comment.id} />)
          }
        </div>
      </div>
      <div className="actions d-flex">
        <Button>{ intl.formatMessage(messages.add_response) }</Button>
      </div>
    </div>
  );
}

PostsView.propTypes = {
  intl: intlShape.isRequired,
  post: postShape.isRequired,
  comments: PropTypes.arrayOf(postShape).isRequired,
};

export default injectIntl(PostsView);
