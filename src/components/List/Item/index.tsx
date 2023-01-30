import React from "react";
import { IWorkItem } from "../../../types/workItem";
import style from "../../List/List.module.scss";

interface Props extends IWorkItem {
  selectWorkItem: (workItemSelected: IWorkItem) => void;
}

export default function Item({
  item,
  time,
  selected,
  completed,
  id,
  selectWorkItem,
}: Props) {
  // const { tarefa, tempo } = props;

  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() =>
        selectWorkItem({
          item,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{item}</h3>
      <span>{time}</span>
    </li>
  );
}
