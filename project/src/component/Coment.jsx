import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import style from "./Coment.module.css";
import Gambar from "../hapus.jpg"

const GetData = gql`
query MyQuery {
  Comment {
    id
    name
    text
  }
}
`;
const Insert = gql`
mutation Insert($object: Comment_insert_input = {}) {
  insert_Comment_one(object: $object) {
    name
    text
  }
}
`;
const Delete = gql`
mutation delete ($id: Int!) {
    delete_Comment_by_pk(id: $id) {
        id
    }
}
`
    ;

function Coment() {
    const { data: dataQuery, loading, error } = useQuery(GetData);
    const [insertData, { loading: loadingInsert }] = useMutation(Insert, { refetchQueries: [GetData], });
    const [deleteData, { loading: loadingDelete }] = useMutation(Delete, { refetchQueries: [GetData], });
    const [data, setdata] = useState({
        name: "",
        text: ""
    });
    const [id, setId] = useState(1);
    console.log("data", { dataQuery, loading })
    // useEffect(() => {
    //     data({
    //         variables: {
    //             id: id,
    //         }
    //     });
    // }, [])

    if (loading) {
        return (
            <h3>Loading</h3>
        )
    }
    else if (error) {
        console.log(error)
        return null
    }

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })

    };
    console.log(data)

    const handleSubmit = () => {
        setdata({
            name: "",
            text: ""
        })
        insertData({
            variables: {
                object: {
                    ...data
                }
            }
        });
    };

    const HandleDelete = (idx) => {
        deleteData({ variables: { id: idx } });
        console.log("id", idx)
    }

    return (
        <>
            <div>
                <div className={style.input} >
                    <div className={style.box}>
                        <input required type="text" className="input-text" value={data.name} placeholder="username" name="name" onChange={handleChange} />
                        <br />
                        <textarea required rows="5" cols="40" className="input-text" value={data.text} placeholder="Coment" name="text" onChange={handleChange} />
                        <br />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                <div className={style.coment}>
                    <div className={style.border}>
                        {
                            dataQuery?.Comment?.map((item) => (
                                <>
                                    <div className={style.user}>
                                        <h5 key={item.id}>{item.name}</h5>
                                        <div className={style.header}>
                                            <div>
                                                <p>{item.text}</p>
                                            </div>

                                            <a className="removeBorder" onClick={() => { HandleDelete(item.id) }}> <img src={Gambar} alt="" /> </a >

                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>

    )
}
export default Coment