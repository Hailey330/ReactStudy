import React, { Component } from 'react';
import Post from './Post';
import styled from 'styled-components';

// * 스타일 컴포넌트는 class 바깥에 둔다.
const ContainerBox = styled.div`
  display: grid;
  justify-content: center;
`;

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: '제목1',
      },
      {
        id: 2,
        title: '제목2',
      },
      {
        id: 3,
        title: '제목3',
      },
    ],
  };

  render() {
    // 렌더링 될 때마다 계속 그려질 필요가 없기 때문에 const 사용
    const add = () => {
      this.setState({
        posts: this.state.posts.concat({ id: 4, title: '제목4' }),
      });
    };

    const del = () => {
      this.setState({
        posts: this.state.posts.filter((post) => {
          return post.id !== 2;
        }),
      });
    };

    const update = () => {
      const data = {
        id: 2,
        title: '제목200',
      };

      this.setState({
        posts: this.state.posts.map((post) =>
          post.id === 2 ? { ...post, ...data } : post
        ),
      });
    };

    return (
      <ContainerBox>
        <button onClick={add}>추가</button>
        <button onClick={del}>삭제</button>
        <button onClick={update}>수정</button>
        {this.state.posts.map((post) => {
          return <Post id={post.id} title={post.title} />;
        })}
      </ContainerBox>
    );
  }
}

export default App;
