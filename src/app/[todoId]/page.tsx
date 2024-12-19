export default async function Todo(props:{params: {todoId: string}}) {
    // console.log("props", props)
    const url = await 
    fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.todoId}`);
    const res = await url.json();
    // console.log( "single todo",res)
    return(
        <div>
            <h1 className="text-xl mt-4">Todo Details</h1>
            <p>{res.id}</p>
            <p>{res.title}</p>
        </div>
    )
}