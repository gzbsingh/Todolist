import React from "react";
import "./Todoitems.css";
export default function Todoitem({ title }) {
  return <div className="item_div">{title}</div>;
}
