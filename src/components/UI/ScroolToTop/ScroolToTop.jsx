import "./ScroolToTop.scss";

const ScroolToTop = () => {

  const handlerScroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={() => handlerScroll()}>
      <button
        className="material-icons scroll">
        arrow_upward
      </button>
    </div>
  );

};

export default ScroolToTop;

