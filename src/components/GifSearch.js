import React, { Component } from "react";

export default class GifSearch extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return(
            <form onSubmit={this.props.fetchGifs}>
                <input type="text" valie={this.state.value} onChange={this.handleChange}></input>
            </form>
        )
    }

}