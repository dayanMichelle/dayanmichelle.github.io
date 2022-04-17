import { Avatar } from "@mui/material";
import Me from "../img/me.jpeg";

export const Banner = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px auto",
      }}
    >
      <div className="banner-text">
        <h1>Hi, i'm Dayan Arango ✨</h1>
        <p>
          Optio voluptatibus impedit aperiam temporibus minima sed unde
          perspiciatis minus atque molestias illum ullam necessitatibus, fuga
          quisquam corrupti! Veritatis cumque eaque atque, reiciendis, officiis
          sed quas id minus perspiciatis eum, doloremque error. Deserunt amet
          rem rerum unde incidunt numquam facilis sunt minus corrupti beatae
          praesentium necessitatibus voluptate harum neque repellendus soluta
          atque, dignissimos suscipit illo!{" "}
        </p>
      </div>

      <div
      
        className='cardName'
      >
        <Avatar alt="" src={Me} sx={{ width: 150, height: 150,  transform: "rotate(15deg)", }} />
        <div className="tecnologies">React - Redux</div>
        <div className="tecnologies">MongoDB - Sql</div>
        <div className="tecnologies">Node - Express</div>
      </div>
    </div>
  );
};
