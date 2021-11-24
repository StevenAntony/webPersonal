import CoverImg from "../../assets/img/coverPage.svg";
import StyleCover from "../../assets/css/CoverPage.module.css";
export function Cover() {
    return (
        <div className={StyleCover.cover}>
            <img src={CoverImg} alt="" />
            <div className="py-5">
                <div className="d-block container py-5">
                    <h2 className={StyleCover.title}>¡Hola!<br />
                    Soy Steven Castillo<br />
                    <span>Frelencer</span> Independiente</h2>
                    <a href="#">CONTRATAME</a>
                </div>
            </div>
        </div>
        );
  }
  