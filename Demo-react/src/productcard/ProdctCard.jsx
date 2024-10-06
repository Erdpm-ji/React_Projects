import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({item}) => {
    return (
        <>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.pname}</Card.Title>
                    <Card.Text>{item.discription}</Card.Text>
                    <Button variant="primary">Add to Card</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default ProductCard;