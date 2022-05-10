import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={"/"}> <a class="nav-link active" aria-current="page" href="#">Home</a ></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/populer"}> <a class="nav-link" href="#">Terpopuler</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/terbaru"}><a class="nav-link" href="#">Terbaru</a></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar