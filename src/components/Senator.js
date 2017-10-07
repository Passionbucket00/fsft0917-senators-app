import React, { Component } from 'react';

export default class Senator extends Component {

    render() {

        const senator = this.props.senator;

        return (
            <div>
                {senator.name} {senator.description}
            </div>
        )
    }
}