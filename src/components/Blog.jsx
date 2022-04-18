
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useNavigate} from 'react-router-dom'

export const Blog = ({blog}) => {
  const navigate = useNavigate()
  return (
    <Card 
    sx={{ 
      maxWidth: 345,
      backgroundColor:'transparent',
      backdropFilter: "blur(25px)",
      borderRadius:'10px',
      color:'white',
      marginBottom:'30px'
      }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={blog.image}
        alt="green iguana"
      />
      <CardContent>
        <h3 style={{fontSize:'20px'}}>
         {blog.title}
        </h3>
        <p>
          {blog.content}
        </p>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" sx={{color:'white'}}
      onClick={()=>navigate(`/${blog.id}`)}
      >
        Read
      </Button>
    </CardActions>
  </Card>
  )
}

