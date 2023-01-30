import style from "./List.module.scss";
import Item from "../List/Item";
import { IWorkItem } from "../../types/workItem";

interface Props {
  workItens: IWorkItem[];
  selectWorkItem: (workItemSelected: IWorkItem) => void;
}

function List({ workItens, selectWorkItem }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {workItens.map((item) => (
          <Item selectWorkItem={selectWorkItem} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
