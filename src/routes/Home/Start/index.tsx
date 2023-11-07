import './styles.css';
import Button from '../../../components/Button';

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
                    <div>
                        <Button text='Começar' />
                    </div>
                </div>
            </main>

        </>
    );
}
