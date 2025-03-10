export const TotoItem = ({
  item,
  handleClickDoneCheckBox,
  handleClickRemoveBtn,
}) => {
  return (
    <div
      key={item.id}
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <input
        id={item.id}
        type="checkbox"
        checked={item.isChecked}
        onChange={(e) => handleClickDoneCheckBox(item.id, e.target.checked)}
      />
      <label
        htmlFor={item.id}
        style={{
          ...(item.isChecked && {
            textDecoration: "line-through",
          }),
        }}
      >
        {item.name}
      </label>
      <button onClick={() => handleClickRemoveBtn(item.id)}>삭제</button>
    </div>
  );
};
