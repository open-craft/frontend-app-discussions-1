import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PostsView from './PostsView';
import { selectThreadPost, selectThreadComments } from './data/selectors';
import { fetchPost, fetchThreadComments } from './data/thunks';

function PostsViewContainer() {
  const { threadId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(selectThreadPost(threadId));
  const comments = useSelector(selectThreadComments(threadId));
  useEffect(() => {
    // The courseId from the URL is the course we WANT to load.
    dispatch(fetchPost(threadId));
    dispatch(fetchThreadComments(threadId));
  }, [threadId]);

  return (
    <PostsView post={post} comments={comments} />
  );
}

PostsViewContainer.propTypes = {};

export default PostsViewContainer;
