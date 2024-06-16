import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

let CreatePost = () => {
  const { addPost } = useContext(PostList);

  return (
    <>
      <Form method="POST" className="m-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Post Title :
          </label>
          <input
            name="title"
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
            name="body"
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
            name="userId"
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
            name="reactions"
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
            name="tags"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter tags..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
