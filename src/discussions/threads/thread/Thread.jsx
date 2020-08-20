import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { faQuestionCircle, faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';
import {
  faCircle, faComments, faFlag, faStar as faSolidStar, faThumbtack,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../data/constants';
import messages from './messages';

function Thread({ thread, intl }) {
  return (
    <Link
      className="discussion-thread d-flex list-group-item p-2 text-decoration-none text-gray-900"
      data-thread-id={thread.id}
      to={
        Routes.POSTS.PATH.replace(':courseId', thread.course_id)
          .replace(':topicId', thread.topic_id)
          .replace(':threadId', thread.id)
      }
    >
      <div className="d-flex thread-unread-status m-1">
        { thread.read || <FontAwesomeIcon icon={faCircle} /> }
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex thread-header">
          <div className="d-flex user-avatar m-1">
            [A]
          </div>
          <div className="d-flex m-1 flex-column">
            <div className="d-flex flex-row">
              <div className="d-flex thread-type-icon m-1">
                { thread.type === 'question' && <FontAwesomeIcon icon={faQuestionCircle} /> }
                { thread.type === 'discussion' && <FontAwesomeIcon icon={faComments} /> }
              </div>
              <div className="thread-title d-flex mx-1 font-weight-bold text-gray-700">
                { thread.title }
              </div>
            </div>
            <div className="d-flex small text-gray-300">
              <div className="thread-author mx-1">
                { thread.author }
              </div>
              |
              <div className="thread-datetime mx-1">
                {
                  thread.updated_at
                    ? intl.formatMessage(messages.last_response, { time: thread.updated_at })
                    : intl.formatMessage(messages.threaded_on, { time: thread.created_at })
                }
              </div>
            </div>
          </div>
          <div className="status-icons">
            { thread.abuse_flagged && <FontAwesomeIcon icon={faFlag} /> }
            { thread.pinned && <FontAwesomeIcon icon={faThumbtack} /> }
          </div>
        </div>
        <div className="d-flex my-1">
          { thread.raw_body }
        </div>
        <div className="d-flex">
          { thread.following
            ? <FontAwesomeIcon icon={faSolidStar} />
            : <FontAwesomeIcon icon={faEmptyStar} /> }
          <span className="badge mx-1">
            <FontAwesomeIcon icon={faComments} /> { thread.comment_count }
          </span>
        </div>
      </div>
    </Link>
  );
}

export const threadShape = PropTypes.shape({
  abuse_flagged: PropTypes.bool,
  author: PropTypes.string,
  comment_count: PropTypes.number,
  course_id: PropTypes.string,
  following: PropTypes.bool,
  id: PropTypes.string,
  pinned: PropTypes.bool,
  raw_body: PropTypes.string,
  read: PropTypes.bool,
  title: PropTypes.string,
  topic_id: PropTypes.string,
  type: PropTypes.string,
  updated_at: PropTypes.string,
});

Thread.propTypes = {
  intl: intlShape.isRequired,
  thread: threadShape.isRequired,
};

export default injectIntl(Thread);
