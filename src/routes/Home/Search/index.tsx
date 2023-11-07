import Button from '../../../components/Button';

import './style.css';

export default function Search() {
    return (
        <>
            <main className='container'>
                <div className='card-container'>
                    <h2>Encontre um perfil Github</h2>
                    <form className='search-bar'>
                        <input type="text" placeholder='Usuário Github' />
                        <Button text='Encontrar' />
                    </form>
                </div>
            </main>
        </>
    );
}