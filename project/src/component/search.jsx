import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
function Search() {
    const params = useParams();
    console.log("params=", params)

    const [getData, setData] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        console.log(" http://api-mobilespecs.azharimm.site/v2/search?query=" + params.id);
        //letak dari kita pasang axios
        axios
            .get("http://api-mobilespecs.azharimm.site/v2/search?query=" + params.id)
            .then((res) => {
                console.log(res.data.data)
                setData(res.data.data.phones[0]);
            })
            .catch((err) => {
                console.log(err);
                console.log("Data tidak ketemu");
                setError("Data tidak ketemu");
            });
    }, []);
    return (
        <>
            < Navbar />
            <div className="row justify-content-center mt-4 ">

                <>
                    <div className="card  justify-content-center col-md-3 col-sm-12 m-4 p-0 " >
                        <img src={getData?.image} class="card-img-top mb-2" height={"300px"} alt="..." />
                        <div className="card-body text-center">
                            <p ><b> {getData.phone_name}</b></p>
                            <p ><b> {getData.brand}</b></p>
                            <Link to={`/spesification/${getData.slug}`} ><button className="button">Detail</button> </Link>
                        </div>
                    </div>

                </>



            </div>
        </>
    )
}

export default Search