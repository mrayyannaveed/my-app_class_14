export default async function Todo(props:any) {
    // console.log("props", props)
    const url = await 
    fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.todoId}`);
    const res = await url.json();
    // console.log( "single todo",res)
    return(
        <div className="flex justify-center items-center h-[60vh]">
            <div className="my-2 rounded-2xl text-xl text-white mx-2 bg-gradient-to-br from-pink-600 to-yellow-500 p-20">
            <h1 className="text-xl mt-4">Todo Details</h1>
            <p>{res.id}</p>
            <p>{res.title}</p>
            </div>
        </div>
    )
}