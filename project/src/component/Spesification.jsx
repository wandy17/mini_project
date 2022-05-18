import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Coment from "./Coment";
import Navbar from "./navbar";
import style from "./spesification.module.css"
import Footer from "./footer/Footer";
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
            <div className={style.border}>
                <div className={style.header}>
                    <div className={style.row}>
                        <tr>
                            <div className={style.gambar}>
                                <td><img src={getData?.phone_images?.[0]} alt="" /></td>
                            </div>
                            <div className={style.data} >
                                <td >
                                    <h3><b>{getData.phone_name}</b></h3>
                                    <tr>
                                        <th style={{ width: "200px" }} ><b>Brand</b></th>
                                        <td>{getData.brand}</td>

                                    </tr>
                                    <tr>
                                        <th style={{ width: "200px" }} ><b>Release</b></th>
                                        <td>{getData.release_date}</td>

                                    </tr>
                                    <tr>
                                        <th style={{ width: "200px" }} ><b>Dimension</b></th>
                                        <td>{getData.dimension}</td>

                                    </tr>
                                    <tr>
                                        <th style={{ width: "200px" }} ><b>OS</b></th>
                                        <td>{getData.os}</td>

                                    </tr>
                                    <tr>
                                        <th style={{ width: "200px" }} ><b>Storage</b></th>
                                        <td>{getData.storage}</td>

                                    </tr>
                                    <br />
                                    <tr>
                                        <td className={style.img}><img src={getData.thumbnail} alt="" /></td>

                                    </tr>



                                    {/* <td><b>Dimensin</b>{getData.dimension}</td>
                                <p><b>Oprasion Sistem </b>{getData.os}</p>
                                <p><b>Storage</b>{getData.storage}</p> */}
                                </td>
                            </div>
                        </tr>


                    </div>
                    <div className={style.box}>
                        <h3>Full Spesification {getData.phone_name} </h3>
                        {
                            getData.specifications?.map((item, idx) => (
                                <>

                                    <h5 key={idx}>{item.title}</h5>
                                    {
                                        item.specs?.map((i, idx) => (
                                            <>
                                                <ul>
                                                    <li key={idx}><b>{i.key}</b> : {i.val[0]} </li>
                                                    {console.log(i)}
                                                    {console.log(getData)}
                                                </ul>
                                                {/* <h6 key={idx}>{i.key}</h6>
                                            <h1>{i.val[0]}</h1>
                                            {console.log(i.val)} */}
                                            </>
                                        ))
                                    }
                                </>
                            ))


                        }

                    </div>
                </div>


            </div>
            < Coment />
            <Footer />
        </>
    )
}
export default Spesification