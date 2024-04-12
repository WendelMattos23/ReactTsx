import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import User from '../components/User'; // Importe o componente User
import { UserProps } from '../types/user';

export const Home: React.FC = () => {
    const navi = useNavigate();
    const [user, setUser] = useState<UserProps | null>(null); // Adicione o estado para o usuário

    const loadUser = async (userName: string) => {   
        console.log(`Carregando usuário: ${userName}`);
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json();

            if(res.status === 404) {
                console.error('Usuário não encontrado');
                return;
            }

            setUser(data); // Atualize o estado do usuário com os dados obtidos
        } catch (error) {
            console.error('Erro ao carregar usuário:', error);
        }
    };

    const handleInputChange = (value: string) => {
        // Se o campo de pesquisa for limpo, defina o estado do usuário como nulo
        if (!value.trim()) {
            setUser(null);
        }
    };

    return (
        <div>
            <h1>Tela 1</h1>
            <Search loadUser={loadUser} onInputChange={handleInputChange} />
            {user && <User {...user} />} {/* Renderize o componente User se o usuário estiver carregado */}
            <button onClick={() => {navi('/')}} >Menu</button>
        </div>
    );
}
