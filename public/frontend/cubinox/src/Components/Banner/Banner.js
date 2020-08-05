import React, { Component } from 'react';
import {Link} from "@reach/router";
import Button from '@material-ui/core/Button';

import './Banner.css';

class Banner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="banner-sec">
                <div class="content">
                   <h1 className="ttl capital">Build your virtual team now</h1>
                <h3 class="ttl two">Cubinox helps you hire and manage remote talent from all across the globe</h3>
                <h4 class="ttl three">Access to the best talent | No Hiring Costs | Zero Risk Trials</h4>
                </div>
            </section>
        )
    }
}

export default Banner;