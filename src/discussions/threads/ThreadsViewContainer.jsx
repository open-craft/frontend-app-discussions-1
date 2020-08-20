/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Routes } from '../../data/constants';
import { selectCourseThreads } from './data/selectors';
import { fetchCourseThreads } from './data/thunks';
import ThreadsView from './ThreadsView';

function ThreadsViewContainer({ match }) {
  const { courseId, topicId } = useParams();
  const dispatch = useDispatch();

  const filterSelfThreads = (match.path === Routes.THREADS.MY_THREADS);
  const threads = useSelector(selectCourseThreads(topicId));

  useEffect(() => {
    // The courseId from the URL is the course we WANT to load.
    dispatch(fetchCourseThreads(courseId));
  }, [courseId]);

  return (
    <ThreadsView threads={threads} filterSelfThreads={filterSelfThreads} />
  );
}

ThreadsViewContainer.propTypes = {};

export default ThreadsViewContainer;
