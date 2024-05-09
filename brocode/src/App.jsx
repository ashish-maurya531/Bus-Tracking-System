import Student from './Student.jsx'
import Button from './Button.jsx'
import UserGreating from './UserGreeting.jsx'
import List from './List.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

function App(){
  const fruits=[{id:1,name:"apple",calories:120}, 
                {id:2,name:"banana",calories:20}, 
                {id:3,name:"orange",calories:10}, 
                {id:4,name:"pineapple",calories:82}, 
                {id:5,name:"coconut",calories:90}]
  return (
    <>



      <Counter/>
      <MyComponent/>


      {fruits.length>0 && <List items={fruits} catogery="fruits"/>}
      <Button/>
      



      
      <Student  name='ashish' age={10} isStudent={true}/>
      <Student  name='abc' age={60} isStudent={false}/>
      <Student  name='qwe' age={50} isStudent={true}/>
      <Student  name='hjg' age={60} isStudent={false}/>
      <Student name="larry"/>
      <Student/>
      <Button/>
      {/* <UserGreating isLoggedIn ={false} username="ashish"/>sf */}
      <UserGreating isLoggedIn ={true}/>
      <UserGreating isLoggedIn ={true} username="ashish"/>
      


    </>
  )
}
export default App;