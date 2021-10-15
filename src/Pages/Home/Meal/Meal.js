import React from 'react';
import { Container } from 'react-bootstrap';
import Breakfast from '../../Meals/Breakfast/Breakfast';
import Dinner from '../../Meals/Dinner/Dinner';
import Lunch from '../../Meals/Lunch/Lunch';

const Meal = () => {
    return (
        <Container className="my-5">
            <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner>
        </Container>
    );
};

export default Meal;