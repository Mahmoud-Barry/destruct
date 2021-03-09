import React, { Component } from 'react';
import Users from './Singers';

class Display extends Component {

    render(){
        return(
            <div>
                <h1>Musiciens</h1>
                <Users name="Eric Clapton" age="74" />
                <Users name="Jimi Hendrix" age="27" />
                <Users name="David Glimpux" age="98" />
                <Users name="Dip dundu guss" age="25" />
            </div>
        )
    }
}

export default Display;