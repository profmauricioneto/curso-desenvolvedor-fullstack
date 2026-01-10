import React from "react";
import User from "./User";

const UserList = (props) => {

    return (
        <>
            <h1 className="text-2xl bold text-black-500 text-center m-4">User List</h1>
            <div className="flex gap-2 justify-center">
                {
                    props.users.map((user, index) => (
                        < User key={index} name={user.name} age={user.age} />
                    ))
                }
            </div>
        </>
    )
}

export default UserList;