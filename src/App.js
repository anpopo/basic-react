import React, { Component } from 'react';
import Counter from './component/Counter';
import Counter2 from './component/Counter2';
import MyComponent from './component/MyComponent';
import MyComponentClass from './component/MyComponentClass';
import Say from './component/Say';
import EventPractice from './eventhandling/EventPractice';
import EventPractice2 from './eventhandling/EventPractice2';
import EventPractice3 from './eventhandling/EventPractice3';
import EventPractice4 from './eventhandling/EventPractice4';
import EventPractice5 from './eventhandling/EventPractice5';
import EventPractice6 from './eventhandling/EventPractice6';
import EventPractice7 from './eventhandling/EventPractice7';
import ValidationSample from './ref/ValidationSample';
import ScrollBox from './ref/ScrollBox';

class App extends Component {
    render() {
        return (
            <>
                {/* <MyComponent name={`anpopo`}>
                    <MyComponentClass favoriteNumber={44} />
                    <br />
                    <Counter />
                    <Counter2 />
                    <br />
                    <Say />
                </MyComponent>
                <hr />
    
                <EventPractice />
                <EventPractice2 />
                <EventPractice3 />
                <EventPractice4 />
                <EventPractice5 />
                <EventPractice6 />
                <EventPractice7 /> */}
                <ValidationSample />
                <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    맨밑
                </button>
            </>
        );
    }
}

export default App;
