import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addTodo } from '../actions/addActions';




class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
    }

    handelChange = (event) => {
        this.setState({
            body: event.target.value
        });
    }

    handelSubmit = (event) => {
        event.preventDefault();
        
        const todo = {
            body: this.state.body
        };

        this.props.addTodo(todo);
    }


    render() {
        return(
            <div className="container">
                <form onSubmit={this.handelSubmit}>
                    <label> Add new todo:</label>
                    <input type="text" name="todo" onChange={this.handelChange}  />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(null, { addTodo })(AddTodo)



