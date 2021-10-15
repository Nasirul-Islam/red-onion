import React, { useState } from 'react';
import { Button, ButtonGroup, Container, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breakfast from '../../Meals/Breakfast/Breakfast';


const Meal = () => {


    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Breakfast', value: '1' },
        { name: 'Lunch', value: '2' },
        { name: 'Dinner', value: '3' },
    ];

    return (
        <Container className="my-5">
            <>
                <ButtonGroup className="mb-2">
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                <br />
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </>
            <br />
            <br />
            <Link to="/breakfast"><Button variant="outline-danger" className="m-2">Breakfast</Button></Link>
            <Link to="/lunch"><Button variant="outline-danger" className="m-2">Lunch</Button></Link>
            <Link to="/dinner"><Button variant="outline-danger" className="m-2">Dinner</Button></Link>


        </Container>
    );
};

export default Meal;