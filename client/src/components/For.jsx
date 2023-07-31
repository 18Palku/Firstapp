import { useState } from "react";
import { makeStyles } from '@mui/styles';

    const useStyles = makeStyles({
    one: {
    backgroundColor: 'red'
    },
    palak: {
        backgroundColor: '#9dff00',
        height: '600px',
        width: '400p',
    }
});

const For=()=>{
    let[name, setName]=useState("");
    let classes = useStyles();

        let arr=["om nmah shivay","radhe radhe","Hare krishna","jai bajarang bali"," jai shri ram"];
        const change=(value)=>{
            setName(name = value);

        }


return(
    <div className={classes.palak}>
     {arr.map((item) => {
        return (
            <div>
              <button onClick={() => change(item)}> {item}</button>  <br>
                </br> 
                <h2> {name} jpa kro  .</h2>
            </div>
        )
     })}   
    </div>
)







}
export default For;