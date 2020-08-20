/* eslint-disable no-param-reassign,import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../../data/constants';

const postsSlice = createSlice({
  name: 'threads',
  initialState: {
    status: LoadingStatus.LOADING,
    page: null,
    post: {
      // Map thread ids to post
    },
    comments: {
      // Map thread ids to comments
    },
    replies: {
      // Map comment ids to replies
    },
    totalPages: null,
    totalThreads: null,
  },
  reducers: {
    fetchCommentsRequest: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    fetchCommentsSuccess: (state, { payload }) => {
      const { data, threadId } = payload;
      state.status = LoadingStatus.LOADED;
      state.comments[threadId] = data.results;
      state.page = data.pagination.page;
      state.totalPages = data.pagination.num_pages;
      state.totalThreads = data.pagination.count;
    },
    fetchCommentsFailed: (state) => {
      state.status = LoadingStatus.FAILED;
    },
    fetchCommentsDenied: (state) => {
      state.status = LoadingStatus.DENIED;
    },
    fetchPostRequest: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    fetchPostSuccess: (state, { payload }) => {
      const { data, threadId } = payload;
      state.status = LoadingStatus.LOADED;
      state.post[threadId] = data;
    },
    fetchPostFailed: (state) => {
      state.status = LoadingStatus.FAILED;
    },
    fetchPostDenied: (state) => {
      state.status = LoadingStatus.DENIED;
    },
    fetchRepliesRequest: (state) => {
      state.status = LoadingStatus.LOADING;
    },
    fetchRepliesSuccess: (state, { payload }) => {
      const { data, commentId } = payload;
      state.status = LoadingStatus.LOADED;
      state.replies[commentId] = data.results;
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
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailed,
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostFailed,
  fetchRepliesRequest,
  fetchRepliesSuccess,
  fetchRepliesFailed,
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
