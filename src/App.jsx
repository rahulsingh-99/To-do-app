import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
const App = () => {

    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);
    const itemEvents = (event) => {
        setInputList(event.target.value)
    }

    const listOfItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList('');
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>To Do List</h1>
                    <br />
                    <input type="text" placeholder='Add a items'
                        value={inputList} onChange={itemEvents} />
                    <Button className='btn_1' onClick={listOfItem}><AddIcon /></Button>
                    <ol>
                        {items.map((itemVal, index) => {
                            return <ToDoLists
                                key={index}
                                id={index}
                                text={itemVal}
                                onSelect={deleteItems}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
};

export default App;