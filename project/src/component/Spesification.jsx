import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
function Spesification() {
    const params = useParams();
    console.log("params=", params)

    const [getData, setData] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        console.log("https://api-mobilespecs.azharimm.site/v2/" + params.id);
        //letak dari kita pasang axios
        axios
            .get("https://api-mobilespecs.azharimm.site/v2/" + params.id)
            .then((res) => {
                console.log(res.data)
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                console.log("Data tidak ketemu");
                setError("Data tidak ketemu");
            });
    }, []);
    return (
        <>
            <Navbar />
            <div className="row">

                <div className="card d-flex justify-content-center col-md-3 col-sm-6 mb-4 ">
                    <img src={getData.thumbnail} className="card-img-top" style={{ height: '20rem' }} alt="..." />
                    <div class="card-body text-center">
                        <p>{getData.release_date}</p>
                        <p>{getData.dimension}</p>
                        <p>{getData.os}</p>
                        <p>{getData.storage}</p>
                        {/* {
                            getData.specifications.map((item, idx) => (
                                <>
                                    <p key={idx}>{item.title}</p>

                                </>
                            ))


                        } */}



                    </div>
                </div>





            </div>

        </>
    )
}
export default Spesification