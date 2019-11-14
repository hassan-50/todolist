import React, { Component } from 'react';

export class TodoItem extends Component {
    render() {
        const {title,remove,edit} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h5>{title}</h5>
                <div className="icons">
                    <span className="penicon text-success bg-white mx-2 " onClick={edit}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="penicon text-danger bg-white mx-2" onClick={remove}>
                        <i className="fas fa-trash"></i>
                        </span>
                </div>

            </li>
        );
    }
}

export default TodoItem;
