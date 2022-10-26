import React from 'react';
import {useState} from 'react';
import './index.css'

const Todo = () => {
    const [inputEle, setInputEle] = useState('');
    const [itemList, setItemList] = useState([]);

    function addItem() {
        setInputEle("");
        setItemList([...itemList, inputEle]);
        console.log(itemList);
    }

    function deleteItem(ind){
       const updatedItems= itemList.filter((ele,idx) => {
            return idx !== ind
        });

        setItemList(updatedItems);
    }
    function removeAll(){
        setItemList([]);
    }
  return (
    <>
      <div className='container'>
        <div className='main-app'>
        <div className='heading'>
            <h2>Todo List</h2>
        </div>
        <div className='inputfield'>
            <input placeholder='Add your task' value={inputEle} onChange={(e)=> setInputEle(e.target.value)}/>
            <button className='btn' onClick={addItem}>Add</button>
        </div>
        <div className='itemList'>
            {
                itemList.map((ele, ind)=>{
                    return (
                        <div className="eachItem" key={ind}>
                            <h3>{ele}</h3>
                            <button className='eleDelBtn' onClick={()=>deleteItem(ind)}>X</button>
                        </div>
                    )
                })
            }
            
        </div>
        <div className='delete-all-btn'>
            <button className='deleteAll' onClick={removeAll}>Delete All</button>

        </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
