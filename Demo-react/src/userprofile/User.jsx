import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const User = ({ detail }) => {
    return (
        <>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={detail.image}  width={15} height={150}/>
                <Card.Body>
                    <Card.Title>{detail.uname}</Card.Title>
                    <Card.Subtitle>
                    Eid : {detail.empid}
                    </Card.Subtitle>
                    <Card.Text>
                       Working at {detail.company}
                    </Card.Text>
                    
                    <Button variant="primary">View Profile</Button>
                </Card.Body>
            </Card>
            
        </>

    );
}

export default User;