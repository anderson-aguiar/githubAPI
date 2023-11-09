import './styles.css';
import { UserDTO } from '../../models/user';

type Props = {
    user: UserDTO;
}

export default function UserCard({ user } : Props) {


    return (
        <>
            <div className='user-card-container'>
                <div className='card-informations'>
                    <img src={user?.avatar_url} alt={user.name} />
                    <div className='user-datas'>
                        <h3>Informações</h3>
                        <div className='user-data flexDir'>Perfil: <a href={user?.html_url} target='_blank'> {user?.html_url}</a></div>
                        <div className='user-data flexDir'>Seguidores: <p>{user?.followers}</p></div>
                        <div className='user-data flexDir'>Localidade: <p>{user?.location}</p></div>
                        <div className='user-data flexDir'>Nome: <p>{user?.name}</p></div>
                    </div>
                </div>
            </div>
        </>
    );
}