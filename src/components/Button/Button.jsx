import React from 'react'


const Button = ({conteudo, alt, lar, btn, onc}) => {

  

  return (
    <button onClick={onc} className={btn} style={{width:lar, height:alt, }}>
        {conteudo}
    </button>
  )
}

export default Button