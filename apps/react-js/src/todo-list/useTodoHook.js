import { useEffect, useState } from "react";

const STORAGE_KEY = "todoList";

export const useTodoHook = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoListStorageValue = localStorage.getItem(STORAGE_KEY);

    if (todoListStorageValue !== null) {
      const savedTodoList = JSON.parse(todoListStorageValue);
      setTodoList(savedTodoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const handleClickAddSubmitBtn = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      alert("비어있는 값은 추가할 수 없습니다.");
      return;
    }

    const id = crypto.randomUUID();
    setTodoList((prev) => [{ id, name: inputText, isChecked: false }, ...prev]);
    setInputText("");
  };

  const handleClickRemoveBtn = (id) => {
    setTodoList((prev) => prev.filter((e) => e.id !== id));
  };

  const handleClickDoneCheckBox = (id, checked) => {
    setTodoList((prev) => {
      const foundIndex = prev.findIndex((e) => e.id === id);
      const prevList = prev.slice(0, foundIndex);
      const nextList = prev.slice(foundIndex + 1);
      return [
        ...prevList,
        { ...prev[foundIndex], isChecked: checked },
        ...nextList,
      ];
    });

    setTodoList((prev) =>
      prev.map((item) => ({
        ...item,
        isChecked: item.id === id ? checked : item.id,
      }))
    );
  };

  const handleChangeInputText = (value) => {
    setInputText(value);
  };

  return {
    inputText,
    handleChangeInputText,
    todoList,
    handleClickAddSubmitBtn,
    handleClickRemoveBtn,
    handleClickDoneCheckBox,
  };
};
