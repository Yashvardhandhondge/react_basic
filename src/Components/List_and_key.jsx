function ItemList({items}){
    return(
        <ul>
            {items.map(item=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}
export function ItemList1(){
    const items =[
        {id:1,name:'Item1'},
        {id:2,name:'Item2'},
        {id:3,name:'Item3'}
    ]
    return <>
    <div className="px-5 border border-green-500 space-x-4 m-5 rounded-lg text-yellow-300">
    <ItemList items={items}/>
      </div>
      </>
}