function Icon ({ iconName, size, Link }) {
  return (
    <a href={Link} target="_blank">  {/*target _blank faz com que ao clicar no logo vá para uma nova aba */}
      <img src={`/icons/${iconName}.svg`} width={size} />
    </a>
  )
}

Icon.defaultProps = {   /*mantem por padrão 30px caso não seja informado */
  size: '30px'
}
export default Icon