import React, { Component } from 'react';
import RestaurantList from '../Components/RestaurantView';
import { connect } from 'react-redux';
import { getVisibleRestaurants } from '../selectors/Selectors';
import SearchRestaurants from './SearchRest';
import { Container } from 'reactstrap';

class RestaurantContainer extends Component {
  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>;
    }

    return (
      <div>
        <Container>
          <SearchRestaurants />

          { this.props.loading ? <p>Loading</p> : null }
          <p>Total items: { this.props.refine ? this.props.restaurants.length : this.props.total }</p> 
          <RestaurantList restaurants={this.props.restaurants} />
        </Container>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    restaurants: getVisibleRestaurants(state),
    refine: state.restaurantReducer.refine,
    total: state.restaurantReducer.total_items,
    error: state.restaurantReducer.error,
    loading: state.restaurantReducer.loading
  } 
}

export default connect(mapStatetoProps, null)(RestaurantContainer);