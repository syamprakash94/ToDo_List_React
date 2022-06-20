import './app.css'
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  const deleteTask=(index) =>{
    const ask = window.confirm("dlete");
    if(ask) {
      const test = [...toDos];
      // const cut = test.slice(index,1)
      test.splice(index,1)
      setToDos(test);
    }else{
      
    }
  }


  const eraser = () => {
    setToDo("");
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Let's sort your work! 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} 
        onChange={(e) => setToDo(e.target.value)} 
        type="text" 
        placeholder="🖊️ Add item..." />
        
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
     <i class="fa-solid fa-eraser" onClick={eraser}></i>
      </div>
      <div className="todos">
        {toDos.map((obj,index) => {

          return (<div className="todo">
            <div className="left">
              <input onChange={(e) => {
                console.log(e.target.value);
                console.log(obj);
                setToDos(toDos.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2
                }))

              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i  className="fas fa-times" onClick={()=> deleteTask(index)}></i>


              
              
              
            </div>
          </div>)
        })}




<div className="input2">

        {toDos.map((obj) => {
          if (obj.status) {
            return (
            <h1>{obj.text}</h1>
            )
          }
          return null
        })}
 </div>
 



      </div>
    </div>
  );
}

export default App;
