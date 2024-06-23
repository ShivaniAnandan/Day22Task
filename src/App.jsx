import React from 'react';
import PriceCard from './components/PriceCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';


const App = () => {
  // Define different plans with their respective details
  const plans = [
    {
      name: 'FREE',
      price: 0,
      features: [
        '✔  Single User',
        '✔  50GB Storage',
        '✔  Unlimited Public Projects',
        '✔  Community Access',
        'X  Unlimited Private Projects',
        'X  Dedicated Phone Support',
        'X  Free Subdomain',
        'X  Monthly Status Reports'
      ]
    },
    {
      name: 'PLUS',
      price: 9,
      features: [
        '✔  5 Users',
        '✔  50GB Storage',
        '✔  Unlimited Public Projects',
        '✔  Community Access',
        '✔  Unlimited Private Projects',
        '✔  Dedicated Phone Support',
        '✔  Free Subdomain',
        'X  Monthly Status Reports'
      ]
    },
    {
      name: 'PRO',
      price: 49,
      features: [
        '✔  Unlimited Users',
        '✔  50GB Storage',
        '✔  Unlimited Public Projects',
        '✔  Community Access',
        '✔  Unlimited Private Projects',
        '✔  Dedicated Phone Support',
        '✔  Free Subdomain',
        '✔  Monthly Status Reports'
      ]
    }
  ];

  return (
      <Container className='main'>
      <Row>
      {plans.map((plan, index) => (
        <PriceCard key={index} plan={plan} />
      ))}
      </Row>
      </Container>
  );
};

export default App;
