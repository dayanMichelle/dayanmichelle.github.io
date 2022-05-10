import { listBlogs } from "../projects/listblogs";
import { Blog } from "./Blog";

const HomePage = () => {
  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0px auto",
      }}
    >
      <h1
        style={{
          backgroundColor:"rgba(0,0,0,0.5)",
          background: '-webkit-linear-gradient(white,#FA7268)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'blue',
          fontSize: "2.6em",
          textAlign: "center",
          textTransform: "uppercase",
          backdropFilter: "blur(10px)",
          marginBottom: "70px",
          marginTop: "50px",
        }}
      >
        Blogs Y Posts 💫
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2em",
        }}
      >
        {listBlogs.map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
