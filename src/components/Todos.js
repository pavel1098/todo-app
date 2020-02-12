import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { deleteTodo } from '../actions/deleteActions';


 class Todos extends React.Component {

    constructor(props){
        super(props);
      }
      
    deleteTodo = (e, id) => {
        e.preventDefault();
        this.props.deleteTodo(id);
       // console.log(this.props.todoList);
       // console.log(store.getState());
    }

    render() {
        return (
            <div className="container">
                <div className="todos collection">
                    {   
                        //this.props.todos.length ? 
                        (this.props.todoList.map((todo, key) => {
                            return (
                                <div  className="collection-item">
                                    <span className="collection-item">{todo.body}</span>
                                    <button onClick={(e) => {this.deleteTodo(e, todo.id)}}>x</button> 
                                </div>
                                
                            )
                        }))
                       // :
                        //<p className="center black-text">You have no todo's in your list</p>
                    }
                </div>
            </div>
        )
    }
   
}


const mapStateToProps = (state) => {
    return {
        todoList: state.todos
    }
}

Todos.propTypes = {
    deleteTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { deleteTodo })(Todos)