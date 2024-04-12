import { useNavigate } from 'react-router-dom';
import styles from "../layout/Tela2.module.css";
import TicTacToe from '../JogoVelha';

export function Tela2() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Tela 2</h3>
      <TicTacToe />
      <button className={styles.menubutton} onClick={() => navigate('/')}>Menu</button>
    </div>
  );
}
