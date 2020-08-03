import React, { Component } from 'react';

// 클래스형 컴포넌트 (extends Component)

class Counter extends Component {
  // 생성자는 첫번째 파라메터로 props를 받는다.
  constructor(props) {
    super(props);
    console.log('Counter', '생성자 호출됨');
    // 만들어질 때마다 실행됨
  }

  // 이번에 넘어온 props 값
  // 넘어오는 state 값을 현재 state 값에 넣을지 말지 결정함
  // 리액트 버츄얼 박스가 이전 값과 현재 값을 비교 => 멍청한 비교(값을 다 비교하니까)
  // 불변성을 유지해서 레퍼런스만 비교하도록 오버라이딩함
  // 같으면 그림을 그리지 않고(false) 다르면 그림을 다시 그림(true)

  // 호출시점은 최초 render 시에는 실행 X
  // 리랜더링 시에 실행 O
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.data !== this.props.data) {
    //   return true;
    // } else {
    //   return false;
    // }
    console.log('Counter', 'shoudComponentUpdate 호출됨');
    return true;
  }

  // render가 종료된 뒤 호출됨 → 비동기 처리시 필요 / 큰 파일은 여기에 띄우면 좋음
  // 최초 render 시에만 호출됨. state 값 변경시에는 호출되지 않음.
  componentDidMount() {
    console.log('Counter', 'componentDidMount 호출됨');
  }

  // render는 그림을 그려주는 함수 = setState()가 호출되거나 혹은 최초에 객체 생성시 실행됨
  // render 내부에서는 state와 props에 접근할 수 있음
  // return 내부는 JSX 문법이 들어감
  render() {
    // const temp1 = this.state;
    // const temp2 = this.props;

    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.props.number}</div>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    );
  }
}

export default Counter;
