import Header from "../components/Header/Header"
function Home () {
    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <div className="bloco-1">
                        <h1>Tenha mais <br /> <span>ORGANIZAÇÃO</span></h1>{/* Os css tão se misturando AAAAAAAAAAAAAAAAAAAAAA */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur nam numquam alias dolor cupiditate deserunt maiores commodi nulla quod! Voluptate numquam saepe corporis, consequatur neque sunt nostrum assumenda soluta?</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Home