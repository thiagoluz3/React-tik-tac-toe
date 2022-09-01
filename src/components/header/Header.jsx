import Title from "../Title/Title"
import Subtitle from "../Subtitle/Subtitle"
import styles from './Header.module.css'
import Icon from "../icon/Icon"

function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Thiago Luz</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" Link="https://github.com/thiagoluz3"/>
      </div>
    </div>
    )
}
export default Header