import styles from './GameInfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ( {currentPlayer, winner, onReset, isDraw} ) {
  return (
    <div className={styles.gameInfo}>
      {
        !isDraw && winner === 0 &&
        <>
          <h4>Próximo a jogar:</h4>
          {
            currentPlayer === 1 && <Icon iconName="circle" />
          }
          {
            currentPlayer === -1 && <Icon iconName="X" />
          }   
         </>
      }
      {
        !isDraw && winner !== 0 &&
          <>
            <h4>Fim de jogo! Campeão: </h4>
            {
              winner === 1 && <Icon iconName="circle" />
            }
            {
              winner === -1 && <Icon iconName="X" />
            }            
          </>
      }
      {
        isDraw && <h4> Empate!</h4>
      }
      <Button
        onClick={onReset}
        disabled={winner === 0 && !isDraw}
      >
        Reiniciar
      </Button>
    </div>
  )
}
export default GameInfo