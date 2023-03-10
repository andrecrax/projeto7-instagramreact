
import React, { useState } from 'react';
export default function Sidebar(){
  const [urlProfile, setUrlProfile] = useState(null);

  function changeProfilePhoto() {
    const newUrl = prompt("Insira o link da imagem desejada:");
    setUrlProfile(newUrl);
  }

  const [userName, setUserName] = useState(null);

  function changeUserName() {
    const newName = prompt("Insira o nome que deseja:");
    setUserName(newName);
  }

    return (      <div className="sidebar">
    <div className="usuario">
      <img data-test="profile-image" onClick={() => changeProfilePhoto()} src={urlProfile || "assets/img/catanacomics.svg"} alt="imagem de perfil"/>
      <div className="texto">
        <span data-test="name">
          <strong>{userName || "catanacomics"}</strong>
          <ion-icon data-test="edit-name" onClick={() => changeUserName()} name="pencil"></ion-icon>
        </span>
      </div>
    </div>

    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img  src="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg"/>
          <div className="texto">
            <div className="nome">bad.vibes.memes</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/chibirdart.svg" alt="chibirdart"/>
          <div className="texto">
            <div className="nome">chibirdart</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
          <div className="texto">
            <div className="nome">razoesparaacreditar</div>
            <div className="razao">Novo no Instagram</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
          <div className="texto">
            <div className="nome">adorable_animals</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/img/smallcutecats.svg" alt="smallcutecats"/>
          <div className="texto">
            <div className="nome">smallcutecats</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    </div>

    <div className="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
      Hashtags • Idioma
    </div>

    <div className="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  </div>);
}