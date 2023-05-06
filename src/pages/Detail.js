import React from 'react'
// import Card from '../component/TodoCard'
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Stdetail = styled.div`
  width: 600px;
  height: 400px;
  background-color: lightyellow;
  margin: 20px;
  font-size: 25px;
  text-align: center; 
`;


const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StDialogHeader = styled.div`
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

function Detail() {
  const todosStore = useSelector((state) => state)
  const param = useParams();

  const todo = todosStore.todos.todos.find((todo) => todo.id === param.id); 

  return (
    <Stdetail>
      <StDialogHeader>
      <Link to={"/"}> 이전 페이지로 </Link><br/>
      <StTitle>{todo.title}</StTitle><br/>
      <StBody>{todo.content}</StBody><br/>
      <p>{todo.isDone ? '미완료 ❌':'완료 ⭕'}</p>
      </StDialogHeader>
    </Stdetail>
  )
}

export default Detail