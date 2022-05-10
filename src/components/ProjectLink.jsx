
import { Infoproject } from "./Infoproject";
import {projects} from '../projects/list'

const ProjectLink = ({ projecto }) => {
  return (
 
    <div
    style={{
      borderLeft: "1px solid #ea0665",
      paddingLeft: "10px",
    }}
  >
    <div>
      {
        projecto?.video ? (
          <video 
          src={projecto.video}
          muted
          width="100%" 
          controls />
        ):
        (
           <img
        className="imgProject"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "400px",
          borderRadius: "15px",
        }}
        src={projecto.image}
      />
        )
      }
     
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
            margin:' 0 30px',
          }}
          src="https://img.icons8.com/ios/344/github--v1.png"
          alt="github"
        />
      </a>
      {
        projecto?.web && (
          <a href={projecto.image}>
          <img
            style={{
              width: "40px",
              marginTop: "10px",
            }}
            src="https://img.icons8.com/ios/344/internet-browser--v1.png"
            alt="web"
          />
         </a>
        )
      }
      
    </div>
  </div>
  )
}
 
  

export default ProjectLink;
