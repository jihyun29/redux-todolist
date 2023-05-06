import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/modules/todos';
import styled from 'styled-components';


const InputBOX = styled.div`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: space-between;
  padding: 0 300px;
  color: black;
  background-color: white;
  font-size: 25px;
  gap: 20px;
  
 
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border-radius: 5px;
  padding: 0 12px;
  margin: 10px;
`;

const StAddButton = styled.button`
  cursor: pointer;
  width: 140px;
  height: 40px;
`


const InputForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  //추가
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      addTodo({
        id: uuidv4(),
        title,
        content:content,
        isDone: false,
      })
      
    );
  };



  return (
    <InputBOX>
      
      <div>
       <h1>Todo List를 입력하세요!</h1><br/> 
      제목:&nbsp;
      <StAddInput type='text' value={title} onChange={titleChangeHandler}/><br/>
      내용:&nbsp;
      <StAddInput type='text' value={content} onChange={contentChangeHandler}/> &nbsp;
      
      <StAddButton type="button" class="btn btn-outline-warning" onClick={onSubmitHandler}>추가하기</StAddButton>
      </div>
    </InputBOX>
  )
}

export default InputForm;