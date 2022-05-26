import React from "react";
import Todoitem from "./TodoItem";
export default function Todo() {
  let [query, setQuery] = React.useState("");
  let [tasks, setTasks] = React.useState([]);
  const Handle = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    setQuery(value);
  };
  const Add = () => {
    const data = {
      title: query
    };
    let task = [...tasks, data];
    setTasks(task);
  };

  return (
    <>
      <div>
        {tasks.map((item) => {
          return <Todoitem {...item} />;
        })}
      </div>

      <input type="text" onChange={Handle} placeholder="Write Something" />
      <button onClick={Add}>+</button>
    </>
  );
}
