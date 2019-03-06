import React from 'react';

/*
    -Timeslots have a simple class applied based on presence of a name prop
*/

class Slot extends React.Component{

    render(){
        return (
            <div className={this.props.name ? "slot-taken" : "slot-free"}>
                <h3>{this.props.hour}</h3>
                <p>{this.props.name}</p>
                <p>{this.props.phone}</p>
            </div>
        )
    }
}

export default Slot;