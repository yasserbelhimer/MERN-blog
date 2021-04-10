import "./App.css";
import Home from "./pages/home";
import SideBar from "./pages/sidebar";
import Header from "./pages/header";
function App() {
	return (
		<div id="wrapper">
			{/* Header */}
			<Header />
			{/* Main */}
			<Home />
			{/* Sidebar */}
			<SideBar />
		</div>
	);
}

export default App;
