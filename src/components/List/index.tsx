import React from 'react';
import style from './List.module.scss';
import { Item } from '../List/Item';

function List() {
  const workItens = [{
    item: 'React',
    time: '02:00:00'
  },{
    item: 'Typescript',
    time: '01:00:00'
  },{
    item: 'Culinária',
    time: '04:00:00'
  }];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {workItens.map((key, index) => (
          <Item
            key={index}
            tarefa={key.item}
            tempo={key.time}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;
