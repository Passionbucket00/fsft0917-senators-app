import React, { Component } from 'react';

export default class Senator extends Component {

    render() {

        const senator = this.props.senator;

        return (
            <div className="senator">
                <h4>{senator.person.firstname} {senator.person.lastname}</h4> 
                <div>{senator.party}</div>
                <div>{senator.startdate}</div>
            </div>
        )
    }
}