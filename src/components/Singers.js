import React, { Component } from 'react';

class Users extends Component{

    render() {

        const {name, age } = this.props;

        console.log(this.props);
        return(
            <div>
                <p>Chanteur : {name}  age : {age}  </p>
            </div>
        )
    }
}

export default Users;