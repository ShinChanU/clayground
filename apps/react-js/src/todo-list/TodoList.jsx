import { Form } from "./Form";
import { TotoItem } from "./TotoItem";
import { useTodoHook } from "./useTodoHook";

export const TodoList = () => {
  const {
    inputText,
    handleChangeInputText,
    todoList,
    handleClickAddSubmitBtn,
    handleClickRemoveBtn,
    handleClickDoneCheckBox,
  } = useTodoHook();

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h3>입력</h3>
      <Form
        handleClickAddSubmitBtn={handleClickAddSubmitBtn}
        handleChangeInputText={handleChangeInputText}
        inputText={inputText}
      />

      <div>
        <h3>todo list</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {todoList.map((item) => {
            return (
              <TotoItem
                key={item.id}
                item={item}
                handleClickDoneCheckBox={handleClickDoneCheckBox}
                handleClickRemoveBtn={handleClickRemoveBtn}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
