import {projectObjects} from "../projectObjectsList";

  const Portfolio = () => {
    return (
        <div>
        <h2>Projects</h2>
        <section id="theprojects">
            <div className="flexcontainer">
                <div className="additional">
                    {projectObjects.map((projectObjects, index) => (
                    <div class="link-box" key={index}>
                            <img src={projectObjects.img} alt={projectObjects.label}></img>
                            <div className="navmiddle">
                                <h6>{projectObjects.label}</h6>
                                <div>
                                    <a className="faux-button" href={projectObjects.live}  target="_blank">Live</a>
                                    <a className="faux-button" href={projectObjects.repo}  target="_blank">Repo</a>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
  };
  
  export default Portfolio;