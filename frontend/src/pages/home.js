import PostLg from "../components/post-lg";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { useEffect } from "react";
const Home = (props) => {
	useEffect(() => {
		props.fetchPosts();
	}, []);
	return (
		<div id="main">
			{props.posts.map((post) => (
				<PostLg />
			))}

			{/* Pagination */}
			<ul className="actions pagination">
				<li>
					<a href className="disabled button large previous">
						Previous Page
					</a>
				</li>
				<li>
					<a href="#" className="button large next">
						Next Page
					</a>
				</li>
			</ul>
		</div>
	);
};
const mapState = (state) => ({
	posts: state.posts.items,
	loading: state.posts.loading,
	error: state.posts.error,
});

const mapDispatchToProps = {
	fetchPosts,
};
export default connect(mapState, mapDispatchToProps)(Home);
