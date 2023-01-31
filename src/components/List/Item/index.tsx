import React from "react";
import { IWorkItem } from "../../../types/workItem";
import style from "./Item.module.scss";

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
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completed &&
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
      {completed && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}
