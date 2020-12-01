import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Banner from '../Banner/Banner';

import './Homepage.css';


class Homepage extends Component {
  constructor(props) {
    super(props)
    
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (){
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phoneNumber').value;
    console.log(name,phone)
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
      body:JSON.stringify({ na: name , ph : phone })
  };
  fetch('http://localhost:8000/employee', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        {/* <Banner></Banner> */}
      <Container className="contianer" maxWidth="lg">
        <div class="formContainer">
      <form  noValidate autoComplete="off">
        <TextField id="name" label="Name" variant="outlined" />
      </form>
      <form  noValidate autoComplete="off">
        <TextField id="phoneNumber" label="Phone Number" variant="outlined" />
      </form>
      <form  noValidate autoComplete="off">
        <Button variant="contained" size="large" color="primary" className="login-btn" onClick={this.submitForm}>
        Submit
        </Button>
      </form>
        </div>
      </Container>
      </div>
    )
  }
}

export default Homepage;