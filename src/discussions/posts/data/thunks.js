/* eslint-disable import/prefer-default-export */
import { logError } from '@edx/frontend-platform/logging';
import { getThreadPost, getThreadComments, getCommentReplies } from './api';
import {
  fetchCommentsFailed,
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchPostFailed,
  fetchPostRequest,
  fetchPostSuccess,
  fetchRepliesFailed,
  fetchRepliesRequest,
  fetchRepliesSuccess,
} from './slices';

export function fetchPost(threadId) {
  return async (dispatch) => {
    try {
      dispatch(fetchPostRequest({ threadId }));
      const data = await getThreadPost(threadId);
      dispatch(fetchPostSuccess({ threadId, data }));
    } catch (error) {
      dispatch(fetchPostFailed());
      logError(error);
    }
  };
}

export function fetchThreadComments(threadId) {
  return async (dispatch) => {
    try {
      dispatch(fetchCommentsRequest({ threadId }));
      const data = await getThreadComments(threadId);
      dispatch(fetchCommentsSuccess({ threadId, data }));
    } catch (error) {
      dispatch(fetchCommentsFailed());
      logError(error);
    }
  };
}

export function fetchCommentReplies(commentId) {
  return async (dispatch) => {
    try {
      dispatch(fetchRepliesRequest({ commentId }));
      const data = await getCommentReplies(commentId);
      dispatch(fetchRepliesSuccess({ commentId, data }));
    } catch (error) {
      dispatch(fetchRepliesFailed());
      logError(error);
    }
  };
}
