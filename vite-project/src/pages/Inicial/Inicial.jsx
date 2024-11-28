import { FormCriarTarefa, ListaTarefas } from "../../components";

import style from './Inicial.module.css'

const Inicial = () => {
   return (
      <div className={style.Inicial}>
      <FormCriarTarefa />
      <ListaTarefas />
      </div>
   );
};
    
export {Inicial};

/* quando usa <> </> chamado de fragment ele não renderiza, ou seja, não aparece no 
debug do navegador. é utilizado apenas para evitar diversos <div>. no caso de usar
<div>, ele aparece no debug  */