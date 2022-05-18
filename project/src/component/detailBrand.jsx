import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer/Footer";
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
            <div className="row justify-content-center mt-4 ">            {
                getData.map((item, idx) => (
                    <>
                        <div className="card d-flex justify-content-center col-md-2 col-sm-12 m-4 p-0 ">
                            <img src={item.image} class="card-img-top mb-2" height={"200px"} alt="..." />
                            <div className="card-body text-center">
                                <p key={idx}><b> {item.phone_name}</b></p>
                                <Link to={`/spesification/${item.slug}`} ><button className="button">Detail</button> </Link>
                            </div>
                        </div>

                    </>

                ))
            }
            </div>
            <Footer />

        </>
    )
}
export default Detail