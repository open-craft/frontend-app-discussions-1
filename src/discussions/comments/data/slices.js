/* eslint-disable no-param-reassign,import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../../data/constants';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    status: LoadingStatus.LOADING,
    page: null,
    comment: {
      // Map thread ids to comment
    },
    replies: {
      // Map thread ids to replies
    },
    totalPages: null,
    totalThreads: null,
  },
  reducers: {
    fetchCommentRequest: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    fetchCommentSuccess: (state, { payload }) => {
      const { data, topicId } = payload;
      state.status = LoadingStatus.LOADED;
      state.comment[topicId] = data;
    },
    fetchCommentFailed: (state) => {
      state.status = LoadingStatus.FAILED;
    },
    fetchCommentDenied: (state) => {
      state.status = LoadingStatus.DENIED;
    },
    fetchRepliesRequest: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    fetchRepliesSuccess: (state, { payload }) => {
      const { data, topicId } = payload;
      state.status = LoadingStatus.LOADED;
      state.replies[topicId] = data.results;
      state.page = data.pagination.page;
      state.totalPages = data.pagination.num_pages;
      state.totalThreads = data.pagination.count;
    },
    fetchRepliesFailed: (state) => {
      state.status = LoadingStatus.FAILED;
    },
    fetchRepliesDenied: (state) => {
      state.status = LoadingStatus.DENIED;
    },
  },
});

export const {
  fetchCommentRequest,
  fetchCommentSuccess,
  fetchCommentFailed,
  fetchRepliesRequest,
  fetchRepliesSuccess,
  fetchRepliesFailed,
} = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
