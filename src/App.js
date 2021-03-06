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
import ErrorBoundary from "./ErrorBoundary";
import PortalDemo from "./PortalDemo";
import ErrorDemo from "./ErrorDemo";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import Person from "./Person";
import ClickCounterTwo from "./ClickCounterTwo";
import HoverCounterTwo from "./HoverCounterTwo";
import Counter from "./Counter";
import ComponentA from "./ComponentA";
import { UserProvider } from "./userContext";
import PostList from "./PostList";
import PostForm from "./PostForm";

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
      <PortalDemo />
      <ErrorBoundary>
        <ErrorDemo name="batman" />
      </ErrorBoundary>
      {/* 
      this will throw an error
      <ErrorBoundary>
        <ErrorDemo name="joker" />
      </ErrorBoundary> */}
      <ClickCounter name="shahin" />
      <HoverCounter />
      <Person render={(isLoggedIn) => (isLoggedIn ? "shahin" : "guest")} />
      {/* implement render props */}
      <Counter
        render={(count, incrementFunc) => (
          <ClickCounterTwo count={count} incrementFunc={incrementFunc} />
        )}
      />
      <Counter
        render={(count, incrementFunc) => (
          <HoverCounterTwo count={count} incrementFunc={incrementFunc} />
        )}
      />
      <UserProvider value="shahin">
        <ComponentA />
      </UserProvider>
      <PostList />
      <PostForm />
    </div>
  );
}
