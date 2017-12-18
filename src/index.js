import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
  
var destination = document.querySelector("#container")
  
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
); //te probem was that I did not put a semicolon  in the end. 