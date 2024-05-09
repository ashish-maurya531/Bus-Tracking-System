import propTypes from 'prop-types';

function List(props){
    // const fruits=[{id:1,name:"apple",calories:120}, 
    //             {id:2,name:"banana",calories:20}, 
    //             {id:3,name:"orange",calories:10}, 
    //             {id:4,name:"pineapple",calories:82}, 
    //             {id:5,name:"coconut",calories:90}]
    // fruits.sort((a,b)=>a.name.localeCompare(b.name));
    // fruits.sort((a,b)=> a.calories-b.calories);


   const itemlist=props.items;


    const lowCalFruit=(itemlist.filter(f =>f.calories>50)).map(f=><li key={f.id}>{f.name}:{f.calories}</li>);
    const listItems=itemlist.map(f =><li key={f.id}>{f.name}&nbsp;:{f.calories}</li>)

    return(
        <>
        <h1>list of {props.catogery}</h1>
        <ol>{listItems}</ol>
        <h1>low calories</h1>
        <ol>{lowCalFruit}</ol>
        </>
    )



}  

// List.defaultProps = {
//     items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
//                                             name:PropTypes.string,
//                                         calories:PropTypes.number,})),
//     category:PropTypes.string,
// }
List.defaultProps = {
    items: [],
    catogery:"catogery",
}

export default List;