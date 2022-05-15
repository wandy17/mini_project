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
                console.log(res.data.data.specifications?.title)
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
                    {/* <img src={getData?.phone_images?[0]} className="card-img-top" style={{ height: '20rem' }} alt="..." />
                    <img src={getData?.phone_images[1]} className="card-img-top" style={{ height: '20rem' }} alt="..." /> */}
                    <div className="card-body text-center">
                        <p>{getData.release_date}</p>
                        <p>{getData.dimension}</p>
                        <p>{getData.os}</p>
                        <p>{getData.storage}</p>
                        {/* <h5>{getData.specifications?.[0].title}</h5>
                        <p>{getData.specifications?.[0].specs?.[0].key} : {getData?.specifications?.[0].specs?.[0].val?.[0]}</p> */}

                        {
                            getData.specifications?.map((item, idx) => (
                                <>

                                    <h4 key={idx}>{item.title}</h4>


                                    {
                                        item.specs?.map((i, idx) => (
                                            <>

                                                <h6 key={idx}>{i.key}</h6>
                                                <h1>{i.val[0]}</h1>
                                                {console.log(i.val)}
                                            </>
                                        ))
                                    }
                                </>
                            ))


                        }




                    </div>
                </div>





            </div>

        </>
    )
}
export default Spesification