import Button from '@mui/material/Button';



import { useState } from "react";

const Condition=()=>{
    let[marks,SetMarks]=useState(22);
    let arr=["om nmah shivay","radhe radhe","Hare krishna","jai bajarang bali"," jai shri ram"];



return(
    <div>
        {/* {(marks>33)? "Pass": "Fail"} */}
        {arr.map((item) =>{

            return(
                <div>
                    <h1> <Button variant="contained">{item}</Button>
</h1>


                    </div>
            )

        })}
    </div>
)




}

export default Condition;
