import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

const ToDoLists = (props) => {
    return (
        <>
            <div className='todo_style'>
                <Button fontSize='small' className='btn_2'
                    onClick={
                        () => {
                            props.onSelect(props.id)
                        }
                    }><DeleteIcon fontSize='small' /></Button>
                <li> {props.text} </li>
            </div>
        </>
    );
}

export default ToDoLists;