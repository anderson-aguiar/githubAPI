import './styles.css';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';


export default function Start() {
    return (
        <>
            <main className='container'>
                <div className='home-content'>
                    <div>
                        <h2>Desafio Github API</h2>
                    </div>
                    <div>
                        <p>DevSuperior - Escola de programação</p>
                    </div>
                    <Link to={"search"}>
                        <Button text='Começar' />
                    </Link>
                </div>
            </main>

        </>
    );
}
