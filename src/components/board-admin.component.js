import React, { Component } from "react";

import UserService from "../services/user.service";
import AddTutorial from "./Admin/AddTutorial"
import Tutorial from "./Admin/tutorial"
import TutorialList from "./Admin/tutorials-list"
import Uyeekle from "./register.component"

import Burclar from './Admin/Burclar'
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>

        </header>
       {/*  <div className="container">
          <h3> <h3> Admin Ekleme Paneli </h3></h3>

          <header className="jumbotron">

          <Uyeekle/>

          </header>

          <h3> <h3>Moderatör Ekleme Paneli</h3></h3>
          <header className="jumbotron">
          <Uyeekle/>


          </header>
          <h3> <h3>Üye Ekleme Paneli</h3></h3>
          <header className="jumbotron">
           <Uyeekle/>

          </header>
          <h3> <h3>Havuz Paneli</h3></h3>
          <header className="jumbotron">
            <h3> <h3>s</h3></h3>

          </header>


          <h3> <h3>Burç Ekleme Paneli</h3></h3>
          <header className="jumbotron">
            <h3> <h3>s</h3></h3>

          </header>

          <h3> <h3>İndirim Paneli</h3></h3>
          <header className="jumbotron">
            <h3> <h3>s</h3></h3>

          </header>

          <h3> <h3>Duyuru  Paneli</h3></h3>
          <header className="jumbotron">
           
            <AddTutorial/>
          <TutorialList/>
 
          </header>
       
        </div> */}

       </div>

    );
  }
}
