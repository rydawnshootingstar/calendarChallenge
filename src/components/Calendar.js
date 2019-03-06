import React from 'react';
import {Grid, Button, Header, Modal, Input} from 'semantic-ui-react';
import {connect} from 'react-redux';
import Slot from './Slot';
import { updateCalendar } from '../actions/calendar';

/*
    -mapped out in render to create our calendar's "grid"
    -these values correspond directly to redux state - if you change them here, change them there
*/
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const slots = ['9-10 AM','10-11 AM','11 AM-12 PM','12-1 PM','1-2 PM','2-3 PM','3-4 PM','4-5 PM'];

/*
    -This class will have state for its modal property 
    -The modalName/Phone/Day/Slot values keep track of where the user has clicked
*/

class Calendar extends React.Component{

    state={
        modal: false,
        modalName: '',
        modalPhone:'',
        modalDay: '',
        modalSlot: '',
    }

    /*
        -onClick event sends us the day and timeslot where the user clicked
        -grab name and phone number from redux using these values as lookups
    */
    showModal = ({day, slot})=> {
       this.setState({
            modal: true, 
            modalDay: day, 
            modalSlot: slot,
            modalName: this.props[day][slot].name, 
            modalPhone: this.props[day][slot].phone
        });
    }

    closeModal =()=> {
        this.setState({modal:false});
    }

    //on modal "form submit", update the calendar state using our action function
    updateCalendarTimeSlot=()=> {
        const day = this.state.modalDay;
        const slot = this.state.modalSlot;
        const name = this.state.modalName;
        const phone = this.state.modalPhone;

        this.props.updateCalendar({day,slot,name,phone});
        this.setState({modal:false})
    }

    //modalName and modalValue come from the modal's inputs
    handleChange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div>

            <Modal
            open={this.state.modal}
            closeOnDimmerClick
            closeOnEscape
            centered={false}
            size="tiny"
            >
                <Modal.Header>Change Details For {this.state.modalDay} at {this.state.modalSlot}</Modal.Header>

                <Modal.Content>
                    <Input label='Name' name="modalName" icon="user" 
                    onChange={this.handleChange} value={this.state.modalName}>
                    </Input>
                    <Input label='Phone' name="modalPhone" icon="phone" 
                    onChange={this.handleChange} value={this.state.modalPhone}>
                    </Input>
                </Modal.Content>

                <Modal.Actions>
                    <Button onClick={this.closeModal} negative>
                    Cancel
                    </Button>
                    <Button
                    onClick={this.updateCalendarTimeSlot}
                    positive
                    labelPosition='right'
                    icon='checkmark'
                    content='Update'
                    />
            </Modal.Actions>
            
            </Modal>
            

            <Grid 
            columns='equal' 
            style={{textAlign: 'center'}}
            >
                <Grid.Row>
                {weekdays.map((day)=> {
                    return (
                        <Grid.Column>
                        <Header className="page-header">{day}</Header>
                        </Grid.Column>
                    )
                })}
                </Grid.Row>

                {slots.map((slot)=> {
                    return (
                        <Grid.Row stretched> 
                            {weekdays.map((day)=> {
                                return (
                                    <Grid.Column 
                                    onClick={()=>this.showModal({day, slot})}
                                    >
                                        <Slot 
                                        hour={slot} 
                                        name={this.props[day][slot].name} 
                                        phone={this.props[day][slot].phone}
                                        />
                                    </Grid.Column>
                                )
                            })}
                        </Grid.Row>
                    )
                })}
                
            </Grid>

            </div>
        );
    };

}

const mapStateToProps = (state)=> {
    return {
       ...state.calendar
     };
};

const componentConnector = connect(
    mapStateToProps,
    {updateCalendar}
);

export default componentConnector(Calendar);


