import React,{Component} from 'react';
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
class  App extends Component {
  state = {
    items:[],
    item:"",
    id:uuid(),
    isEdit:false
  }
  handlesubmit = (e) => {
    e.preventDefault();
    if(this.state.item === "")
    return;
    const item = {
      id:this.state.id,
      title:this.state.item
    }

    const list = [...this.state.items,item];
    this.setState({
      items:list,
      item:"",
      id:uuid(),
      isEdit:false
    })

  }
  onchange = e => {
    this.setState({item:e.target.value})
  }
  handleclear = () =>{
    this.setState({
      items:[]
    })

  }
  handledelete = (id) =>{
    const list = this.state.items
    const filterdlist=list.filter(item => item.id != id)
    this.setState({items:filterdlist})
  }

  handleEdit = (id) =>{
    const item = this.state.items.find(item =>item.id ===id )
    const list = this.state.items
    const filterdlist=list.filter(item => item.id != id)
    this.setState({items:filterdlist,
    item:item.title,
    isEdit:true,
    id:id
    })
  }
  render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto text-capitalize">
          <h3 className="text-center">todo input</h3>      
            <TodoInput handlesubmit={this.handlesubmit} item={this.state.item} onchange={this.onchange} isEdit={this.state.isEdit}/>
            <TodoList items={this.state.items} handleclear={this.handleclear} handledelete={this.handledelete} handleEdit={this.handleEdit} /> 
            
        </div>
      </div>
    </div>
  )
  }
}

export default App;
