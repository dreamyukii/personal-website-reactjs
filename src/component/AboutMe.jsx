import React, { Component } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid px-5" style="margin-top: 70px">
          <div class="card px-2 py-2 rounded-5 shadow back">
            <div class="row">
              <div class="card-body col-md-4">
                <img
                  src="img/catikuyo.jpg"
                  class="img-fluid card-img rounded-circle"
                />
              </div>
              <div class="col-md-8">
                <div class="mx-4 my-4">
                  <div class="row">
                    <div class="col-md-5">
                      <h1>yukidream</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
