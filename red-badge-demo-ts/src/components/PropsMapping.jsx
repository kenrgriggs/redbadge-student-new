import React, { Component } from 'react';

class PropsMappingExample extends React.Component {

    render() {

        //Destructure props
        // const { name, business } = this.props
        const VisitedPlaces = () => this.props.visited.map((place) => <li>{place}</li>)

        return (
        <div> 
            <h2>Places I Have Been</h2> 
            <ul>{VisitedPlaces()}</ul>
        </div>
        )
    }
}

export default PropsMappingExample;
