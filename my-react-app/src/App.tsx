import React, { useEffect, useCallback, useState, useRef } from "react";

import Header from "./components/Header";

import "./App.css";

type User = {
  id: number;
  kind: string;
};

function useRefCallback(fn: any, dependencies: any) {
  const ref = useRef(fn);

  // 每次调用的时候，fn 都是一个全新的函数，函数中的变量有自己的作用域
  // 当依赖改变的时候，传入的 fn 中的依赖值也会更新，这时更新 ref 的指向为新传入的 fn
  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(() => {
    const fn = ref.current;
    return fn();
  }, [ref]);
}

function CloneHeader(props: any) {
  console.log('clone header')
  return React.cloneElement(<Header />, props)
}

function Footer(props: any) {
  console.log('footer')
  return React.createElement('div', props, <p>123</p>)
}

function App() {
  const [num, setNum] = useState(0);

  const handleClick = useRefCallback(() => {
    console.log(">>>>enter", num);
  }, [num]);

  function makeCustomer<T extends User>(u: T): User {
    // Error（TS 编译器版本：v4.4.2）
    // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
    // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
    // but 'T' could be instantiated with a different subtype of constraint 'User'.
    return {
      id: u.id,
      kind: 'customer'
    }
  }

  return (
    <div className="App">
      <Header handleClick={handleClick} />
      <CloneHeader name="clone"/>
      <button onClick={() => setNum((num) => num + 1)}>{num}</button>
      <Footer />
    </div>
  );
}

export default App;
