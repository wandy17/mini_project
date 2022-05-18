import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import gambar from "../gambar.jpg"
import style from "./Home.module.css"
import Svg from "./svg";
import "./Home.css"
import Footer from "./footer/Footer";

function Home() {
    const [getData, setData] = useState([]);
    const [error, setError] = useState("");
    const [search, setSearch] = useState('');
    useEffect(() => {
        console.log("fetching data");
        //letak dari kita pasang axios
        axios
            .get("https://api-mobilespecs.azharimm.site/v2/brands")
            .then((res) => {
                console.log(res.data.data)
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                console.log("Data tidak ketemu");
                setError("Data tidak ketemu");
            });
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log(search)
    return (
        <>
            <Navbar />
            <div className={style.header}>
                <h1> GSMARENA SMARTPHONE</h1>
                <p>Temukan Smartphone Terbaik Anda</p>

            </div>
            <Svg />

            {/* <input type="text" className="input-text" placeholder="username" name="name" onChange={handleChange} />

            <Link to={`/cari/${search}`} ><button >Detail</button> </Link> */}
            <div className={style.container}>
                <div className={style.input} >
                    <div class="input-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange} />
                        <Link to={`/cari/${search}`} ><button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button> </Link>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">

                {
                    getData?.map((item, idx) => (
                        <>
                            <div className="card d-flex justify-content-center col-md-2 col-sm-12 m-4 p-0 " style={{ width: '18rem;' }}>
                                <img src={gambar} className="card-img-top rounded-3" alt="..." />
                                <div className="card-body text-center">
                                    <p key={idx}><b>{item.brand_name}</b></p>
                                    <Link to={`/detail/${item.brand_slug}`}><button className="button">Detail</button></Link>

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

export default Home