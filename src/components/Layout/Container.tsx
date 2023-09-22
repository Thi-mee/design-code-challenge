import React from 'react'
import style from './Layout.module.css'

type Props = {
  children: React.ReactNode
}
const Container = ({children}: Props) => {
  return (
    <div className={style.container}>{children}</div>
  )
}

export default Container