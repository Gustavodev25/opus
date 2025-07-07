<template>
  <div class="sobrenos-container" ref="sobrenosContainer">
    <div class="sobrenos-conteudo">
      <span class="sobrenos-tag">SOBRE NÓS</span>
      <h1 class="sobrenos-titulo">Especialistas em Marketing e Tecnologia</h1>
      <p class="sobrenos-texto">
        Nascemos da união entre a paixão por marketing e a obsessão por tecnologia. Não somos apenas mais uma agência; somos seu parceiro estratégico na jornada para o crescimento digital. Nosso time é composto por especialistas em tráfego pago, desenvolvedores e designers que trabalham em sinergia para entregar resultados mensuráveis.
      </p>
      <div class="sobrenos-metricas">
        <div class="metrica">
          <span class="metrica-valor">+2 anos</span>
          <span class="metrica-label">de Mercado</span>
        </div>
        <div class="metrica">
          <span class="metrica-valor">+50</span>
          <span class="metrica-label">Clientes Satisfeitos</span>
        </div>
        <div class="metrica">
          <span class="metrica-valor">+R$2M</span>
          <span class="metrica-label">Gerenciados</span>
        </div>
      </div>
    </div>
    <div class="sobrenos-imagem">
      <img src="../assets/sobre2.png" alt="Equipe da Opus">
    </div>
  </div>
</template>

<script setup>
// --- INÍCIO DA SEÇÃO DE ANIMAÇÃO ---
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sobrenosContainer = ref(null);
let gsapContext = null;

onMounted(() => {
  // Usar um contexto GSAP para gerenciar e limpar as animações facilmente
  gsapContext = gsap.context(() => {
    // Seleciona todos os elementos que queremos animar
    const elementsToAnimate = [
      '.sobrenos-tag',
      '.sobrenos-titulo',
      '.sobrenos-texto',
      '.metrica',
      '.sobrenos-imagem'
    ];

    // Cria a animação inicial (os elementos começam invisíveis e um pouco para baixo)
    gsap.from(elementsToAnimate, {
      opacity: 0,
      y: 50, // Começa 50px para baixo
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2, // Anima um elemento de cada vez com um atraso de 0.2s
      scrollTrigger: {
        trigger: sobrenosContainer.value,
        start: 'top 80%', // A animação começa quando 80% do topo do container estiver visível
        toggleActions: 'play none none none', // A animação roda uma vez e para
      }
    });
  }, sobrenosContainer.value); // Escopo do contexto
});

onUnmounted(() => {
  // Limpa todas as animações e triggers quando o componente é destruído
  if (gsapContext) {
    gsapContext.revert();
  }
});
// --- FIM DA SEÇÃO DE ANIMAÇÃO ---
</script>

<style scoped>
.sobrenos-container {
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 70px 40px;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  -webkit-text-size-adjust: 100%;
}

.sobrenos-conteudo {
  flex: 1;
}

.sobrenos-tag {
  color: #56ACD2;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
  display: block;
  font-size: 0.9rem;
}

.sobrenos-titulo {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: white;
}

.sobrenos-texto {
  color: #b5b5b5;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 0.95rem;
}

.sobrenos-metricas {
  display: flex;
  gap: 25px;
}

.metrica {
  display: flex;
  flex-direction: column;
}

.metrica-valor {
  font-size: 22px;
  font-weight: bold;
  color: #56ACD2;
}

.metrica-label {
  color: #b5b5b5;
  font-size: 0.8rem;
}

.sobrenos-imagem {
  flex: 1;
  aspect-ratio: 4 / 5;
  max-height: 550px;
  border-radius: 12px;
  overflow: hidden;

}

.sobrenos-imagem img {
  width: 100%;
  height: 100%;
  /* No desktop, mantemos 'cover' que geralmente fica melhor em telas grandes */
  object-fit: cover;
  display: block;
}


/* --- Media Query para Celulares --- */
@media (max-width: 768px) {
  .sobrenos-container {
    flex-direction: column-reverse;
    padding: 40px 20px;
    gap: 40px;
  }

  .sobrenos-imagem {
    width: 100%;
    aspect-ratio: 4 / 3;
    height: auto;
    max-height: none;
    margin-bottom: 0;
  }

  /* --- NOVA REGRA ADICIONADA --- */
  /* Esta é a mudança que faz a imagem aparecer inteira no celular */
  .sobrenos-imagem img {
    object-fit: contain; /* Garante que a imagem inteira seja visível, sem cortes */
  }
}
</style>