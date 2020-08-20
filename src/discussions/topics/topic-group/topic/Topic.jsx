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
    <Link
      className="discussion-topic d-flex flex-column list-group-item text-gray-900 text-decoration-none p-2"
      data-topic-id={id}
      to={
        Routes.THREADS.PATH.replace(':courseId', courseId)
          .replace(':discussionId?', id)
      }
    >
      <div className="topic-name h6">
        { name }
      </div>
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

    </Link>
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
