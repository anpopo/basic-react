import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: '',
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    handleClick = () => {
        alert(`${this.state.username}: ${this.state.message}`);
        this.setState({ ...this.state, username: '', message: '' });
    };

    handleKeyPress = (e) => {
        if (e.key === `Enter`) {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="이름ㄱㄱ"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    maxLength="10"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />

                <button onClick={this.handleClick}>확인해볼까요??</button>
            </div>
        );
    }
}

export default EventPractice;
