/* eslint-disable import/prefer-default-export */
export const selectThreadPost = threadId => state => state.posts.post[threadId] || {};

export const selectThreadComments = threadId => state => state.posts.comments[threadId] || [];

export const selectCommentReplies = commentId => state => state.posts.replies[commentId] || [];

export const courseThreadsStatus = state => state.posts.status;
