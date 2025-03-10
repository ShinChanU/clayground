export const Form = ({
  handleClickAddSubmitBtn,
  handleChangeInputText,
  inputText,
}) => {
  return (
    <form onSubmit={handleClickAddSubmitBtn}>
      <input
        placeholder="입력해주세요."
        value={inputText}
        onChange={(e) => handleChangeInputText(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
};
