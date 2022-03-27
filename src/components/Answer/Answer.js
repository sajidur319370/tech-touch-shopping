import React from "react";
import "./Answer.css";

const Answer = () => {
  return (
    <div className="answer-container">
      <h3 className="question">1.How React Works ?</h3>
      <p className="answer">
        React is Javascript lirary.it is Not a framework. It is
        declerative,efficient and flexible.It is used to build large UI by small
        component which is called JSX. When the specific data of a component is
        changed React will efficiently render and update that part of
        component.It creates vurtial Dom tree like html.It can manipulate and
        access data from different component or dom.Getting the data from one
        component to another by passing a parameter called props.Component of a
        section can be reused in another section of UI
      </p>
      <article>
        <h3 className="question">
          2.What are the differences between props and state ?
        </h3>
        <p className="answer">
          a) Props are read only and cannot be modified by a component that is
          receiving it from outside but states can be changed inside a component
          that has states.
        </p>
        <p className="answer">
          b) props can pass data from parent component to child component but
          states cannot pass data, it can manage of own component data.
        </p>
        <p className="answer">c) props are immutable but states are mutable</p>
      </article>
      <article>
        <h3 className="question">3.How useState works ?</h3>
        <p className="answer">
          The useState() is a Hook that allows us to have state variables in
          functional components. We pass the initial state to this function and
          it returns a variable with the current state value and another
          function to update this value.
        </p>
        <p className="answer">const [count, setCounter] = useState(0);</p>
        <p className="answer">
          useState(0) returns a tuple where the first parameter count is the
          current state of the counter and setCounter is the method that will
          allow us to update the counter's state. We can use the setCounter
          method to update the state of count.
        </p>
      </article>
    </div>
  );
};

export default Answer;
