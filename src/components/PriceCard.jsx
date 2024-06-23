// PriceCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const PriceCard = ({ plan }) => {
  const { name, price, features } = plan;

  return (
    <div className="col-md-4 mb-4">
      <Card className="h-100">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted text-center name">{name}</Card.Subtitle>
          <Card.Title><h1 className='text-center'>${price}/month</h1></Card.Title><hr></hr>
          <ListGroup variant="flush" className="custom-list-group">
            {features.map((feature, index) => (
              <ListGroup.Item key={index} className="border-0">
                {feature.startsWith('✔') ? (
                  <FontAwesomeIcon icon={faCheck} style={{ color: 'black', marginRight: '5px' }} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} style={{ color: 'grey', marginRight: '5px' }} />
                )}
                <span style={{ color: feature.startsWith('✔') ? 'inherit' : 'grey' }}>
                  {feature.slice(2)}
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button className="btn btn-primary">BUTTON</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PriceCard;





