import React, { Component } from 'react'

class Task extends Component {

  render(){
    return (
      <li style={{ textDecoration: this.props.completed ? 'line-through' : 'none'}}>
        <input onChange={() => this.props.toggleTask(this.props.id)} type='checkbox' /> {this.props.content}
      </li>
    )
  }

}


export class List extends Component {

  state =  {
    tasks: [ {  content: 'Meet with Vidhi', completed: false } ]
  }

  toggleTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map( task => {
        if(task.id == id){
          return { ...task, completed: !task.completed}
        } else {
          return task
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Tasks:</h1>
        <ul>
          {this.state.tasks.map( task => (
            <Task {...task} toggleTask={this.toggleTask} /> 
            // Same thing: <Task name={task.name} id={task.id} completed={task.completed} />
          ))}
        </ul>
      </div>
    );

  }
}