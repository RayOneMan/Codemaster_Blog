import ScroolToTop from "../ScroolToTop/ScroolToTop";

import "./Footer.scss";

export default function Footer({ setIsVisibleAddPost }) {
  return (
    <div>
      <div className="footer">
        <button
          className="material-icons footer__add-btn"
          onClick={() => setIsVisibleAddPost(true)}>
          add
        </button>
        <ScroolToTop />
      </div>
    </div>
  );
}
