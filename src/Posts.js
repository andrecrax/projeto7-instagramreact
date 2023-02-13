import React, { useState } from 'react';

export default function Posts(){

  let likePost01 = 42;
  let likePost02 = 77;
  let likePost03 = 68;

  const posts = [
    {
        linkUser: "https://www.instagram.com/cbhidrobrasil/",
        imageUser: "./assets/img/cbhidro_logo.jpeg",
        user: "cbhidro",
        imagePost: "./assets/img/bhidro_logo.jpg",
        linkFollower: "https://www.instagram.com/respondeai/",
        imageFollower: "./assets/img/img-responde-ai.jpeg",
        userFollower: " respondeai ",
        linkOthers: "https://www.instagram.com/p/Cj8CXhbuQwY/",
        numberPeople: 42
    },
    {
        linkUser: "https://www.instagram.com/natividadesusana/",
        imageUser: "./assets/img/logo-natividadesusana.jpeg",
        user: "natividadesusana",
        imagePost: "./assets/img/img-pyladies.jpeg",
        linkFollower: "https://www.instagram.com/respondeai/",
        imageFollower: "./assets/img/img-bruce-viajante.jpeg",
        userFollower: " king ",
        linkOthers: "https://www.instagram.com/respondeai/",
        numberPeople: 27
    },
    {
        linkUser: "https://www.instagram.com/travelandshare/",
        imageUser: "https://yt3.ggpht.com/ytc/AMLnZu-9BYF43b-2UyBol2neMQ8YixyG5kyCJIhVH6srtg=s900-c-k-c0x00ffffff-no-rj",
        user: "travelandshare",
        imagePost: "./assets/img/img-travel-and-share.jpeg",
        linkFollower: "https://www.instagram.com/respondeai/",
        imageFollower: "./assets/img/logo-natividadesusana.jpeg",
        userFollower: " naruto ",
        linkOthers: "https://www.instagram.com/respondeai/",
        numberPeople: 68
    }];

    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);

    function handleClick1() {
        setIsClicked1(!isClicked1);
    }

    function handleClick2() {
        setIsClicked2(!isClicked2);
    }

    function handleClick3() {
        setIsClicked3(!isClicked3);
    }

    return (        
    <div class="posts">
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src="assets/img/meowed.svg" alt="meowed"/>
          meowed
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src="assets/img/gato-telefone.svg" data-test="post-image" alt="gato-telefone"/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={() => handleClick1()} name={isClicked1 ? "heart" : "heart-outline"} class={isClicked1 ? "red" : "black"} ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="salve-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/img/respondeai.svg" alt="respondeai"/>
          <div className="texto" data-test="likes-number">
            Curtido por <strong>respondeai</strong> e <strong>outras {!isClicked1 ? likePost01 : likePost01+1} pessoas</strong>
          </div>
        </div>
      </div>
    </div>

    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src="assets/img/barked.svg" alt="barked"/>
          barked
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src="assets/img/dog.svg" data-test="post-image" alt="dog" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={() => handleClick2()} name={isClicked2 ? "heart" : "heart-outline"} class={isClicked2 ? "red" : "black"}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="salve-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
          <div className="texto" data-test="likes-number">
            Curtido por <strong>adorable_animals</strong> e <strong>outras {!isClicked2 ? likePost02 : likePost02+1} pessoas</strong>
          </div>
        </div>
      </div>
    </div>

    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src="assets/img/barked.svg" alt="barked"/>
          barked
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src="assets/img/dog.svg" data-test="post-image" alt="dog" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={() => handleClick3()} name={isClicked3 ? "heart" : "heart-outline"} class={isClicked3 ? "red" : "black"}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="salve-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
          <div className="texto" data-test="likes-number">
            Curtido por <strong>adorable_animals</strong> e <strong>outras {!isClicked3 ? likePost03 : likePost03+1} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  </div>);
}