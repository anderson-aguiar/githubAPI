import './styles.css';
import Header from "../../components/Header";
import Button from '../../components/Button';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className='home-content'>
                    <div>
                        <h2>Desafio Github API</h2>
                    </div>
                    <div>
                        <p>DevSuperior - Escola de programação</p>
                    </div>
                    <div>
                        <Button text='Começar' />
                    </div>
                </div>
            </main>

        </>
    );
}
