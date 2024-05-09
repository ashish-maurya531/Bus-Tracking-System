import React,{useState} from 'react';




function MyComponent() {
    const [name,setName]=useState("guest");
    const [age,setAge]=useState(0);

    const updateName=()=>{
        setName("abc");
    }
  
    const updateName2=()=>{
        setAge(age+1);
      
    }
    return(
        <>
        <div>
            <p>Name :{name}</p>
            <p>age :{age}</p>
            <button onClick={updateName}>set name</button>
            <button onClick={updateName2}>set age</button>
        </div>
        </>
    )
}

export default MyComponent;