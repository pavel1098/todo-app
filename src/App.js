import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component{
  /*deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    });
  }*/


  render() {
    return (
      <Provider store={store}>
        <div>
          <h1 className="center blue-text">Todo's</h1>
            <Todos />
            <AddTodo />
        </div>
      </Provider>
    );
  }
}


export default App




