import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <header>
            <div className='title-container'>
                <Link to={"/"}>
                    <h1>GitHub API</h1>
                </Link>
            </div>
        </header>
    );
}