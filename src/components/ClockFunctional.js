import React from 'react';

function ClockFunctional() {
    let date, setDate;
    [date, setDate] = React.useState(new Date()); //value, function to set, and initial value
    let timerID=null;

    function tick() {        
        setDate(new Date());
    }

    function setup() {
        //This.timerID doesn't participate in data flow, okay to add.
        timerID = setInterval( tick(), 1000 );                
        return teardown;
    }   

    function teardown() {
        clearInterval(timerID);
    }

    React.useEffect(setup);
    
    return (
        <div>
        <h1>Hello, world from ClockFunctional!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );    
}

export default ClockFunctional;