import { data } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

function Users() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            });
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {/* <p>Total Users: {Users.length}</p> */}
            {Users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))};
        </div>

    );
}


export default Users;