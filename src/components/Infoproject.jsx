

export const Infoproject = ({projecto}) => {
  return (
    <div
    style={{
      borderLeft: "1px solid #22577E",
      paddingLeft: "10px",
    }}
  >
    <div>
      <img
        className="imgProject"
        style={{
          width: "100%",

          borderRadius: "15px",
        }}
        src={projecto.image}
      />
    </div>
    <div className="pProject">
      <p>
       {projecto.description}
      </p>
      <a href={projecto.git}>
        <img
          style={{
            width: "40px",
            marginTop: "10px",
          }}
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="git"
        />
      </a>
      <a href={projecto.image}>
        <img
          style={{
            width: "40px",
            marginTop: "10px",
          }}
          src="https://img.icons8.com/pastel-glyph/344/internet-browser--v1.png"
          alt="git"
        />
      </a>
    </div>
  </div>
  )
}

