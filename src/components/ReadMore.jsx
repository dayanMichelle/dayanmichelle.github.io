import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listBlogs } from "../projects/listblogs";
export const ReadMore = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    listBlogs.map((blog) => {
      if (blog.id === id) {
        setBlog(blog);
      }
    });
  }, []);
  return (
    <div
    style={{
      width: "80%",
      margin: "0 auto",
    }}
    >
      <h3
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "white",
          fontSize: "30px",
        }}
      >
        {blog.title}
      </h3>
      <img
        style={{
          maxWidth: "50%",
          minWidth:"250px",
          margin: "0 auto",
          display: "block",
        }}
        src={blog.image}
      />
      <div className="content">
        <p style={{
          whiteSpace: "pre-wrap",
          fontSize: "20px",
        }}>{blog.content}</p>
        {blog.link && (
          <a
          style={{
            color: "#7FB5FF",
            fontSize: "20px",
            textDecoration: "none",
          }} 
          href={blog.link}>Ir a Youtube</a>
        )}
      </div>
    </div>
  );
};
