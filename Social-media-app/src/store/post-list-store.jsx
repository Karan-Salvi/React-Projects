import { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts:()=>{},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type === "ADD_POST")
  {
    let newPost ={
      id: action.payload.userId,
      title: action.payload.title,
      body: action.payload.body,
      reactions: action.payload.reactions,
      userId: action.payload.userId,
      tags: action.payload.tags,
    }
    newPostList = [newPost,...currPostList];
  }else if(action.type === "ADD_INITIAL_POST")
    {
      newPostList = action.payload.posts;
    }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId,title,body,tags,reactions) => {
    dispatchPostlist({
      type:"ADD_POST",
      payload:{
        userId:userId,
        title:title,
        body:body,
        tags:tags,
        reactions:reactions,
      }
    })
  };

  const addInitialPosts = (posts) => {
    dispatchPostlist({
      type:"ADD_INITIAL_POST",
      payload:{
        posts:posts,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
    console.log(`delete post called for ${postId}`);
  };

  return (
    <>
      <PostList.Provider
        value={{
          postList,
          addPost,
          deletePost,
          addInitialPosts,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

const DEFAULT_POST_LIST = [
  /*{
    id: "1",
    title: "Going to Mumbai",
    body: "Hey guys, I am going for vacation in Mumbai, to enjoy and travel with my lovely friends.",
    reactions: 12,
    userId: "user-5",
    tags: ["vacation", "enjoy", "travel"],
  },
  {
    id: "2",
    title: "Got a new certificate",
    body: "I was learning since two months and finally I completed the whole course I got the completion certificate",
    reactions: 20000,
    userId: "user-1",
    tags: ["learn", "try"],
  },*/
];

export default PostListProvider;
