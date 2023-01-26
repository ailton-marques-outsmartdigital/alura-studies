import React from 'react';
import style from '../../List/List.module.scss'

export function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
  // const { tarefa, tempo } = props;

  return (
    <li className={style.item}>
    <h3>
      {tarefa}
    </h3>
    <span>
      {tempo}
    </span>
  </li>
  )
}

