import React from 'react';
import TaskList from './TaskList';
import './App.css';



class App extends React.Component {
  constructor(){
      super();
      this.state={
        tasks:[],
        // showEdit: false,
        presentItems:{
          inputText:'',
          key:'',
        }
      }
  }
  handleChange = (e) =>{
   this.setState({
    presentItems:{
      inputText:e.target.value,
      key:Date.now(), 
    }
   })
  //  console.log('inputText',inputText);
  }

  handleAdd =(e)=>{
    e.preventDefault();
   
    // const{tasks,presentItems} = this.state;
    // const{inputText,key} = this.state.presentItems;
    const{tasks} =this.state;
     const newItem =  this.state.presentItems;
    console.log('newItem',newItem)
    if(newItem !==''){
     const items = [...tasks,newItem];
    //  tasks.push(presentItems)
    console.log('items',items)
     this.setState({
      tasks:items,
      presentItems:{
        inputText:'',
        key:'',
      }

     })
    }
  }
  handleDelete =(key)=>{
    console.log('deleted')
    const{tasks} = this.state;
    // const filteredItems= tasks.filter((item=>{item.key!==key}));
    const filteredItems= tasks.filter(task =>
      task.key!==key);
    console.log('filteredItems',filteredItems);
    this.setState({
      tasks:filteredItems
    });

  }

  // handleEdit =(inputText,key)=>{
  //   console.log('handle edit clicked');
  //   const{tasks} = this.state;
  //    tasks.map((item=>{
  //     if(item.key===key){
  //       console.log('item.key & key',item.key +"    "+key)
  //       item.inputText= inputText;
  //     }
  //   }))
  //   console.log('tasks',tasks);
  //   this.setState({
  //     tasks:tasks,
  //     // showEdit:false
  //   })
  // }
  // handleSave=(e,key)=>{
  //   e.preventDefault();
  //   const{showEdit}= this.state;
  //   if(this.state.tasks.item.key === key){
  //     this.setState({
  //       // inputText:inputText,
  //       showEdit:false
  
  //     })
  //   }
  //   // const{inputText}
  //   // const{inputText}=this.state.presentItems;
  //   console.log('save button clicked')
  
  // }

  // handleBooleanValue =()=>{
   
  //   const{showEdit}= this.state;
  //   this.setState({
  //     showEdit:true
  //   })
  //   console.log('showEdit boolean turned to true')
  // }

  handleSave=(getText,key)=>{
    console.log('saved your task');
    const{tasks} =this.state;

    tasks[key] = getText;

    

    this.setState({
      tasks:tasks
    })
  }

  render() {
    const{tasks,presentItems , }= this.state;
    const{inputText,key}= this.state.presentItems;
    console.log('tasks',tasks);
    // console.log('showEdit inside app',showEdit);
    return (
      <div className="App">
     <header>
     <form className="form-area">
          <input 
          placeholder="Please enter text here"
           className="input-field" 
           onChange={this.handleChange}
           value={inputText}
           />

          <button className="add-btn" onClick={this.handleAdd}>Add</button>



        {/* {
          tasks.map((Item)=>{
            <TaskList presentItems={presentItems}item={item}/>
          })
        } */}
        </form>

     
       {/* <p>{tasks.inputText}</p> 
        {showEdit?     <EditList
            handleEdit={this.handleEdit}
            tasks={tasks}
            showEdit={showEdit}/>:   <TaskList
            handleDelete={this.handleDelete}
             tasks={tasks}
             handleBooleanValue={this.handleBooleanValue}
             handleSave={this.handleSave}/>}
    */}

     
      {tasks.map((task,index)=>
            <TaskList 
            task={task} 
            key={index} 
            handleDelete={this.handleDelete} 
            handleSave={this.handleSave}
            />)}

             
     </header>
  

        
      </div>
    );
  }
}

export default App;
