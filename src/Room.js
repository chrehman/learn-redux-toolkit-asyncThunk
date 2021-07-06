import React,{useState} from 'react';
import './Room.css'

function Room() {
    
    // const state=useState(true);
    // const isList=state[0];
    // const setList=state[1];
    ///same Equal to Beloww code //
   // let [isLit,setLit] = useState(true);//destructring
    
    //let [age,setAge]=useState(25);
    let [isLight,setLight]=useState(true);
    let[temp,setTemp]=useState(70);
    // function updateLit(){
    //     console.log("Button Cick");
    //     setLit(!isLit);
    //     setAge(++age);
    //     // isLit=!isLit;
    //     // age=65; dont update age in div
    //     // console.log(isLit); 
    // }
////
    
    return(
         <div className={'room '+(isLight?"on":"off")}>
        {/* // same as below
         */}
       {/* // <div className={'room ${isLit? "lit": "dark"}'}>
            This Room is  {isLit? "lit":"dark"} */}
            Light is ={(isLight?"ON":"OFF")}
            <br/>
            The Temperature of Room is {temp}C. 
            <br/>
           {/* ///Using arrow Function//// */}
            <button onClick={()=>
                            setLight(true)                    
                                }>
                On Light 
            </button>
            
            <button onClick={()=> setLight(false)}>OFF Light </button>
            <br/>
            <button onClick={()=>setTemp(++temp)}>Increase temp</button>                    
            <button onClick={()=>setTemp(--temp)}>Decrease temp</button>                    
        </div>
    );

}

export default Room;
