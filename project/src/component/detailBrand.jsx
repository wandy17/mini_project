import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
function Detail() {
    const params = useParams();
    console.log("params=", params)

    const [getData, setData] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        console.log("https://api-mobilespecs.azharimm.site/v2/brands/" + params.id);
        //letak dari kita pasang axios
        axios
            .get("https://api-mobilespecs.azharimm.site/v2/brands/" + params.id)
            .then((res) => {
                console.log(res.data.data)
                setData(res.data.data.phones);
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
            <div className="row justify-content-center ">            {
                getData.map((item, idx) => (
                    <>
                        <div className="card d-flex justify-content-center col-md-3 col-sm-12 m-4 ">
                            <img src={item.image} class="card-img-top" style={{ height: '25rem' }} alt="..." />
                            <div class="card-body text-center">
                                <p key={idx}>{item.phone_name}</p>
                                <Link to={`/spesi/${item.slug}`} > <a href="#" class="btn btn-primary">Detail</a></Link>
                            </div>
                        </div>

                    </>

                ))
            }
            </div>

        </>
    )
}
export default Detail