/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Routes } from '../../data/constants';
import { selectCourseThreads } from './data/selectors';
import { fetchCourseThreads } from './data/thunks';
import PostsView from './PostsView';

function PostsViewContainer({ match }) {
  const { courseId, discussionId } = useParams();
  const dispatch = useDispatch();

  const filterSelfPosts = (match.path === Routes.POSTS.MY_POSTS);
  const posts = useSelector(selectCourseThreads(discussionId));

  useEffect(() => {
    // The courseId from the URL is the course we WANT to load.
    dispatch(fetchCourseThreads(courseId));
  }, [courseId]);

  return (
    <PostsView posts={posts} filterSelfPosts={filterSelfPosts} />
  );
}

PostsViewContainer.propTypes = {};

export default PostsViewContainer;
