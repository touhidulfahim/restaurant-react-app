import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dish: state.dishes,
        sample: state.sample
    }
}



class Home extends Component {
    componentDidMount() {
        console.log("Before Update: ", this.props);
        this.props.dispatch({
            type: 'TEST',
            str: 'Hi, Fahim'
        })
    }
    componentDidUpdate() {
        console.log("After Update: ", this.props);
    }

    render() {
        document.title = "Home-Restaurant App";
        return (
            <div></div>
        )
    }
}

export default connect(mapStateToProps)(Home);
