import React from 'react';
import { Icon } from 'semantic-ui-react';

/*
    -Timeslots have a simple class applied based on presence of a name prop
*/

class Slot extends React.Component{

    render(){
        const {name, hour, phone} = this.props;
        return (
            <div className={this.props.name ? "slot-taken" : "slot-free"}>
                <h3 className="slot__time">{hour}</h3>
                <p className="slot__name">
                    {name && <Icon style={{marginRight: '10px'}} name="user" size="small"/>}
                    {name}
                </p>
                <p className="slot__phone">
                    {phone && <Icon style={{marginRight: '10px'}} name="phone" size="small"/>}
                    {phone}
                </p>                
            </div>
        )
    }
}

export default Slot;