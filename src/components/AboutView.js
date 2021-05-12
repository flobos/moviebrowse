import Hero from "./Hero";
import React from "react";

const AboutView = () => {
    return (
        <>
        <Hero text="About us"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="lead">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                        estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido
                        usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutView;

