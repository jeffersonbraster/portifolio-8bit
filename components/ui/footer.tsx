"use client";

import { useState } from "react";

const Footer = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <footer className="fixed bottom-5 left-5">
      <button type="button" onClick={() => setIsShowModal(!isShowModal)}>
        <i className="nes-icon star is-large"></i>
      </button>

      {isShowModal && (
        <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10">
          <div className="nes-dialog lg:w-[40rem] bg-white h-full overflow-auto">
            <div className="flex justify-end">
              <button onClick={() => setIsShowModal(false)}>
                <i className="nes-icon close is-small"></i>
              </button>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <i className="snes-jp-logo"></i>

              <p>Meus projetos</p>

              <a href="https://galeria.jeffersonbrandao.com.br/" target="_blank">
                <div className="nes-container with-title">
                  <p className="title">Galeria de fotos</p>
                  <p>
                    Projeto onde tenho minhas fotos favoritas, utilizando nextjs, tailwind e typescript e cloudinary
                  </p>
                </div>
              </a>

              <a href="https://piece.jeffersonbrandao.com.br/" target="_blank">
                <div className="nes-container with-title">
                  <p className="title">One Piece App</p>
                  <p>
                    Projeto onde mostra os personagens do anime One Piece, utilizando html, sass e javascript
                  </p>
                </div>
              </a>

              <a href="https://poke.jeffersonbrandao.com.br/" target="_blank">
                <div className="nes-container is-dark with-title">
                  <p className="title">Pokemon App</p>
                  <p>
                    Projeto front-end para consulta de pokemons, utilizando html, sass e javascript
                  </p>
                </div>
              </a>

              <a href="https://barber.jeffersonbrandao.com.br/" target="_blank">
                <div className="nes-container with-title">
                  <p className="title">Dev Barber</p>
                  <p>
                    Projeto de um frela, uma landing page para um barbeiro, utilizando html, sass e javascript
                  </p>
                </div>
              </a>

              <a href="https://neon-clone.jeffersonbrandao.com.br/" target="_blank">
                <div className="nes-container is-dark with-title">
                  <p className="title">Clone Neon</p>
                  <p>
                    Projeto para melhorar e aparfeiçoar as habilidades em html, sass e javascript
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
