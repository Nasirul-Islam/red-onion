import React from 'react';
import Breakfast from '../../Meals/Breakfast/Breakfast';
import Banner from '../Banner/Banner';
// import Meal from '../Meal/Meal';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Meal></Meal> */}
            <Breakfast></Breakfast>
            <Services></Services>
        </div>
    );
};

export default Home;