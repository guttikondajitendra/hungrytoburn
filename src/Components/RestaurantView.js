import React from 'react';
import { Row, Col } from 'reactstrap';
import RestaurantCard from './RestaurantMenu';

const RestaurantList = props => {
  return(
    <div>
      <Row>
      { props.restaurants && props.restaurants.length > 0 ? 
      props.restaurants.map(restaurant => {
        return (
          <Col sm="6" md="4" className="mb-5"  key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </Col>
        )
      }) : 'Please refine the restaurants' }
      </Row>
    </div>
  );
}

export default RestaurantList;