import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer/Footer";
function Terbaru() {
    const [getData, setData] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        console.log("fetching data");
        //letak dari kita pasang axios
        axios
            .get("https://api-mobilespecs.azharimm.site/v2/latest")
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
            <div className="row justify-content-center mt-4" >
                {
                    getData.map((item, idx) => (
                        <>
                            <div className="card d-flex justify-content-center col-md-2 col-sm-12 m-4 p-0 " style={{ width: '10rem;' }}>
                                <img src={item.image} class="card-img-top" height={"200px"} alt="..." />
                                <div class="card-body text-center" >
                                    <p key={idx}>{item.phone_name}</p>
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
export default Terbaru