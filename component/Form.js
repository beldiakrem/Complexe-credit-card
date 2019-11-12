import React, { Component } from 'react'

export default class Form extends Component {


    render() {
        return (
            <div className="form">
                <label>
                    <input type="text" placeholder="Enter Card Number" maxLength="16" 
                        onChange={event => { this.props.holdnumber(event.target.value) }}
                    />
                </label>
                <br/>
                <label>
                    <input type="text" placeholder="Enter Name" maxLength="22"
                        onChange={event => { this.props.holdname(event.target.value) }}
                    />
                </label>
                <br />
                <label>
                    <input type="text" placeholder="Enter Date of validity" maxLength="4"
                        onChange={event => { this.props.holdvalid(event.target.value) }}
                    />
                </label>
            </div>
        )
    }
}


