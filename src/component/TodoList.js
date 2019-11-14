import React, { Component } from 'react';
import TodoItem from './TodoItem'
export class TodoList extends Component {
    render() {
        const {items,handleclear,handledelete,handleEdit} = this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-center text-capitalize">TodoList</h3>
                {items.map(item =>
                    <TodoItem title={item.title} id={item.id} remove={()=>handledelete(item.id)} edit={()=>handleEdit(item.id)}/>
                )}
                <button className="btn btn-danger btn-block text-capitalize my-5" onClick={handleclear} type="button"> clear list </button>
            </ul>
               
        );
    }
}

export default TodoList;
