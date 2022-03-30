import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { valueToPercent } from "@mui/base";
const Ap =()=> {
    const [addItem,setAddItem]=useState([]);
    const addNote=(note)=>
    {
        //alert('clicked');
        setAddItem((prevData)=>
        {
            return[...prevData,note];
        });
    };
    const onDelete=(id)=>{
        setAddItem((prevData)=>
        prevData.filter((currdata,index)=>{
           return index!==id;
        })
        );
    };
    return(
        <>
        <Header />
        <Footer/>
        <CreateNote
            passNote={addNote}
        />
    
        {addItem.map((val,index)=>{
            return<Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}/>
})}
        </>
    
    );

};
export default Ap;
