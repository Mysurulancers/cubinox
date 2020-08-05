import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Banner from '../Banner/Banner';

import './Homepage.css';


class Homepage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <Banner></Banner>
              <Container >
                <section>
                <h1>OUR SELECTION PROCESS</h1>
                </section>
              </Container>
            </div>
        )
    }
}

export default Homepage;