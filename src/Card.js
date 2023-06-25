import React from 'react'

const Card = ({ to, img, name, icon }) => {
  return (
    <a href={to} target='_blank' rel='noreferrer'>
      <article className='card'>
        <img src={img} alt={name} />
        <footer>
          <p>
            <span className='icon'> {icon}</span>
            {name}
          </p>
        </footer>
      </article>
    </a>
  )
}

export default Card
