let Container = ({ children }) => {
  return (
    <>
      <div
        className="card d-flex justify-content-center"
        style={{ width: "30rem", height: "20rem" }}
      >
        {children}
      </div>
    </>
  );
};
export default Container;
