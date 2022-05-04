import React, {Component} from 'react';

//ES6 Class with state
class ClockClass extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }   
    //Lifecycle components
    componentDidMount() { 
        //This.timerID doesn't participate in data flow, okay to add.
        this.timerID = setInterval( () => this.tick(), 1000 );    
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });        
    }


    render() {
        return (
          <div>
            <h1>Hello, world! from ClockClass</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
    }
}

export default ClockClass;