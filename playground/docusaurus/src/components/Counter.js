import React, { useState } from 'react'
import css from './Counter.module.css'

export function Counter({ max = 0, onMax }) {
  const [count, setCount] = useState(0)

  const increment = () => {
    if (max !== 0 && count >= max) {
      onMax?.()
      document.body.style.backgroundColor = 'pink'
      alert('🚨 YOU HAVE BEEN WARNED 🚨')
      return
    }
    setCount(count + 1)
  }

  return (
    <button className={css.counter} onClick={increment}>
      Count is {count}
    </button>
  )
}
