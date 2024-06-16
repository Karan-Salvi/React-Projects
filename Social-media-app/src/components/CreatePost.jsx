import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

let CreatePost = () => {
  const { addPost } = useContext(PostList);

  let titleElement = useRef();
  let bodyElement = useRef();
  let userIdElement = useRef();
  let reactionsElement = useRef();
  let tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const reactions = reactionsElement.current.value;
    addPost(userId, title, body, tags, reactions);
  };

  return (
    <>
      <form className="m-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Post Title :
          </label>
          <input
            ref={titleElement}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter title here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Post content:
          </label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            ref={bodyElement}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your user ID here :
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your user ID here..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter the reactions :
          </label>
          <input
            type="text"
            className="form-control"
            ref={reactionsElement}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter the reactions..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter tags (if more values then give spaced values) :
          </label>
          <input
            type="text"
            className="form-control"
            ref={tagsElement}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter tags..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default CreatePost;
