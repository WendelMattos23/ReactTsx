import React, { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import classes from './Search.module.css';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
    onInputChange: (value: string) => void; // Adicione a propriedade onInputChange
};

const Search = ({ loadUser, onInputChange }: SearchProps) => {
    const [userName, setUserName] = useState('');

    const handleKeyDown = async (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            await loadUser(userName);
        }
    };

    const handleButtonClick = async () => {
        await loadUser(userName);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserName(value);
        onInputChange(value); // Chame a função onInputChange com o novo valor
    };

    return (
        <div className={classes.search}>
            <h2>Busque por um usuário</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input
                    type="text"
                    placeholder="Digite o nome do Usuário"
                    value={userName}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleButtonClick}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;
