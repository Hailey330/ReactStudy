import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  state = {
    data: {
      userId: null,
      id: null,
      title: null,
      completed: false,
    },
  };

  onClick = async () => {
    const { data } = this.state;

    let resp = await Axios.get('https://jsonplaceholder.typicode.com/todos/1');
    // 다운로드 완료시 함수가 들어오는 자리 → promise
    this.setState({
      data: { data, ...resp.data },
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>아이디: {data.userId}</div>
        <div>제목: {data.title}</div>
        <h1>클릭하세요</h1>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default App;
