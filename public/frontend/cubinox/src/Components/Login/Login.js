import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props)
    }
componentDidMount(){
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(
        (result) => {
        //   this.setState({
        //     isLoaded: true,
        //     items: result.items
        //   });
        console.log(result.res)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        //   this.setState({
        //     isLoaded: true,
        //     error
        //   });
        console.log(error)
        }
      )
}

    render() {
        return (
            <Container >
            <Card className="login-container">
            <CardContent>
                <h1>Login</h1>
                <form>
                    <div className="input-cntr">
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                    </div>
                    <div  className="input-cntr">
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </div>
                    <div  className="input-cntr">
                        <Button variant="contained" size="large" color="primary" className="login-btn">
                        login
                        </Button>
                    </div>
                    <div className="divider"><span className="divider-text">OR</span></div>
                </form>
            </CardContent>
        </Card>
            </Container>
        )
    }
}

export default Login;