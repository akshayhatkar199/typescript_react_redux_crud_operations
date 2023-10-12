import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../Store/userReducer";
// import { RootState } from "../../Store/RootState";
import { RootState } from "../../Store/userReducer";

interface User {
    id: number;
    name: string;
    email: string;
}

const Home = () => {
    const [oading, setLoading] = useState(false);
    const userData = useSelector((state: RootState) => state.userData?.value) as User[]; // Access the 'users' slice
    const dispatch = useDispatch();
    console.log("userData=>", userData)

    const handleDelete = (id: number) => {
        dispatch(deleteUser({ id }));
    };

    return (
        <div className="container">
            <h2> Typescript Redux crud Data</h2>
            <Link to="/Create">
                <button className="btn btn-success my-3">Create +</button>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>CustomerName</th>
                        <th>ProductName</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData && userData.length > 0 && userData.map((user, index) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`}>
                                    <button className="btn-primary">Edit</button>
                                </Link>
                                <button
                                    className="btn-danger ms-2"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
