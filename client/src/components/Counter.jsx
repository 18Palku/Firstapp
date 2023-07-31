import { useState } from "react";
import { makeStyles} from '@mui/styles';

const useStyles=makeStyles(
{
name:
{
    border: 'black',
    background: 'pink'
}
}

    

    
)





const Counter=()=>{


    let classes=useStyles();
    //let a=0; 
   // const[a,setA]=useState(-10);
  //  const[b,setB]=useState(20);
  //  const[c,setC]=useState(100);
       let[name, setName]=useState("Palak");
       let[marks, setMarks]=useState(100);

    const setChange=()=>{
        if(name==="Palak")
        {
            
        
        setName(name="Avdhesh");
        setMarks(marks=20);
        }
        else{
            setName(name="Palak");
            setMarks(marks=100);
        }

    }
  
  
       // let name="Palak";
       // let marks="100";
        

  

    

   // const decrement=()=>{
    //     setA(a-1);
    //     setB(b-(b*2));
    //     setC(c-3);
    //  }
    //  const increment=()=>{setA(a+5);
    //     setB(b+(b*2));
      //  setC(c+3);
//


    return (
        <div     className={classes.name} >
               
            <button onClick={setChange}>  Press me </button>
            
            <h1> {name} has scored {marks} marks!!!! </h1>
            
            {/* <button onClick={decrement}>-</button>
            {a+" "+b+" "+c}
            <button onClick={increment}>+</button> */}
        </div>
    )
}
export default Counter;