import React, { Component } from 'react'
import './form.css'
class FormComponent extends Component {
  render() {
    return (
      <div id="form">
          <form onSubmit={this.props.loadweather}>
              <div className="City">
                  <input type="text" className="Name" name="city" placeholder="Enter City" autoComplete="off" required/>
              </div>
              <div className="Country">
                  <input type="text" className="Name" name="country" placeholder="Enter Country" autoComplete="off" required/>
              </div>
              <div><input type="submit" className="btn"/></div>
              
          </form>
      </div>
    )
  }
}

export default FormComponent