import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
function Home() {
    const [getData, setData] = useState([]);
    const [error, setError] = useState("");
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
    return (
        <>
            <Navbar />
            <div className="row">
                {
                    getData.map((item, idx) => (
                        <>
                            <div className="card d-flex justify-content-center col-md-3 col-sm-12 mb-4 " style={{ width: '18rem;' }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <p key={idx}>{item.brand_name}</p>
                                    <Link to={`/detail/${item.brand_slug}`}><a href="#" class="btn btn-primary">Detail</a></Link>
                                </div>

                            </div>

                        </>

                    ))
                }
                {/* class="card" style="width: 18rem; */}
                {/* //     <img src="..." class="card-img-top" alt="..." />
                    //     <div class="card-body">
                    //         <h5 class="card-title" >{item.brand_name}</h5>
                    //         <a href="#" class="btn btn-primary">Go somewhere</a>
                    //     </div> */}
                {/* <div className="App">
                <h3>{getData.brand_name}</h3>
                <h3>{error}</h3>
            </div> */}
            </div>
        </>
    );
}

export default Home