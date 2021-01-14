import React, {Component} from 'react';
import axios from 'axios';

class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {details: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/profile') // unimplemented
             .then(response => {
                 this.setState({details: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Profile;