import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';

import Button from '@mui/material/Button';
const CreateNote =(props) =>{
    const [expand,setExpand]=useState(false);
    const [note,setNote]=useState({
    title: "",
    content: "",
});

const InputEvent =(event) =>
{
    const {name,value}=event.target;

    setNote((prevData) =>{
        return {
            ...prevData,
            [name]:value,
        }
    })
}
const addEvent = ()=>
{
props.passNote(note);
setNote({
    title: "",
    content: "",

})
};
const expandIt =()=>{
    setExpand(true);
};
const backNormal=()=>{
    setExpand(false);
}
    return (
        <>
        <div className="main_note"  onDoubleClick={backNormal}>
            <form> 
               { expand?
                <input type="text"
                 value={note.title} 
                 name="title"
                 onChange={InputEvent} 
                 placeholder="Title" 
                 autoComplete="off"/>:null}
                <textarea rows=" " column ="" 
                name="content"
                value= {note.content}
                onChange={InputEvent} 
                onClick={expandIt}
               
                placeholder=" Write a note"></textarea> 
                {expand?
  <Button onClick ={addEvent}> 
      <AddIcon className="plus_sign"/>
  </Button>:null}
   
            </form>
            </div>
        
        </>
    );
};
export default CreateNote;
