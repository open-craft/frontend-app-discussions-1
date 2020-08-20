/* eslint-disable import/prefer-default-export */
import { logError } from '@edx/frontend-platform/logging';
import { getThreadComment, getThreadReplies } from './api';
import {
  fetchCommentFailed,
  fetchCommentRequest,
  fetchCommentSuccess,
  fetchRepliesFailed,
  fetchRepliesRequest,
  fetchRepliesSuccess,
} from './slices';

export function fetchTopicComment(topicId) {
  return async (dispatch) => {
    try {
      dispatch(fetchCommentRequest({ topicId }));
      const data = await getThreadComment(topicId);
      dispatch(fetchCommentSuccess({ topicId, data }));
    } catch (error) {
      dispatch(fetchCommentFailed());
      logError(error);
    }
  };
}

export function fetchTopicReplies(topicId) {
  return async (dispatch) => {
    try {
      dispatch(fetchRepliesRequest({ topicId }));
      const data = await getThreadReplies(topicId);
      dispatch(fetchRepliesSuccess({ topicId, data }));
    } catch (error) {
      dispatch(fetchRepliesFailed());
      logError(error);
    }
  };
}
