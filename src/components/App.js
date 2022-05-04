import React, {Component} from 'react';

class App extends Component {

    render() {
        let dataArray = [{
            name:"John Snow",
            location:"Winterfell"
        }, {
            name:"Tyrion Lannister",
            location:"Casterly Rock"
        }];

        //W
        let dataElementArray = dataArray.map((person, index)=>{
            return (
                <li>
                    Name: {person.name} Location: {person.location}
                </li>
            )
        });

        return (
            <ul>
                {dataElementArray}
            </ul>
        );
    }
}

export default App;