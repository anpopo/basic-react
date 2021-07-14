import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '',
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            message: e.target.value,
        });
    };

    handleClick = () => {
        alert(this.state.message);
        this.setState({ ...this.state, message: '' });
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    maxLength="10"
                    value={this.state.message}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleClick}>확인해볼까요??</button>
            </div>
        );
    }
}

export default EventPractice;
