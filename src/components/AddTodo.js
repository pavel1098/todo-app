import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addTodo } from '../actions/addActions';


class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            id: this.id
        }
    }

    handelChange = (event) => {
        this.setState({
            body: event.target.value
        });
    }

    handelSubmit = (event) => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 101);
        const todo = {
            body: this.state.body,
            id: id
        };
        this.props.addTodo(todo);
        this.setState({
            body: ''
        });
        // console.log(store.getState());
    }


    render() {
        return(
            <div className="container">
                <form onSubmit={this.handelSubmit}>
                    <label> Add new todo:</label>
                    <input type="text" name="todo" autocomplete='off' onChange={this.handelChange} value={this.state.body} />
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



