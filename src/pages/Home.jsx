//components
import HomePage from "../components/HomePage"
import CardServicos from "../components/CardServicos"
import CasesSucesso from "../components/CasesSucesso"
import FormularioContato from "../components/FormularioContato"

const Home = () => {

    return (
        <div>
            <div id="home">
                <HomePage />
            </div>
            <div id="servicos">
                <CardServicos />
            </div>
            <div id="cases">
                <CasesSucesso />
            </div>
            <div id="contato">
                <FormularioContato />
            </div>
        </div>
    )
}

export default Home




