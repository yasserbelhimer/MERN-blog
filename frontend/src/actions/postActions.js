import axios from "axios";
export const FETCH_POSTS_BEGIN = "FETCH_POSTS_BEGIN";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const fetchPostsBegin = () => ({
	type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = (posts) => ({
	type: FETCH_POSTS_SUCCESS,
	payload: { posts },
});

export const fetchPostsFailure = (error) => ({
	type: FETCH_POSTS_FAILURE,
	payload: { error },
});

export function fetchPosts() {
	return async (dispatch) => {
		dispatch(fetchPostsBegin());
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				dispatch(fetchPostsSuccess(res.data));
				return res.data;
			})
			.catch((error) => {
				return dispatch(fetchPostsFailure(error.message));
			});
	};
}
