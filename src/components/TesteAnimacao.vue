<template>
  <div class="scroll-centralizada" ref="pinSection">
    <div class="animation-section" ref="animationSection">
      <div class="text-container">
        <!-- Primeiro texto: Eleve sua empresa -->
        <div class="text-section main-text" ref="mainText">
          <h1>Eleve sua empresa</h1>
        </div>
        
        <!-- Segundo texto: Imagem Opus -->
        <div class="text-section background-text" ref="backgroundText">
          <img src="../assets/opussemfundo.png" alt="Opus" class="background-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TesteAnimacao',
  async mounted() {
    // Importa GSAP e ScrollTrigger corretamente
    let gsap, ScrollTrigger;
    try {
      // Importa via npm se disponível, senão via CDN global
      gsap = (await import('gsap')).default || window.gsap;
      ScrollTrigger = (await import('gsap/ScrollTrigger')).default || window.ScrollTrigger;
      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        this.initAnimation(gsap);
      }
    } catch (e) {
      // Fallback para CDN global se não estiver instalado via npm
      gsap = window.gsap;
      ScrollTrigger = window.ScrollTrigger;
      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        this.initAnimation(gsap);
      } else {
        // Fallback estático
        this.initWithoutGSAP();
      }
    }
  },
  methods: {
    initWithoutGSAP() {
      // Mostra ambos textos sem animação
      if (this.$refs.mainText) {
        this.$refs.mainText.style.opacity = '1';
        this.$refs.mainText.style.display = 'flex';
        this.$refs.mainText.style.clipPath = 'inset(0 0% 0 0)';
      }
      if (this.$refs.backgroundText) {
        this.$refs.backgroundText.style.opacity = '1';
        this.$refs.backgroundText.style.display = 'flex';
        this.$refs.backgroundText.style.clipPath = 'inset(0 0 0 100%)';
      }
    },
    initAnimation(gsap) {
      const mainText = this.$refs.mainText;
      const backgroundText = this.$refs.backgroundText;
      const pinSection = this.$refs.pinSection;

      // Estado inicial
      gsap.set(mainText, { clipPath: "inset(0 0% 0 0)" });
      gsap.set(backgroundText, { clipPath: "inset(0 0 0 100%)" });

      gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      })
      .to(mainText, {
        clipPath: "inset(0 100% 0 0)",
        ease: "none"
      }, 0)
      .to(backgroundText, {
        clipPath: "inset(0 0 0 0%)",
        ease: "none"
      }, 0);
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.scroll-centralizada {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: relative;
  overflow: hidden;
}

.animation-section {
  width: 100%;
  height: 100vh;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.text-container {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.main-text,
.background-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-text {
  z-index: 2;
  clip-path: inset(0 0% 0 0);
  transition: clip-path 0.2s;
}

.main-text h1 {
  font-size: 4rem;
  font-weight: bold;
  color: black;
  margin: 0;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.background-text {
  background: black;
  z-index: 1;
  clip-path: inset(0 0 0 100%);
  transition: clip-path 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-img {
  max-width: 70vw;
  max-height: 60vh;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
  filter: drop-shadow(2px 2px 8px rgba(0,0,0,0.25));
}

/* Responsividade */
@media (max-width: 768px) {
  .animation-section {
    min-height: 250px;
  }
  .text-container,
  .main-text,
  .background-text {
    height: 100vh;
    min-height: 250px;
  }
  .main-text h1 {
    font-size: 2.5rem;
  }
  .background-img {
    max-width: 90vw;
    max-height: 30vh;
  }
}

@media (max-width: 480px) {
  .main-text h1 {
    font-size: 2rem;
  }
  .background-img {
    max-width: 98vw;
    max-height: 18vh;
  }
  .text-container,
  .main-text,
  .background-text {
    height: 100vh;
    min-height: 200px;
  }
}
</style>