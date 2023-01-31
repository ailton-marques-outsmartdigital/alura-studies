import Button from "../Button";
import Relogio from "./Relogio";
import TempoConversor from "../../common/utils/time";

import style from "./Cronometro.module.scss";
import { IWorkItem } from "../../types/workItem";
import { useEffect, useState } from "react";
import { parseJsonSourceFileConfigFileContent } from "typescript";

interface Props {
  selected: IWorkItem | undefined;
  releaseWorkItem: () => void;
}

export default function Cronometro({ selected, releaseWorkItem }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTempo(TempoConversor(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTempo(counter - 1);
        return regressive(counter - 1);
      }
      releaseWorkItem();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha o card e inicie o cronômetro.</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Button type="button" onClick={() => regressive(tempo)}>
        Começar
      </Button>
    </div>
  );
}
