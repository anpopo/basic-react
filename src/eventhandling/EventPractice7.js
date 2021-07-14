import React, { Component, useState } from 'react';

const EventPractice6 = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });

    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };

        setForm(nextForm);
    };

    const onClick = () => {
        alert(`${username} : ${message}`);
        setForm({ username: '', message: '' });
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="이름ㄱㄱ"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                maxLength="10"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />

            <button onClick={onClick}>확인해볼까요??</button>
        </div>
    );
};

export default EventPractice6;
