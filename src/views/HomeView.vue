<template>
  <div id="app">
    <main>
      <section
        id="Home-Banner"
        v-bind:style="{ backgroundImage: 'url(/BannerHomePage.jpg)' }"
        class="sect-w Background-center"
      >
        <div class="Wellcome-Banner">
          <div class="image-logo">
            <img src="/CircloLogo.svg" alt="logo-circlo" />
          </div>
          <br />
          <p>CONECTANDO MUNDOS, CRIANDO LAÇOS.</p>
        </div>
      </section>

      <section id="messages-allDay">
        <div class="box-mesgs-day"></div>

        <div class="text-input">
          <div class="title-text-inp">
            <h1>
              E aí, qual é a boa para hoje?
              <span class="emoji-bx"
                ><img
                  src="/man-shrugging-emoji.png"
                  alt="man-shrugging" /></span
              ><span class="emoji-bx"
                ><img src="/thinking-face-emoji.png" alt="thinking-face"
              /></span>
            </h1>
          </div>

          <div class="input-box">
            <div class="input-search">
              <input
                class="back-input"
                v-bind:style="{ backgroundImage: 'url(/addMsg.svg)' }"
                placeholder="FALA AÍ A BOA:"
                type="text"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
     
  <style>
.card {
  transition: 0.2s;
}

.card:hover {
  opacity: 0.5;
}

:root {
  line-height: 1.5;
  font-weight: 400;

  --Font-Mono-Regular: "IBM Plex Mono Regular";
  --Font-Mono-Medium: "IBM Plex Mono Medium";
  --Font-Mono-SemiBold: "IBM Plex Mono SemiBold";
  --Font-Founders: "Founders Grotesk";

  --Nardo-Grey: #b9b9b9;
  --Ermine-White: #ffffff;
  --Silver-Birch: #484848;
  --Mica-Blue: #004aff;
  --Magno-Finish: #000000;
  --Myan-Orange: #d7753f;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.text-catup {
  text-transform: uppercase;
}

.text-upper h2 {
  text-transform: uppercase;
  font-family: var(--Font-Mono-SemiBold);
}

.pointer {
  cursor: pointer;
}

footer {
  margin-top: 60px;
}

.flex-flow {
  flex-flow: row wrap;
  width: 100%;
  display: flex;
}

.left,
.right {
  width: 50%;
}

a {
  font-weight: 500;
  text-decoration: inherit;
  transition: 0.2s;
  color: var(--Myan-Orange);
}

a:hover {
  color: var(--Nardo-Grey);
}

h1,
h2,
h3 {
  font-family: var(--Font-Mono-SemiBold);
  line-height: 1.1;
}

h1 {
  font-size: 3.2em;
}

h2 {
  font-size: 2.2em;
}

h3 {
  font-size: 1.2em;
}

h4 {
  font-size: 1.1em;
}

p {
  font-size: 1.23em;
}

button {
  border: 1px solid var(--Nardo-Grey);
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: var(--Myan-Orange);
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.Background-center {
  background: center center / cover no-repeat;
}

body {
  background-color: var(--Magno-Finish);
  font-family: monospace;
  overflow-x: hidden;
}

.Center {
  max-width: 1700px;
  margin: 0 auto;
}

.Question-Box {
  margin-bottom: 20vw;
}

.text {
  flex: 0.9;
}

.sect-w {
  height: 1000px;
  width: 100%;
}

.sect-i {
  padding: 100px 0;
  width: 100%;
}

main {
  text-align: center;
  margin: 0 auto;
}

.boxCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0;
  margin: 0 auto;
}

* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "Founders Grotesk";
  src: url("../assets/Fonts/founders-grotesk.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "IBM Plex Mono Regular";
  src: url("../assets/Fonts/IBMPlexMono-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "IBM Plex Mono Medium";
  src: url("../assets/Fonts/IBMPlexMono-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "IBM Plex Mono SemiBold";
  src: url("../assets/Fonts/IBMPlexMono-SemiBold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.Header-top {
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  background: linear-gradient(
    180deg,
    var(--Magno-Finish) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 100;
  font-family: var(--Font-Mono-Regular);
}

.Info-Inst {
  display: flex;
  justify-content: space-between;
  font-family: var(--Font-Mono-Regular);
}

@media screen and (max-width: 1500px) {
  .Info-Inst {
    font-size: 13px !important;
    display: flex;
    flex-wrap: wrap;
  }
}

/* HOME BANNER */

#Home-Banner {
  position: relative;
}

.Wellcome-Banner {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 1200px;
  width: 50%;
}

.image-logo img {
  width: 80%;
}

.Wellcome-Banner p {
  font-size: 1.5em;
  font-family: var(--Font-Mono-Regular);
  margin: 15px 0;
}

@media screen and (max-width: 768px) {
  .Wellcome-Banner p {
    font-size: 1.2em;
  }
}

@media screen and (max-width: 768px) {
  .Wellcome-Banner {
    width: 90% !important;
  }
}

/* MENSSAGE 24HRS */

#messages-allDay {
  background-color: var(--Ermine-White);
  padding: 30px 5px;
}

.emoji-bx img {
  width: 5vw;
}

.text-input {
  margin: 30px 80px;
  width: 50%;
}

.box-mesgs-day {
  height: 80vh;
  width: 100%;
  background: red;
}

.title-text-inp {
  margin: 120px 0;
  text-align: left;
}

.title-text-inp h1 {
  color: var(--Magno-Finish);
  font-size: 4.7em;
  font-family: var(--Font-Mono-Medium);
}

.input-search input {
  width: 100%;
  border-radius: 70px;
  border: 1px solid #cbcbcb;
  background: 11px 9px / 46px no-repeat;
  padding-left: 77px;
  padding-top: 22px;
  padding-bottom: 22px;
  text-transform: uppercase;
}

.input-search {
  display: flex;
  justify-content: center;
  margin: 0 0 60px 0;
}

.input-search input[placeholder] {
  font-family: var(--Font-Mono-SemiBold);
  font-size: 16px;
  color: var(--Magno-Finish);
}

.back-input::placeholder {
  color: var(--Magno-Finish);
}

.input-box {
  background-color: #e2e2e2;
  border-radius: 70px;
}

/* MEDIA SIZE */ 

@media (max-width: 1200px) {
  .left,
  .right {
    width: 100%;
  }

  .image-right {
    padding: 60px 30px;
  }

  .Content-Sobre {
    padding: 100px 30px;
  }

  #Home-Banner {
    padding: 500px 0;
  }

  .sect-w {
    height: auto;
  }

  .Wellcome-Banner {
    width: 90%;
  }

  footer {
    flex-direction: column;
  }
}


@media screen and (max-width: 600px) {
  h1 {
    font-size: 2.5em !important;
  }

  h2 {
    font-size: 1.8em !important;
  }

  h3 {
    font-size: 1em !important;
  }

  p {
    font-size: 1.1em !important;
  }

  h4 {
    font-size: 1.1em;
  }

  #Home-Banner {
    padding: 400px 0;
  }

}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 2em !important;
  }

  h2 {
    font-size: 1.5em !important;
  }

  h3 {
    font-size: 0.9em !important;
  }

  p {
    font-size: 1em !important;
  }

  h4 {
    font-size: 0.8em;
  }
}
</style>