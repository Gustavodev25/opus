<template>
  <div ref="mainContainerRef" class="jornada-container">
    <div ref="stickyContentRef" class="jornada-sticky-content">
      
      <div ref="filmstripRef" class="jornada-filmstrip">

        <section class="jornada-scene scene-intro">
          <div class="intro-content">
            <h1 class="scene-title">A Anatomia do Crescimento</h1>
            <p class="scene-subtitle">Resultados não acontecem por acaso. Eles são construídos através de uma estratégia que acompanha o seu cliente em cada etapa da jornada.</p>
            <div class="scroll-indicator">
              <span>Role para descobrir nossa estratégia</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </section>

        <section class="jornada-scene scene-funil">
          <div class="funil-content">
            <div class="funil-header">
              <span class="etapa-numero">ETAPA 01</span>
              <h2 class="etapa-titulo">Atração (Topo)</h2>
              <p class="etapa-descricao">O primeiro passo é ser encontrado. Criamos conteúdo e campanhas que atraem um grande volume de visitantes qualificados, que talvez ainda não conheçam sua marca, mas buscam soluções que você oferece.</p>
            </div>
            <div class="etapa-taticas">
              <div class="taticas-card">Marketing de Conteúdo</div>
              <div class="taticas-card">SEO e Busca Orgânica</div>
              <div class="taticas-card">Anúncios em Redes Sociais</div>
              <div class="taticas-card">Google Ads (Pesquisa)</div>
            </div>
          </div>
        </section>

        <section class="jornada-scene scene-funil">
           <div class="funil-content">
            <div class="funil-header">
              <span class="etapa-numero">ETAPA 02</span>
              <h2 class="etapa-titulo">Engajamento (Meio)</h2>
              <p class="etapa-descricao">Aqui, transformamos visitantes em leads. Nutrimos o interesse com materiais ricos, construindo um relacionamento de confiança e posicionando sua marca como a melhor solução para o problema deles.</p>
            </div>
            <div class="etapa-taticas">
              <div class="taticas-card">Landing Pages de Alta Conversão</div>
              <div class="taticas-card">E-mail Marketing e Automação</div>
              <div class="taticas-card">Remarketing Estratégico</div>
              <div class="taticas-card">Webinars e E-books</div>
            </div>
          </div>
        </section>

        <section class="jornada-scene scene-funil">
           <div class="funil-content">
            <div class="funil-header">
              <span class="etapa-numero">ETAPA 03</span>
              <h2 class="etapa-titulo">Conversão (Fundo)</h2>
              <p class="etapa-descricao">É o momento da decisão. Focamos em levar os leads mais qualificados à ação, seja uma compra, um pedido de orçamento ou uma demonstração, através de ofertas diretas e otimização da experiência do usuário (CRO).</p>
            </div>
            <div class="etapa-taticas">
              <div class="taticas-card">Campanhas de Vendas</div>
              <div class="taticas-card">Otimização de Conversão (CRO)</div>
              <div class="taticas-card">Google Shopping</div>
              <div class="taticas-card">Páginas de Produto Otimizadas</div>
            </div>
          </div>
        </section>

        <section class="jornada-scene scene-final">
           <div class="final-content">
            <h1 class="scene-title">O Ciclo se Reinicia: Fidelização</h1>
            <p class="scene-subtitle">Um cliente conquistado é o começo de um novo ciclo. Estratégias de pós-venda garantem a satisfação, aumentam o LTV e transformam clientes em defensores da sua marca. Pronto para aplicar esta jornada no seu negócio?</p>
            <button class="cta-button" @click="$emit('irParaSobreNos')">Planejar Minha Estratégia</button>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mainContainerRef = ref(null);
const stickyContentRef = ref(null);
const filmstripRef = ref(null);
let gsapContext = null;

onMounted(() => {
  gsapContext = gsap.context(() => {
    
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function() {
        const filmstrip = filmstripRef.value;
        // O valor 400vw representa a distância de scroll das 4 cenas após a primeira
        const amountToScroll = filmstrip.offsetWidth - window.innerWidth;

        gsap.to(filmstrip, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: mainContainerRef.value,
            start: "top top",
            end: () => `+=${amountToScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        const scenes = gsap.utils.toArray('.jornada-scene');
        scenes.forEach(scene => {
          const contentToAnimate = scene.querySelectorAll('.etapa-titulo, .etapa-descricao, .etapa-numero, .taticas-card, .scene-title, .scene-subtitle, .cta-button');
          gsap.from(contentToAnimate, {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              trigger: scene,
              containerAnimation: gsap.getTweensOf(filmstrip)[0],
              start: "left 70%",
              toggleActions: "play resume resume reverse",
            }
          });
        });
      },

      "(max-width: 768px)": function() {
        const scenes = gsap.utils.toArray('.jornada-scene');
        scenes.forEach(scene => {
          const contentToAnimate = scene.querySelectorAll('.etapa-titulo, .etapa-descricao, .etapa-numero, .taticas-card, .scene-title, .scene-subtitle, .cta-button');
           gsap.from(contentToAnimate, {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            scrollTrigger: {
              trigger: scene,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          });
        });
      }
    });

  }, mainContainerRef.value);
});

onUnmounted(() => {
  if (gsapContext) {
    gsapContext.revert();
  }
});
</script>

<style scoped>
/* ESTRUTURA PRINCIPAL (igual ao anterior) */
.jornada-container {
  position: relative;
  background-color: #090a0f;
  color: white;
}
.jornada-sticky-content {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
.jornada-filmstrip {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 500%; /* 5 cenas */
}
.jornada-scene {
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
}

/* CENA INTRO E FINAL (reaproveitado) */
.scene-intro, .scene-final {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  text-align: center;
}
.intro-content, .final-content {
  max-width: 800px;
}
.scene-title {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.1;
  color: white;
}
.scene-subtitle {
  font-size: 1.2rem;
  color: #969696;
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.scroll-indicator {
  margin-top: 50px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #969696;
}

/* NOVO ESTILO: CENAS DO FUNIL */
.scene-funil {
  background-color: #090a0f;
}
.funil-content {
  max-width: 900px;
  width: 100%;
  text-align: center;
}
.funil-header {
  margin-bottom: 60px;
}
.etapa-numero {
  color: #56ACD2;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 0.9rem;
}
.etapa-titulo {
  font-size: 3.5rem;
  font-weight: bold;
  margin-top: 10px;
  color: white;
}
.etapa-descricao {
  font-size: 1.1rem;
  color: #969696;
  max-width: 700px;
  margin: 20px auto 0 auto;
  line-height: 1.6;
}
.etapa-taticas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}
.taticas-card {
  background-color: #1A1A1A;
  border: 1px solid #2d323c;
  padding: 25px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.taticas-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}


/* CTA BUTTON (reaproveitado) */
.cta-button {
  margin-top: 40px;
  padding: 15px 30px;
  background-color: #56ACD2;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.cta-button:hover {
  transform: scale(1.05);
  background-color: #6ac1e6;
}

/* RESPONSIVIDADE */
@media (max-width: 768px) {
  .jornada-sticky-content {
    position: static;
    height: auto;
  }
  .jornada-filmstrip {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  .jornada-scene {
    height: auto;
    min-height: 100vh;
    padding: 60px 20px;
  }
  .scene-title {
    font-size: 2.5rem;
  }
  .etapa-titulo {
    font-size: 2rem;
  }
  .etapa-taticas {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>