import React, { useState } from "react";
import style from "./App.module.scss";
import Form from "../components/Form";
import List from "../components/List";
import Cronometro from "../components/Cronometro";
import { IWorkItem } from "../types/workItem";

function App() {
  const [workItens, setWorkItens] = useState<IWorkItem[] | []>([]);
  const [selected, setSelected] = useState<IWorkItem>();

  function selectWorkItem(workItemSelected: IWorkItem) {
    setSelected(workItemSelected);
    setWorkItens((workItensOld) =>
      workItensOld.map((item) => ({
        ...item,
        selected: item.id === workItemSelected.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setWorkItens={setWorkItens} />
      <List workItens={workItens} selectWorkItem={selectWorkItem} />
      <Cronometro />
    </div>
  );
}

export default App;
