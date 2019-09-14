import React, { Component } from "react";
import "./App.css";
import "./AddTask";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 8;
  state = {
    tasks: [
      {
        id: 0,
        text: "Zagrać w wiedźmina",
        date: "2019-12-15",
        important: true,
        active: true,
        finischDate: null
      },
      {
        id: 1,
        text: "Nakarmic kota ",
        date: "2019-11-15",
        important: false,
        active: true,
        finischDate: null
      },
      {
        id: 2,
        text: "Wymienić opny",
        date: "2019-10-15",
        important: true,
        active: true,
        finischDate: null
      },
      {
        id: 3,
        text: "Kupić kwiaty",
        date: "2019-12-15",
        important: false,
        active: false,
        finischDate: null
      },
      {
        id: 4,
        text: "Spotkanie z Pawłem",
        date: "2019-12-15",
        important: false,
        active: true,
        finischDate: null
      }
    ]
  };
  deleteTask = id => {
    console.log("delet - elementu o id " + id);
    const tasks1 = [...this.state.tasks];
    const index = tasks1.findIndex(task => task.id === id);
    tasks1.splice(index, 1);
    this.setState({
      tasks: tasks1
    });
  };

  addTask = (text, date, important) => {
    // console.log("Dodaany obiekt -nowy taks");
    const task = {
      id: this.counter,
      text: text,
      date,
      important,
      active: true,
      finischDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  changeTaskStatus = id => {
    let tasks1 = [...this.state.tasks];
    tasks1.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finischDate = new Date().getTime();
      }
    });
    this.setState({
      tasks: tasks1
    });
    console.log(tasks1);
  };

  render() {
    return (
      <div className="App">
        <h3>To Do APP</h3>
        <AddTask add={this.addTask}></AddTask>
        <hr />

        <TaskList
          tasks={this.state.tasks}
          delet={this.deleteTask}
          change={this.changeTaskStatus}
        ></TaskList>
      </div>
    );
  }
}

export default App;
