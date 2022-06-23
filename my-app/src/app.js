import React, { useEffect, useState } from "react";
import "./app.css";
import UseForm from "./CRUD/UseForm";

const App = () => {
  const [user, setuser] = useState(null);

  const URL = "https://rest-api-without-db.herokuapp.com/users";

  const getAllusers = () => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        setuser(data.users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getAllusers();
  }, []);

  const handleDelete = (id) => {
    fetch(URL + `/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) {
        throw Error("could not delete");
      }
      getAllusers();
    });
  };

  const addUser = (user) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.status === 201) {
        getAllusers();
      } else throw new Error("could not create new user ");
    });
  };

  return (
    <>
      <h1> user managment app</h1>
      <UseForm btntxt=" Add user" handeleSubmit={addUser} />
      {user &&
        user.map((users) => {
          const { id, username, email } = users;
          return (
            <article key={id} className="usercard">
              <h2> {username}</h2>
              <p> {email}</p>
              <button>Add</button>
              <button onClick={handleDelete(id)}>Delete</button>
            </article>
          );
        })}
    </>
  );
};

export default App;
