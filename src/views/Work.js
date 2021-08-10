import { Link } from "@reach/router";
import "./Work.css";
import java from "../img/java.gif";
import tmdb from "../img/tmdb.gif";

const Work = () => {
    return (
        <>
            <div className="work-container">
                <div className="work-text-1">
                    <h1 className="work-h1">Projects I Worked On</h1>
                    <hr/>
                    <h6 className="work-h3">Mock Flight Reservation System | Java | Spring Tools 4 | MySQL</h6>
                    <a href="/https://github.com/HusseinGuevara/Java-Programs">GitHub/Demo</a>
                    <div className="work-img">
                        <img src={java} alt="Java"/>
                    </div>
                    <p className="work-p">I created a Mock Flight Reservation System. Upon entering the website, one needs create an account 
                    and login as a user to be able to resereve and buy a flight. Java was used as the back-end and I implemented numerous models and relatioships and 
                    connected them to a MySQL database. In addition, I utilized Bootstrap to provide a more appealing user interface.
                    </p>
                </div>  
                <div className="work-text-2">
                    <hr/>
                    <h6 className="work-h6-2">The Movie DataBase Clone | React JS</h6>
                    <Link to="">GitHub/Demo</Link>
                    <div className="work-img-2">
                        <img className="img-2" src={tmdb} alt="TMDB"/>
                    </div>
                    <p className="work-p-2"> For this project I used The Movie DataBase API. One can search for a movie, tvshow, or actor
                    and view details and videos for either category. I utilized React JS for front-end development and implemented the Effect hook 
                    in combination with Axios to make a series of REST API calls. </p>
                </div>  
            </div>
        </>
    )
}
export default Work;