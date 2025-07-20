
function List(){

    const fruits = [{id: 1, name: "apple", price: "$ 1"},
                    {id: 2, name: "orange", price: "$ 4"},
                    {id: 3, name: "banana", price: "$ 2"}];

    fruits.sort();

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.price}</b></li>);



    return(<ol>{listItems}</ol>);
}

export default List