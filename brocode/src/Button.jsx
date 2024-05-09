// const handleClick=(name)=>{
//     if (count>=3){
//         console.log(`${name} stop clicking me`);
//     }
//     else{
//         count++;
//         console.log(`${name} you clicked me ${count} times`);
        
//     }

function Button(){
    const handleClick=(e)=>e.target.textContent="leave me";

    const imageUrl=`./src/assets/profile.png`
    
    const handleClick2=(e)=>e.target.style.display="none";
    
   
   
        
    

    return(
        <>
        <button onDoubleClick={(e)=>handleClick(e)}>click me</button>
        <img src={imageUrl } onClick={(e)=>handleClick2(e)}/>
        </>
    )
    
}

export default Button;