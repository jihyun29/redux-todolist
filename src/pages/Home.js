// import { useSelector } from "react-redux"; 
// import { useDispatch } from "react-redux";
// import todos, { addTodo } from "./redux/modules/todos";
import React from "react";
import InputForm from "../component/InputForm";
import Card from '../component/TodoCard';


const Home = () => {

  return (
    <div>
      <InputForm/>
      <Card/>
    </div>
  ) 

}

export default Home;
