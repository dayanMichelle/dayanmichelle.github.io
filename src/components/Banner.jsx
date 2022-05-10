import { Avatar } from "@mui/material";
import Me from "../img/Me.png";

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
        <h1>Hola soy Dayan Arango ✨</h1>
        <p>
          💻 Soy un desarrollador fronted Me apasiona aprender sobre la
          innovación tecnológica y que mi trabajo tenga un impacto positivo en
          la calidad de vida de las personas. 📝En el camino he aprendido a
          desafiarme a mí mismo para lograr objetivos. <br /> En mis estrategias de
          programación incorporo herramientas como React, Typescript
          (Javascript). Herramientas de estilo como React MUI, NextUI,
          componente con estilo y módulos. También realizo conexiones con
          servicios y apis. Tengo conocimiento en base de datos como Mysql y
          MongoDB. Uso Node, express y moongose ​​para crear mis proyectos
          personales.{" "}
        </p>
      </div>

      <div className="cardName">
        <Avatar alt="" src={Me} sx={{ width: 150, height: 150 }} />
        <div className="tecnologies">React - Redux</div>
        <div className="tecnologies">MongoDB - Sql</div>
        <div className="tecnologies">Node - Express</div>
      </div>
    </div>
  );
};
