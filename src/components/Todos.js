import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

 class Todos extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="todos collection">
                    {console.log(this.props.todos)}
                    {   
                        //this.props.todos.length ? 
                        (this.props.todos.map((todo, key) => {
                            return (
                                <div  className="collection-item">
                                    <span className="collection-item" >{todo.body}</span>
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
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(Todos)