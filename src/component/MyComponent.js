import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      <span>나의 새롭고 멋진 컴포넌트</span>
      <br></br>
      <span>나의 이름은 {name} 이야!!!!</span>
      <br></br>
      <span>{children}</span>
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
