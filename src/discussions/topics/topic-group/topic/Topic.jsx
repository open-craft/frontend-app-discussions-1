/* eslint-disable no-unused-vars, react/forbid-prop-types */
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faComments, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../data/constants';

function Topic({
  id,
  name,
  subtopics,
  questions,
  discussions,
  flags,
}) {
  const { courseId } = useParams();

  return (
    <div className="discussion-topic d-flex flex-column list-group-item p-2" data-topic-id={id}>
      <Link
        className="topic-name h6 text-gray-700 text-decoration-none"
        to={
          Routes.POSTS.PATH.replace(':courseId', courseId)
            .replace(':discussionId?', id)
            .replace(':threadId?', '')
        }
      >
        { name }
      </Link>
      <div className="d-flex lead">
        <span className="badge mr-4">
          <FontAwesomeIcon className="mr-2" icon={faQuestionCircle} />
          {questions.length}
        </span>
        <span className="badge mr-4">
          <FontAwesomeIcon className="mr-2" icon={faComments} />
          {discussions.length}
        </span>
        {flags.length > 0 && (
          <span className="badge">
            <FontAwesomeIcon className="mr-2" icon={faFlag} />
            {flags.length}
          </span>
        ) }
      </div>

    </div>
  );
}

export const topicShape = {
  name: PropTypes.string,
  id: PropTypes.string,
  subtopics: PropTypes.array,
  questions: PropTypes.arrayOf(PropTypes.object),
  discussions: PropTypes.arrayOf(PropTypes.object),
  flags: PropTypes.arrayOf(PropTypes.object),
};
Topic.propTypes = topicShape;
Topic.defaultProps = {
  id: null,
  name: null,
  subtopics: [],
  questions: [],
  discussions: [],
  flags: [],
};

export default Topic;
