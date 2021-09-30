import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../actions/index";


const Todo = () => {
    const [currInput, setInput] = useState("");
    const dispatch = useDispatch();
    const myState = useSelector((state) => state.todoReducers);
    const inputevent = (event) => {
        setInput(event.target.value);
    };
    return (
        <>
            <div style={{ width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", display: "flex", backgroundColor: "grey" }}>
                <div style={{ width: "25%", height: "60%", backgroundColor: "white", borderRadius: "10px" }}>
                    <div style={{ width: "100%", height: "40px", backgroundColor: "purple", marginTop: "15px" }}>
                        <h2 style={{ color: "white", textAlign: "center", padding: "7px 0" }}> Add Sauda Items</h2>
                    </div>
                    <div style={{ marginTop: "30px", justifyContent: "center", alignItems: "center", display: "flex" }}>
                        <input value={currInput} onChange={inputevent} style={{ border: "none", height: "25px", width: "60%", outline: "none", borderBottom: "2px solid black" }} type="text" placeholder="Add Item" />
                        <button onClick={() => dispatch(addTodo(currInput), setInput(''))} style={{ font: "100%", borderRadius: "30%", backgroundColor: "purple", width: "35px", color: "white", height: "25px", fontSize: "25px", outline: "none", border: "none", justifyContent: "center", alignItems: "center", display: "flex" }}>+</button>
                    </div>

                    <ol style={{ marginTop: "25px", listStyleType: "none" }}>
                        {myState.map((elem, index) => {
                            return (
                                <div key={index}>
                                    <h3>{elem}</h3>
                                    <button onClick={() => dispatch(deleteTodo(index))}>
                                        X
                                    </button>

                                </div>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
};
export default Todo;