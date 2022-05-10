import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
function Populer() {
    const [getData, setData] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        console.log("fetching data");
        //letak dari kita pasang axios
        axios
            .get("https://api-mobilespecs.azharimm.site/v2/top-by-interest")
            .then((res) => {
                console.log(res.data.data.phones)
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
            {
                getData.map((item, idx) => (
                    <>
                        <div className="card d-flex justify-content-center col-md-3 col-sm-12 mb-4 " style={{ width: '18rem;' }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <p key={idx}>{item.phone_name}</p>
                                <p>{item.hits}</p>
                                <a href="#" class="btn btn-primary">Detail</a>

                            </div>

                        </div>

                    </>

                ))
            }

        </>
    );
}
export default Populer