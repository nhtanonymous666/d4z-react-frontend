import {
	FETCH_POST_REQUESTED,
	FETCH_POST_SUCCEED,
	FETCH_POST_FAILED,
	CREATE_POST_REQUESTED,
	CREATE_POST_SUCCEED,
	CREATE_POST_FAILED,
	SINGLE_POST_REQUESTED,
	SINGLE_POST_SUCCEED,
	SINGLE_POST_FAILED,
	EDIT_POST_REQUESTED,
	EDIT_POST_SUCCEED,
	EDIT_POST_FAILED,
	UPDATE_POST_REQUESTED,
	UPDATE_POST_SUCCEED,
	UPDATE_POST_FAILED,
	DELETE_POST_REQUESTED,
	DELETE_POST_SUCCEED,
	DELETE_POST_FAILED
} from '../constants/postConstant';
import { produce } from 'immer';

const fetchPostInitialState = {
	posts: [],
	loading: true,
	errors: {}
};
const createPostInitialState = {
	posts: {},
	loading: false,
	errors: {}
};
const singlePostInitialState = {
	posts: {},
	loading: true,
	errors: {}
};
const editPostInitialState = {
	posts: {},
	loading: true,
	errors: {}
};
const updatePostInitialState = {
	posts: {},
	loading: false,
	errors: {}
};
const deletePostInitialState = {
	posts: {},
	loading: false,
	errors: {}
};
export const fetchPostReducer = (state = fetchPostInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_POST_REQUESTED:
				draft.posts = [];
				draft.loading = true;
				draft.errors = {};
				break;
			case FETCH_POST_SUCCEED:
				draft.posts = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case FETCH_POST_FAILED:
				draft.posts = [];
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
export const createPostReducer = (state = createPostInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case CREATE_POST_REQUESTED:
				draft.posts = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case CREATE_POST_SUCCEED:
				draft.posts = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case CREATE_POST_FAILED:
				draft.posts = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
export const singlePostReducer = (state = singlePostInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SINGLE_POST_REQUESTED:
				draft.posts = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case SINGLE_POST_SUCCEED:
				draft.posts = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case SINGLE_POST_FAILED:
				draft.posts = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
export const editPostReducer = (state = editPostInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case EDIT_POST_REQUESTED:
				draft.posts = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case EDIT_POST_SUCCEED:
				draft.posts = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case EDIT_POST_FAILED:
				draft.posts = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
export const updatePostReducer = (state = updatePostInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case UPDATE_POST_REQUESTED:
				draft.posts = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case UPDATE_POST_SUCCEED:
				draft.posts = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case UPDATE_POST_FAILED:
				draft.posts = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
export const deletePostReducer = (state = deletePostInitialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case DELETE_POST_REQUESTED:
				draft.posts = {};
				draft.loading = true;
				draft.errors = {};
				break;
			case DELETE_POST_SUCCEED:
				draft.posts = action.payload;
				draft.loading = false;
				draft.errors = {};
				break;
			case DELETE_POST_FAILED:
				draft.posts = {};
				draft.loading = false;
				draft.errors = action.payload;
				break;
			default:
				break;
		}
	});
