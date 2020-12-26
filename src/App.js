import React from "react";
import CounterOne from "./CounterOne";
import CounterFive from "./CounterFive";
import Hello from "./Hello";
import Messages from "./Messages";
import "./styles.css";
import ComponentParent from "./ComponentParent";
import UserList from "./UserList";
import Form from "./Form";
import Fragment from "./Fragment";
import ParentComp from "./ParentComp";
import RefsDemo from "./RefsDemo";
import RefsInput from "./RefsInput";
import FRParentInput from "./FRParentInput";

export default function App() {
  return (
    <div className="App">
      <Hello name="shahin" surname="kamrul" />
      <Messages />
      <CounterOne />
      <CounterFive />
      <ComponentParent />
      <UserList />
      <Form />
      <Fragment />
      <ParentComp />
      <RefsDemo />
      <RefsInput />
      <FRParentInput />
    </div>
  );
}
