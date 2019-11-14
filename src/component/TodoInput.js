import React, { Component } from 'react';

export class TodoInput extends Component {
    render() {
        const {handlesubmit,item,onchange,isEdit} =this.props
        return (
            <div className="card card-body">
                    
                <form onSubmit={handlesubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book" />   
                        </div>

                    </div>
                    <input type="text" value={item} onChange={onchange} placeholder="add a todo item" className="text-capitalize form-control"/>
                    
                    
                    </div>      
                    <button type="submit" className={isEdit?"btn btn-success btn-block my-3 ":"btn btn-primary btn-block my-3 "}>{isEdit?"edit item ":"add item "} </button>  
                    </form >
            </div>
        );
    }
}

export default TodoInput;
