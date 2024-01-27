import "./Home.css"
import Header from "../../components/Header/Header"
import arrowImg from "../../imgs/icones/arrow.svg"
import destaqueImg from "../../imgs/destaque.webp"
function Home () {
    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <div className="bloco-1">
                        <h1>Tenha mais <br /> <span  className="titulo">ORGANIZAÇÃO</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur nam numquam alias dolor cupiditate deserunt maiores commodi nulla quod! Voluptate numquam saepe corporis, consequatur neque sunt nostrum assumenda soluta?</p>
                        <button className="btn-login">
                            <img src={arrowImg} alt="Seta" />
                            Fazer login
                        </button>
                    </div>
                    <div className="bloco-2">
                        <img src={destaqueImg} alt="Tarefa" />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Home