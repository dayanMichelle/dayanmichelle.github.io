import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import HomePage from "./HomePage";

const ContactPage = ({}) => {
  const [state, handleSubmit] = useForm("xeqnrvlg");
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  if (state.succeeded) (
    <HomePage   />
  )
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
        <form method="POST" onSubmit={handleSubmit}>
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "40px",
              margin: "0",
            }}
          >
            Let's contact
          </p>
          <div>
            <input
              name="name"
              onChange={(e) => {
                setContact({ ...contact, name: e.target.value });
              }}
              value={contact.name}
              className="inputForm"
              type="text"
              placeholder="Name"
            />
            <input
              name="email"
              onChange={(e) => {
                setContact({ ...contact, email: e.target.value });
              }}
              value={contact.email}
              className="inputForm"
              type="text"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              className="inputForm"
              value={contact.message}
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={(e) => {
                setContact({ ...contact, message: e.target.value });
              }}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            style={{
              backgroundColor: "#fa7268",
              color: "white",
              fontWeight: "500",
              fontSize: "16px",
              border: "none",
              padding: "15px",
              width: "200px",
              borderRadius: "5px",
            }}
            disabled={state.submitting}
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
