import React, { Component } from 'react';
import {Link} from 'react-router';
import LogOut from '../main/logout.js';
import LogInForm from '../main/loginform.js';
import CreateButton from '../main/create-button.js';
import css from '../../styles/navigation/navigation.scss';
import axios from 'axios';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null
    }
  }
  componentDidMount(){
    console.log("======> Navbar mounted")
    axios.get('/api/data')
    .then((response)=>{
      if (response.data){
        this.setState({userId: response.data.id})
      }
     })
  }
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
        	<div className="navbar-explore">
        		<Link to="explore">Explore</Link>
        	</div>
        	<div className="navbar-discover">
        		<Link to="discover">Discover</Link>
        	</div>
        	<div className="navbar-logo">
        		<Link to="/"><img src="https://s25.postimg.org/s4cklvyxr/culture_vault_logo.png" alt="Culture Vault" /></Link>
        	</div>
        	<div className="navbar-about">
        		<Link to="#">About</Link>
        	</div>
          { this.state.userId?
             <div>
                <div> <LogOut /> </div>

                <div><CreateButton /></div>
             </div>
             : <div className="login">
                <div>
        		      <LogInForm />
                </div>
         	    </div>
            }
        </div>
      </div>
    );
  }
}
