import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">Leptop Shop International</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/Home" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Reviews" class="nav-link">Reviews</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Dashboard" class="nav-link">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Blogs" class="nav-link">Blogs</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
