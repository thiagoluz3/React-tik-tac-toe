import Title from "../Title/Title"
import Subtitle from "../Subtitle/Subtitle"
import styles from './Header.module.css'

function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
    <Subtitle>Criado por Thiago Luz</Subtitle>
    </div>
    )
}
export default Header