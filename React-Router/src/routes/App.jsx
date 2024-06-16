import "./App.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  let onButtonClicked = (tabValue) => {
    setSelectedTab(tabValue);
  };

  return (
    <>
      <PostListProvider>
        <div className="app-container d-flex">
          <Sidebar
            selectedTab={selectedTab}
            onButtonClicked={onButtonClicked}
          ></Sidebar>
          <div className="content d-flex flex-column">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
