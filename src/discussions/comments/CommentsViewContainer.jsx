import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CommentsView from './CommentsView';
import { selectTopicComment, selectTopicReplies } from './data/selectors';
import { fetchTopicComment, fetchTopicReplies } from './data/thunks';

function CommentsViewContainer() {
  const { threadId } = useParams();
  const dispatch = useDispatch();
  const comment = useSelector(selectTopicComment(threadId));
  const replies = useSelector(selectTopicReplies(threadId));
  useEffect(() => {
    // The courseId from the URL is the course we WANT to load.
    dispatch(fetchTopicComment(threadId));
    dispatch(fetchTopicReplies(threadId));
  }, [threadId]);

  return (
    <CommentsView comment={comment} replies={replies} />
  );
}

CommentsViewContainer.propTypes = {};

export default CommentsViewContainer;
