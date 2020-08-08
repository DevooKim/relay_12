import React, { useState, useEffect } from 'react';
import Board from '../components/BoardView/Board.jsx';
import { getPostById } from '../lib/api';


const BoardView = ({location, match}) =>  {
  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   const fetchPost = () => {
  //     getPostById(match.params.postId)
  //       .then((res) => setPost(res.data))
  //       .catch((err) => console.error(err));
  //   };
  //   fetchPost();
  // }, []);

  // 백엔드 API 로 단일 포스트 받아 올꺼면 위 방식을 사용하면 됩니다.
  // 현재는 상위 컴포넌트에서 모든 포스트 정보를 받아와 자식 컴포넌트에게 전달해주는 방식

  return (
    <Board
      // 테스트용 b 객체 이용
      postId={location.state.data.postId}
      title={location.state.data.title}
      body={location.state.data.body}
      username={location.state.data.username}
      createdAt={location.state.data.createdAt}
      isChat={location.state.data.isChat}
    />
  );
};

export default BoardView;
