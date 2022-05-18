import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Marena from "../gadget.jpg"
function Navbar() {
    return (
        <>

            <div className={style.header}>
                <div className={style.logo}>
                    <p>GSMARENA</p>
                </div>
                <div className={style.navbar}>
                    <ul>
                        <Link to={"/"}><li><a href="#">Home</a></li></Link>
                        <Link to={"/populer"}><li><a href="#">Populer</a></li></Link>
                        <Link to={"/terbaru"}><li><a href="#">Terbaru</a></li></Link>


                    </ul>
                </div>
            </div>

            {/* navbar-expand-lg navbar-light bg-light mb-5
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"}> <a className="nav-link active" aria-current="page" href="#">Home</a ></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/populer"}> <a className="nav-link" href="#">Terpopuler</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/terbaru"}><a className="nav-link" href="#">Terbaru</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/coment"}><a className="nav-link" href="#">coment</a></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav> */}
        </>
    )
}
export default Navbar