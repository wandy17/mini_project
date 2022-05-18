import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Gambar from "../populer.jpg"
import Footer from "./footer/Footer";
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
            <div className="row justify-content-center mt-4 " >
                {
                    getData.map((item, idx) => (
                        <>
                            <div className="card d-flex justify-content-center col-md-3 col-sm-12 m-4 " style={{ width: '18rem;' }}>
                                <img src={Gambar} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <p key={idx}>{item.phone_name}</p>
                                    <p>{item.hits}</p>
                                    <Link to={`/spesification/${item.slug}`} ><button className="button">Detail</button> </Link>

                                </div>

                            </div>

                        </>

                    ))
                }
            </div>
            <Footer />

        </>
    );
}
export default Populer