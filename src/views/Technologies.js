import mongo from "../img/mongodb-logo.png";
import express from "../img/express.png";
import react from "../img/reactjs.png";
import node from "../img/node.png";
import java from "../img/javalogo.png";
import spring from "../img/spring.png";
import mysql from "../img/mysql.png";
import python from "../img/python.png";
import django from "../img/django.png";
import bootstrap from "../img/bootstrap.jpg";
import material from "../img/material.png";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import github from "../img/github.png";
import postman from "../img/postman-logo.png";

const Technologies = () => {
    return (
        <div className="skills-container">
            <div className="skills-text">
                <h1 className="skills-h1">Technologies I Know</h1>
                <hr/>
            </div>
            <div className="skills-images-table">
                <ul>
                    <il>
                        <img src={mongo}  alt="MongoDB"/>
                    </il>
                    <il>
                        <img src={express} alt="Express JS"/>
                    </il>
                    <il>
                        <img src={react} alt="React JS" />
                    </il>
                    <il>
                        <img src={node} alt="Node JS"/>
                    </il>
                    <il>
                        <img src={java} alt="Java"/>
                    </il>
                    <il>
                        <img src={spring} alt="Spring Tool"/>
                    </il>
                    <il>
                        <img src={mysql} alt="MySQL"/>
                    </il>
                    <il>
                        <img src={python} alt="Python"/>
                    </il>
                    <il>
                        <img src={django} alt="Django"/>
                    </il>
                    <il>
                        <img src={bootstrap} alt="Bootstrap"/>
                    </il>
                    <il>
                        <img src={material} alt="Material"/>
                    </il>
                    <il>
                        <img src={html} alt="HTML" />
                    </il>
                    <il>
                        <img src={css} alt="CSS"/>
                    </il>
                    <il>
                        <img src={javascript} alt="JavaCript"/>
                    </il>
                    <il>
                        <img src={github} alt="GitHub" />
                    </il>
                    <il>
                        <img src={postman} alt="Postman"/>
                    </il>
                </ul>
            </div>
        </div>
    )
}
export default Technologies;