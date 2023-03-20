function InfoTooltip({ imgPopup, isOpen }) {
  return (
    <div className={`pop-up ${isOpen ? "pop-up_opened" : ""}`}>
      <div className="pop-up__container">
        <button type="button" aria-label="Закрыть" className="pop-up__exit" />
        <img src={imgPopup} alt="Результат запроса" className="pop-up__img" />
        <h2 className="pop-up__text">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  );
}
export default InfoTooltip;

//Что-то пошло не так! Попробуйте ещё раз.
