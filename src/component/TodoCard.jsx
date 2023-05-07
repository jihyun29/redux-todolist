import React from 'react'
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, updateTodo } from '../redux/modules/todos';
import styled from 'styled-components';


const StAl = styled.div`
  display: flex; 
  flex-flow: wrap; 
  gap: 12px;
`;
const StCard= styled.div`
  width: 300px;
  min-height: 200px;
  border: 2px solid;
  margin: 10px;
  padding: 12px 24px 24px 24px;
  background-color: lightyellow;
  word-wrap: break-word;
`;

const Card = () => {

  
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos뭐지:::: ", todos)

  const dispatch = useDispatch();
  
  //삭제버튼
  const clickRemoveButtonHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  //완료취소버튼
  const clickUpdateButtonHandler = (id) => {
    dispatch(updateTodo(id));
  
  };

  return (
    <>
       <h2>Working🙇‍♀️🙇‍♂️🙇</h2>
    <StAl> 
     
      {todos.map((todo)=>{
        if (!todo.isDone) {
          return(
          <StCard key={todo.id}>
          <Link to ={`/detail/${todo.id}`}>상세보기</Link><br/>  
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>  
          <button type="button" class="btn btn-danger" onClick={()=>clickRemoveButtonHandler(todo.id)}>삭제하기</button>
          <button type="button" class="btn btn-warning" onClick={()=>clickUpdateButtonHandler(todo.id)}>{todo.isDone ? "취소하기" : "완료하기"}</button>
         </StCard>
      );
    } else {
      return null;
    }
  })}
   
    </StAl>
    <div>
      <h2>Done🥰🥳</h2>
      <div>
        {todos.map((todo)=>{
          if(todo.isDone) {
          
            return(
            <StCard key={todo.id}>
              <Link to ={`/detail/${todo.id}`}>상세보기</Link><br/>
              <h3>{todo.title}</h3>
              <p>{todo.content}</p> 
              <button type="button" class="btn btn-danger" onClick={()=>clickRemoveButtonHandler(todo.id)}>삭제하기</button>
              <button type="button" class="btn btn-warning"  onClick={()=>clickUpdateButtonHandler(todo.id)}>{todo.isDone ? "취소하기" : "완료하기"}</button>
            </StCard>
            
          );
        } else {
          return null;
        }
        })}
        </div>
      </div>
    </>
  )
}

export default Card;