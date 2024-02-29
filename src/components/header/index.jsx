import { Component } from "react";
import "./index.scss";
import img from "../../../public/assets/logo.png";
import Quyosh, { Oy } from "../../constants";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      sitebarIco: false,
    };
  }

  toggleActive = () => {
    this.setState(
      (prevState) => ({
        active: !prevState.active,
      }),
      () => {
        const elRoot = document.documentElement;
        let dataTheme = elRoot.getAttribute("data-theme");
        if (dataTheme === "light") {
          elRoot.setAttribute("data-theme", "dark");
        } else {
          elRoot.setAttribute("data-theme", "light");
        }
      }
    );
  };

  sitebar = () => {
    this.setState((prevState) => ({
      sitebarIco: !prevState.sitebarIco,
    }));
  };

  render() {
    const { active, sitebarIco } = this.state;
    return (
      <>
        <header>
          <div className={`sitebar ${sitebarIco ? "active" : ""}`}>
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="text">
              <p>Продукция</p>
              <p>Сертификаты</p>
              <p>Наша команда</p>
              <p>О нас</p>
              <p>Новости</p>
              <p>Вакансии</p>
              <p>Контакты</p>
            </div>
          </div>
          <div className="container">
            <div className="header">
              <div className="img">
                <img src={img} alt="" />
              </div>
              <div className="text">
                <p className="dro">
                  Продукция
                  <div className="droup">
                    <p>Ламинатные тубы</p>
                    <p>Экструзионные тубы</p>
                    <p>Другая упаковка</p>
                  </div>
                </p>
                <span>|</span>
                <p>Сертификаты</p> <span>|</span>
                <p>Наша команда</p> <span>|</span>
                <p>О нас</p> <span>|</span>
                <p>Новости</p>
                <span>|</span>
                <p>Вакансии</p> <span>|</span>
                <p>Контакты</p>
              </div>
              <div className="theme">
                <span>
                  <button className="themBt" onClick={this.toggleActive}>
                    {active ? (
                      <span className="oy">
                        <Oy />
                      </span>
                    ) : (
                      <span className="q">
                        <Quyosh />
                      </span>
                    )}
                  </button>
                </span>
                <div
                  className={`bar ${sitebarIco ? "active" : ""}`}
                  onClick={this.sitebar}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
