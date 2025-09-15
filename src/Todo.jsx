// export default function ToDo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// Conditional Rendering 

// export default function ToDo({task, isDone, time = 0}) {
//     if(isDone === true) {
//         return <li>Done: {task}, Duration: {time}</li>
//     }

//     else {
//         return <li>Pending: {task}</li>
//     }
// }


// Conditional Rendering Ternary

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone ? <li>Done: {task}, Duration: {time}</li> : <li>Not Done: {task}, Duration: {time}</li>
// }

// Conditional Rendering && Operator

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone && <li>Done Tasks: {task} Time: {time}</li>
// }


// Conditional Rendering || (OR) Operator

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone || <li>Not Done Tasks: {task} Time: {time}</li>
// }


// Conditional Rendering: Using Variable

export default function ToDo({task, isDone, time = 0}) {
    let listItem ;
    if(isDone === true) {
        listItem = <li>Done: {task}, Time: {time}</li>
    }

    else {
        listItem = <li>Pending: {task}</li>
    }
    return listItem;
}