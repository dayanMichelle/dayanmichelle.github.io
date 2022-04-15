import React from "react";

const ContactPage = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div>
        <img
          className="form-image"
          src="https://images.pexels.com/photos/1928079/pexels-photo-1928079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
      <div
        style={{
          width: "400px",
        }}
      >
        <form
          action=""
          >
          <p style={{ color: "white", fontWeight: "bold", fontSize: "40px",margin:'0' }}>
            Let's contact
          </p>
          <div>
            <input className="inputForm" type="text" placeholder="Name" />
            <input className="inputForm" type="text" placeholder="Email" />
            <textarea
              className="inputForm"

              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>

          <button
            style={{
              backgroundColor: "#fa7268",
              color: "white",
              fontWeight: "500",
              fontSize: "16px",
              border: "none",
              padding: "15px",
              width:'200px',
              borderRadius: "5px",
            }}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
