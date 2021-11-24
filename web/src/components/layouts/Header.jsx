import Logo from "../../logo.svg";
import { UrlWeb } from "./UrlWeb";
import StyleHeader from "../../assets/css/Header.module.css";
export function Header({scroll,routes}) {
    console.log(scroll);
    return (
        <header className={(scroll.state?(StyleHeader.scrollNavbar+' '):' ')+StyleHeader.header} >
            <div className="row mx-5 h-100">
                <div className="col-lg-3 h-100">
                    <img src={Logo} className="h-100" alt="" />
                </div>
                <div className="col-lg-9">
                    <nav className="d-flex justify-content-end h-100">
                        <ul className="d-flex">
                        {routes.map((route) => (
                                <UrlWeb key={route.id} route={route} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        );
  }
  