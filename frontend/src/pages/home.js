import PostLg from "../components/post-lg";
const home = (props) => {
	return (
		<div id="main">
			<PostLg />
			<PostLg />
			<PostLg />
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
export default home;
