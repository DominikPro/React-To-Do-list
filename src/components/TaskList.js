import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  done.sort((a, b) => b.finischDate - a.finischDate);

  if (active.lenght > 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (b > a) return 1;
      return 0;
    });
  }

  const activeTasks = active.map(task => (
    <Task key={task.id} task={task} delet={props.delet} change={props.change} />
  ));
  const doneTasks = done.map(task => (
    <Task key={task.id} task={task} delet={props.delet} change={props.change} />
  ));

  return (
    <>
      <div className="active">
        <h1>
          Zadania do zrobienia <em>({activeTasks.length})</em>
        </h1>
        {activeTasks.length > 0 ? activeTasks : <p>Nie ma żadnych zadań!</p>}
      </div>
      <hr />
      <div className="done">
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        <span>
          {done.length >= 3 && <p> Ostatnie 3 zrealizowane zadania</p>}
        </span>
        {doneTasks.slice(0, 3)}
      </div>
    </>
  );
};

export default TaskList;
