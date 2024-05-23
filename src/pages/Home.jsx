//components
import HomePage from "../components/HomePage"
import CardServicos from "../components/CardServicos"
import CasesSucesso from "../components/CasesSucesso"
import FormularioContato from "../components/FormularioContato"

const Home = () => {
  
    return (
        <div>
            <HomePage />
            <hr></hr>
            <CardServicos />
            <hr></hr>
            <CasesSucesso />
            <hr></hr>
            <FormularioContato />
        </div>
    )
}

export default Home




