// import { useState } from "react";

// function Todo() {
//   const [state, setState] = useState({
//     user: "",
//     pass: "",
//     arr: [],
//   });

//   function change(e) {
//     const { name, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }

//   function del(index) {
//     let delArr = state.arr.filter((_, ind) => index !== ind);

//     setState((prevState) => ({
//       ...prevState,
//       arr: delArr,
//     }));
//   }

//   function edi(index) {
//     let prUser = prompt("Change username:", state.arr[index].user);
//     let prPass = prompt("Change password:", state.arr[index].pass);

//     if (prUser !== null && prPass !== null) {
//       let newArr = [...state.arr];
//       newArr[index] = { user: prUser, pass: prPass };

//       setState((prevState) => ({
//         ...prevState,
//         arr: newArr,
//       }));
//     }
//   }

//   function addData(e) {
//     e.preventDefault();

//     let obj = { user: state.user, pass: state.pass };
//     setState((prevState) => ({
//       ...prevState,
//       arr: [...prevState.arr, obj],
//       user: "", // Clear input fields
//       pass: "", // Clear input fields
//     }));
//   }

//   return (
//     <>
//       <h1>TodoList by UseState</h1>

//       <form onSubmit={addData}>
//         <input
//           type="text"
//           name="user"
//           value={state.user}
//           onChange={change}
//           placeholder="username"
//         />
//         <input
//           type="text"
//           name="pass"
//           value={state.pass}
//           onChange={change}
//           placeholder="password"
//         />
//         <input type="submit" value="submit" />
//       </form>

//       <ul>
//         {state.arr.map((item, index) => (
//           <div key={index}>
//             <li>user: {item.user}</li>
//             <li>
//               pass: {item.pass}
//               <button onClick={() => del(index)}>Delete</button>
//               <button onClick={() => edi(index)}>Edit</button>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Todo;

import { useState } from "react";

function Todo() {
  const [state, setState] = useState({
    user: "",
    pass: "",
    arr: [],
  });

  function change(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function del(index) {
    let delArr = state.arr.filter((_, ind) => index !== ind);
    setState((prevState) => ({
      ...prevState,
      arr: delArr,
    }));
  }

  function edi(index) {
    let prUser = prompt("Change username:", state.arr[index].user);
    let prPass = prompt("Change password:", state.arr[index].pass);

    if (prUser !== null && prPass !== null) {
      let newArr = [...state.arr];
      newArr[index] = { user: prUser, pass: prPass };

      setState((prevState) => ({
        ...prevState,
        arr: newArr,
      }));
    }
  }

  function addData(e) {
    e.preventDefault();
    if (!state.user.trim() || !state.pass.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    let obj = { user: state.user, pass: state.pass };
    setState((prevState) => ({
      ...prevState,
      arr: [...prevState.arr, obj],
      user: "",
      pass: "",
    }));
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <h1>Todo List</h1>

      {/* Form Section */}
      <form
        onSubmit={addData}
        className="bg-white p-6 shadow-md rounded-lg w-96"
      >
        <input
          type="text"
          name="user"
          value={state.user}
          onChange={change}
          placeholder="Username"
        />
        <input
          type="text"
          name="pass"
          value={state.pass}
          onChange={change}
          placeholder="Password"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Todo List Section */}
      <ul className="mt-6 w-full max-w-lg">
        {state.arr.map((item, index) => (
          <li key={index}>
            <div>
              <p>{item.user}</p>
              <p>{item.pass}</p>
            </div>
            <div>
              <button onClick={() => edi(index)}>Edit</button>
              <button onClick={() => del(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
