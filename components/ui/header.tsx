"use client";

import { useState } from "react";

const Header = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <header className="flex w-full justify-end p-5">
      <button
        type="button"
        onClick={() => setIsShowModal(!isShowModal)}
      >
        <i className="nes-icon trophy is-large"></i>
      </button>

      {isShowModal && (
        <div className="nes-dialog absolute top-20 bg-white z-10">
          <div className="flex justify-end">
            <button onClick={() => setIsShowModal(false)}>
              <i className="nes-icon close is-small"></i>
            </button>
          </div>

          <div className="p-3">
            <p className="title text-sm">Minhas redes</p>

            <div className="flex gap-3 justify-center items-center">
              <a href="https://www.instagram.com/jeffersonbrandao/" target="_blank">
                <i className="nes-icon instagram is-medium"></i>
              </a>
              <a href="https://github.com/jeffersonbraster" target="_blank">
                <i className="nes-icon github is-medium"></i>
              </a>
              <a href="https://www.linkedin.com/in/jefferson-brandao-dev/" target="_blank">
                <i className="nes-icon linkedin is-medium"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
