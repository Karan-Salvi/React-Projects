import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

let PostList = () => {
  const PostContext = useContext(PostListData);
  let postList = PostContext.postList;
  let addInitialPosts = PostContext.addInitialPosts;

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
      });

    return () => {
      console.log("Cleaning up use effect");
      controller.abort()
    };
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </>
  );
};

export default PostList;
