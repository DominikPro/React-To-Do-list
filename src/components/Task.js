import React from "react";

const Task = props => {
  const styleImportant = {
    color: "red"
  };
  const { text, date, id, active, important, finischDate } = props.task;

  if (active) {
    return (
      <div>
        <p className="task">
          <button onClick={() => props.change(id)}>Zrobione</button>
          <strong style={important ? styleImportant : null}>{text}</strong> - do{" "}
          <span>{date}</span>
          <button onClick={() => props.delet(id)}>Usuń</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finischDate).toLocaleString();
    return (
      <div>
        <p className="task">
          <strong>{text}</strong>
          <em>(Zrobić do: {date})</em>
          <br />
          -potwierdzenie wykonania <span>{finish}</span>
          <button onClick={() => props.delet(id)}>Usuń</button>
        </p>
      </div>
    );
  }
};

export default Task;
