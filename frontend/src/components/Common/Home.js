import React, {Component} from 'react';
import axios from 'axios';

var string = "MyString"

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    componentDidMount() {
        this.setState({
            name: 'Vikrant'
        })
    }

    componentDidUpdate() {
        if(this.state.name != 'Kanish')
        this.setState({
            name: 'Kanish'
        })
    }

    // render -> constructor -> (1st called) ComponentDidMount -> ComponentDidUpdate -> ComponentWillUnmount

    render() {
        return (
            <div>
                Happy Coding {this.state.name}!
           </div>
        )
    }
}