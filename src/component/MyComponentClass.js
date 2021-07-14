import React, { Component } from 'react';

class MyComponentClass extends Component {
  render() {
    const { favoriteNumber } = this.props;

    return (
      <div>
        <span>제가 좋아하는 숫자는 {favoriteNumber} 입니다.</span>
      </div>
    );
  }
}

export default MyComponentClass;
