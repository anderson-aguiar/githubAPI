import './style.css';
import Button from '../../../components/Button';
import UserCard from '../../../components/UserCard';
import { useEffect, useState } from 'react';
import * as userService from '../../../services/user-service';
import { UserDTO } from '../../../models/user';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Search() {

    type FormData = {
        login: string;
    }
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<UserDTO | undefined>();
    const [formData, setFormData] = useState<FormData>({ login: '' })

    useEffect(() => {
        if (name) {
            userService.find(name)
                .then(response => {
                    setUser(response.data);
                    console.log(response.data);
                })
                .catch(() => {
                    navigate("not-found");
                    setUser(undefined);
                });
        }
    }, [name]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });

    }
    function handleFormSubmit(event: React.FormEvent) {
        event.preventDefault();
        setName(formData.login)
    }
    return (
        <>
            <main className='container'>
                <div className='card-container'>
                    <h2>Encontre um perfil Github</h2>
                    <form className='search-bar' onSubmit={handleFormSubmit}>
                        <input type="text"
                            placeholder='Usuário Github'
                            name='login'
                            value={formData.login}
                            onChange={handleInputChange}
                        />
                        <Button text='Encontrar' />
                    </form>
                </div>
                {
                    user ? <UserCard user={user} /> : <Outlet />
                }

            </main>
        </>
    );
}