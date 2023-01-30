import React from "react";
import { v4 as uuidv4 } from "uuid";

import { IWorkItem } from "../../types/workItem";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component<{
  setWorkItens: React.Dispatch<React.SetStateAction<IWorkItem[]>>;
}> {
  state = {
    item: "",
    time: "00:00",
  };

  addWorkItem(evento: React.FormEvent<HTMLFormElement>) {
    this.props.setWorkItens((setOldWorkItens) => [
      ...setOldWorkItens,
      {
        ...this.state,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    this.setState({
      item: "",
      time: "00:00",
    });
    evento.preventDefault();
    console.log("evento: ", this.state);
  }

  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.addWorkItem.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.item}
            onChange={(evento) =>
              this.setState({ ...this.state, item: evento.target.value })
            }
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.time}
            onChange={(evento) =>
              this.setState({ ...this.state, time: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button text="Adicionar" />
      </form>
    );
  }
}
export default Form;
