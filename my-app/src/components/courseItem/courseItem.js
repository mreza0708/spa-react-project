 
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
 import './courseItem.css'
 function CourseItem({id ,title , image , text}){
    return(

<Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Button variant="primary">
          <Link to={`/Course/${id}`} className='buy-btn'>خرید دوره</Link>
        </Button>
      </Card.Body>
    </Card>




    )
 }
 export default CourseItem