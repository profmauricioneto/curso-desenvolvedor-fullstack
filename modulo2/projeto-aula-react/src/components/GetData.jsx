import React, { useEffect, useState } from "react";
import Post from "./Post";

const GetData = () => {

    const [dataPost, setDataPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => data.json())
            .then((data) => {
                setDataPost(data)
                setLoading(false)
            })

    }, [])
    return (
        <div>
            {loading ? <p>Carregando as informações!</p> :
                <div>
                    {dataPost.map((d, index) => (
                        <Post key={index} title={d.title} body={d.body} />
                    ))}
                </div>}
        </div>
    )
}

export default GetData