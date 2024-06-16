import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdOutlineReviews } from "react-icons/md";
let Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card m-4 position-relative" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary m-1" key={tag}>
              #{tag}
            </span>
          ))}
          <div className="alert alert-success mt-3" role="alert">
            <BiSolidLike />
            {post.reactions.likes} <BiSolidDislike />
            {post.reactions.dislikes} <MdOutlineReviews />
            {post.views}
          </div>
        </div>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <MdOutlineDelete />
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>
    </>
  );
};

export default Post;
