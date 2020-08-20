/* eslint-disable import/prefer-default-export */
export const selectTopicComment = topicId => state => state.comments.comment[topicId] || {};

export const selectTopicReplies = topicId => state => state.comments.replies[topicId] || [];

export const courseTopicsStatus = state => state.comments.status;
