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
              <p>
                О Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam, perferendis iure voluptatum, asperiores id modi tempora
                suscipit exercitationem non molestias laborum molestiae quas
                beatae aliquam. Vel ad recusandae, velit, officia numquam
                exercitationem natus incidunt fugiat id sed quidem, maxime
                repudiandae eum minima voluptatum illum aliquam repellat.
                Inventore doloremque provident, dicta nobis distinctio possimus
                minus natus ducimus officia asperiores assumenda modi dolores
                animi dolor accusantium non. Vitae est commodi soluta adipisci,
                odit error illum alias natus quia sit atque dicta labore beatae
                nihil! Necessitatibus dolorum est ea sunt laborum unde ipsa,
                fugiat, accusantium exercitationem itaque natus? Ea tempore
                quaerat enim repellat, dolore est, eos deserunt placeat esse
                odit at natus consectetur error laborum. Beatae, non id nesciunt
                debitis laudantium dicta architecto fugit obcaecati neque quia
                tenetur, sequi impedit alias necessitatibus consequuntur iure
                eos hic blanditiis voluptatum officia tempore harum similique.
                Error tenetur ex accusamus, numquam aut excepturi modi
                laudantium a! Atque obcaecati vitae eveniet voluptas repudiandae
                blanditiis rem modi inventore iure commodi earum quibusdam totam
                animi, aliquam debitis. Dolorem aut maiores esse! Repellendus
                obcaecati possimus quam alias, doloremque numquam. Numquam iste
                odio quisquam suscipit, ipsa illo enim quaerat cum quae natus.
                Rem quaerat adipisci ipsum vitae dolorum repellat ad voluptatum!
                Quam voluptatum quasi nobis error nisi commodi? Quisquam libero
                ratione molestias recusandae fuga quidem explicabo assumenda,
                dolorem non, reiciendis officiis debitis? Earum nostrum
                officiis, quas iste adipisci aut nam tempore et quis, odio
                architecto distinctio possimus quae numquam. Animi officia
                numquam amet sint rerum consectetur culpa modi ad! Porro
                explicabo ipsum doloribus aliquam error illo. Rem quaerat vel
                quisquam suscipit atque in, beatae nisi repudiandae id
                voluptatibus veniam fugiat, fugit cumque ipsum nam, deserunt
                provident? Laboriosam neque distinctio deserunt nihil maxime
                doloremque labore quasi, modi quia blanditiis ea totam nam
                voluptates a cumque velit hic possimus dolorum tempora nisi
                nulla? Accusamus nulla, corrupti facere ad sunt, veritatis
                numquam aliquid magni, magnam cum delectus. Accusamus assumenda
                saepe eum corporis blanditiis aut nisi tenetur labore inventore
                illum? Possimus illo, aut eius architecto maiores quasi
                consequuntur excepturi, adipisci quia accusamus debitis hic
                sequi repellat, delectus tempore blanditiis deleniti error
                voluptate sunt dolores voluptatibus dignissimos reprehenderit.
                Consequuntur dignissimos ea iusto natus. Accusamus, porro
                voluptas velit accusantium magni sunt voluptate, mollitia cum
                nihil possimus repellendus? Animi quidem nisi ad temporibus,
                vitae saepe perspiciatis ipsa necessitatibus, veritatis
                obcaecati deserunt non a fugiat libero. Quidem ab commodi
                dolores repellendus vitae aperiam esse id harum tempora maxime
                numquam voluptate, libero veniam repellat illum quia aliquam
                pariatur cupiditate quasi eligendi corporis. Nam aliquam sed
                labore voluptates maxime praesentium architecto ducimus.
                Dignissimos dolorum maxime quibusdam facilis ipsa ipsum tempore
                sunt magnam suscipit labore inventore recusandae beatae ad
                asperiores, eaque sequi natus numquam exercitationem saepe ex
                illo nemo delectus, alias incidunt. Nam perspiciatis nulla
                aperiam maiores nobis laboriosam, libero reiciendis, sunt
                suscipit illum reprehenderit ex minus mollitia, non porro veniam
                voluptatum sequi veritatis. Debitis ipsum hic rerum sunt nam
                assumenda voluptatibus praesentium deserunt omnis, quae nobis
                autem tempora voluptas officiis alias ipsa in! Architecto ipsa
                porro eos optio quisquam officiis nobis maxime corrupti
                mollitia, laboriosam illo, fugiat quo est alias autem. Dolorem
                corrupti magni ducimus ipsum, vitae fuga natus ratione
                laboriosam saepe aut ab omnis sunt quas non voluptatibus.
                Distinctio, possimus eum expedita voluptates iste reiciendis!
                Odio doloribus natus aut officia nam aperiam. Doloribus
                repudiandae nesciunt quisquam blanditiis, nemo impedit veniam
                similique quam exercitationem. Porro blanditiis hic quod
                dolores, vel dignissimos corporis accusamus debitis, incidunt,
                atque eveniet. Atque qui, quisquam accusantium esse voluptatibus
                iusto quas perferendis suscipit molestiae neque tempore mollitia
                voluptate quidem dolores impedit possimus quasi veritatis ullam
                ad perspiciatis, dolorem cupiditate libero labore distinctio?
                Recusandae laboriosam, ea aut adipisci aliquid enim id error
                impedit unde consectetur, necessitatibus aliquam esse fugit
                corrupti ratione veritatis voluptatum eligendi neque eos placeat
                minus. Dolorum explicabo modi alias aliquam vero maxime
                recusandae nostrum nesciunt! Assumenda consectetur vel amet
                sapiente, iusto accusantium quos inventore explicabo delectus
                molestias odit corrupti rerum alias quisquam ullam quasi id
                tempore voluptatem numquam placeat beatae! Atque incidunt
                tenetur explicabo asperiores omnis provident non enim, debitis
                dolore odit sapiente quos corporis officia obcaecati quae minima
                temporibus distinctio et harum vero neque sit expedita. Quam
                totam hic repellat ratione quae vero veniam harum vitae ut nisi
                quisquam praesentium voluptatibus dolores earum, sit quibusdam
                rem delectus consequatur nobis at provident voluptates sapiente
                sequi. Esse earum unde eius consequatur vitae, nulla culpa
                similique, vel pariatur quia porro cumque, nihil odio!
                Voluptatibus reiciendis ipsam possimus quia commodi quaerat,
                tempore autem minima corrupti. Nam eaque molestiae iste aliquam
                fuga repellat sequi mollitia hic quae necessitatibus praesentium
                doloremque, omnis vitae inventore quos dolor ad placeat expedita
                ducimus beatae accusantium alias. Delectus temporibus odit
                doloribus exercitationem vel hic aut ex quasi soluta, sequi
                laudantium laborum tempore quaerat nesciunt a earum non?
                Doloremque vel saepe minus aperiam cum voluptatibus cumque et
                accusamus, rem in maiores commodi, reiciendis esse? Explicabo
                adipisci repudiandae cupiditate eum consequuntur impedit non
                tempora doloremque! Explicabo quas ut, ullam recusandae deserunt
                sed id sint quasi dolorum distinctio aspernatur nulla porro
                provident accusamus libero? Distinctio iste sapiente mollitia.
                Modi expedita voluptatibus eligendi repellat vitae pariatur
                nesciunt dignissimos, illo tempore officiis eos error dolorem
                deleniti ipsam qui facilis rem! Delectus accusamus ea veritatis
                quisquam ab earum pariatur debitis incidunt mollitia reiciendis
                nihil molestias voluptate sed hic illo placeat laboriosam error
                voluptates quas maiores, tenetur quae quibusdam! Sunt, delectus
                debitis architecto, provident vel velit aliquid expedita illum
                sit sequi atque eum commodi distinctio reiciendis, labore dolor
                quos! Cumque aut, est amet id impedit explicabo eos. Illo saepe
                qui corporis vitae temporibus voluptatibus quibusdam ipsum
                recusandae reiciendis, ullam optio? Ducimus delectus in animi
                est impedit quas placeat? Culpa, delectus vitae. Amet laborum
                officia est fugiat veniam numquam! Nostrum dolorem iste velit
                corporis? Iure magni quis illum facere delectus officiis
                veritatis provident reprehenderit consequatur, quod, nam tempore
                deleniti veniam. Quibusdam quisquam laudantium rerum
                voluptatibus, architecto necessitatibus sunt quo eaque nulla
                ratione veniam culpa voluptatem dicta, qui eligendi eveniet et
                optio. Consectetur praesentium eveniet unde voluptas. Dolor
                laboriosam maxime distinctio qui, cumque natus corporis amet
                officiis adipisci ex aliquid soluta, quibusdam dicta. Autem! нас
              </p>
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
