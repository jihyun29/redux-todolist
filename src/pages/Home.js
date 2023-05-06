// import { useSelector } from "react-redux"; 
// import { useDispatch } from "react-redux";
// import todos, { addTodo } from "./redux/modules/todos";
import React from "react";
import InputForm from "../component/InputForm";
import Card from '../component/TodoCard';
import styled from "styled-components";

const Stlayout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
  background: white; ;
`;

const Home = () => {

  return (
    <Stlayout>
      <InputForm/>
      <Card/>
    </Stlayout>
  ) 

}

export default Home;
