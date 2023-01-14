import "./styles.scss";

const WriteBar = () => {
  return (
    <div id="writeBarContainer">
      <form action="#">
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>Criar *</button>
      </form>
    </div>
  );
};

export default WriteBar;
