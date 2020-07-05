import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchData } from '../actions/Actions';
import { connect } from 'react-redux';
import './Rest.css';

class SearchRestaurants extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            city: '',
            error: '',
            refine: ''
        }
    }

    onChange = event => {
        this.setState({
            city: event.target.value
        })
    };

    onRefineChange = event => {
        this.setState({
            refine: event.target.value
        })
    }

    onFormSubmit = event => {
        event.preventDefault();

        if (!this.state.city) {
            this.setState({
                error: 'Please enter a city name'
            })
        } else {
            this.setState({
                error: ''
            })
            
            this.props.fetchData(this.state.city, this.state.refine);
        }
    };

    render() {
        return (
            <Row>
              <Col>
                <Form onSubmit={this.onFormSubmit} className="form-inline row mt-5">
                    <FormGroup className="col-12 col-md-4">
                        <Label className="sr-only" for="cityName">City</Label>
                        <Input
                            type="text"
                            name="cityName"
                            className="a"
                            placeholder="City"
                            onChange={this.onChange}
                            value={this.state.city}
                            
                        />
                    </FormGroup>

                    <FormGroup className="col-12 col-md-4">
                        <Label className="sr-only" for="refine">Address, Name or Area</Label>
                        <Input
                            type="text"
                            name="refine"
                            className="b"
                            placeholder="Address, Name or Area"
                            onChange={this.onRefineChange}
                            value={this.state.refine}
                        />
                    </FormGroup>

                    <Button
                      className="Bu" color="primary">
                        Search
                    </Button>

                    {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                </Form>
            </Col>
          </Row>
        );
    }
};

const mapStatetoProps = (state) => {
    return {
      city: state.restaurantReducer.city,
    } 
}
  
export default connect(mapStatetoProps, { fetchData })(SearchRestaurants);