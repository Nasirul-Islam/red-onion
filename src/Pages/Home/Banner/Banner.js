import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <h1>Best food waiting for your bally</h1>
                <div className="w-50 bg-light m-auto border  rounded-pill">
                    <InputGroup className="inputField">
                        <FormControl
                            placeholder="Search food item"
                            aria-label="Search food item"
                        />
                        <Button className="bg-danger px-4 p-3 text-light btn-outline-light border  rounded-pill" variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>
            </Container>
        </div>
    );
};

export default Banner;