import "./styles.scss";

const TasksQuantity = () => {
  return (
    <div id="taskQuantity">
      <h3>Tarefas criadas</h3>
      <span>0</span>
    </div>
  );
};

const TasksFinished = () => {
  return (
    <div id="tasksFinished">
      <h3>Concluidas</h3>
      <span>0</span>
    </div>
  );
};

const HeaderBox = () => {
  return (
    <div id="containerHeaderBox">
      <div id="subContainer">
        <TasksQuantity />
        <TasksFinished />
      </div>
    </div>
  );
};

export default HeaderBox;
