async function fetchTodos(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await resp.json();
    console.log(data);
}
fetchTodos();