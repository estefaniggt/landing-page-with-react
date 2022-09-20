import React from "react";

export const Navbar = () => {

    return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark fw-bold">
        <div className="container-fluid">
             <a className="navbar-brand ms-3" href="#">Start Bootstrap</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav me-3 text-start">
                     <a class="nav-link active" aria-current="page" href="#">Home</a>
                     <a class="nav-link" href="#">About</a>
                     <a class="nav-link" href="#">Services</a>
                     <a class="nav-link" href="#">Contact</a>
                </div>
             </div>
        </div>
    </nav>

    )
}