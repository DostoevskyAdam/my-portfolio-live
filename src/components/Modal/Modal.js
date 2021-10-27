import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

const Modal = ({ show, close, title, children }) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
              <button className="close" onClick={() => close()}>
                x{" "}
              </button>
            </header>
            <main className="modal_content"> {children} </main>
          </div>
        </div>
      ) : null}
      
    </>, document.getElementById("modal")
  );
};

export default Modal;
