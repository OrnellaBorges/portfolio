export default function Input({
  labelFor,
  labelTitle,
  inputType,
  inputId,
  inputName,
  onChangeValue,
}) {
  return (
    <p>
      <label htmlFor={labelFor}>{labelTitle}</label>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        required
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </p>
  );
}

/* 
<label for="y">
    <p>texte</p>
    <input id="y" />
</label>

 */
