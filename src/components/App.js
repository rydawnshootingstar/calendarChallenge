import React from 'react';
import Calendar from './Calendar';
import { Container } from 'semantic-ui-react';

class App extends React.Component{

    render(){
        return (
            <div>
            <Container style={{maxWidth: '800px', marginTop: '20px'}}>
                <Calendar />
            </Container>    
            </div>
        )
    }
}

export default App;