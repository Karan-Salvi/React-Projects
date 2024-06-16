import { createContext, useEffect, useReducer } from "react";
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
    let newPost = action.payload.post;
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
    []
  );



  

  const addPost = (post) => {
    dispatchPostlist({
      type:"ADD_POST",
      payload:{
        post:post,
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
  };

  return (
    <>
      <PostList.Provider
        value={{
          postList,
          addPost,
          deletePost,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};



export default PostListProvider;
