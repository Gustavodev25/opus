<template>
    <!-- Topbar fixa com a logo centralizada horizontalmente e largura igual ao hero-container -->
    <div class="topbar">
        <div class="topbar-inner">
            <div class="logo">
                <img src="../assets/opussemfundo.png" alt="Logo Opus" class="logo-img" />
            </div>
        </div>
    </div>
    <div class="hero-container">
        <!-- Texto à esquerda -->
        <div class="text-content">
            <!-- Título -->
            <h1 class="main-title">
                Transforme seu negócio<br>
                com tráfego pago<br>
                e tecnologia
            </h1>

            <!-- Descrição -->
            <p class="description">
                Somos especialistas em gerar resultados através de campanhas de tráfego pago otimizadas e soluções
                tecnológicas personalizadas para o seu negócio.
            </p>

            <!-- Botão -->
            <button class="cta-button" @click="scrollToCases">
                Mais sobre
            </button>
        </div>

        <!-- Imagem à direita -->
        <div class="image-section">
            <div class="woman-cards-wrapper">
                <!-- Card 1 -->
                <div class="woman-card woman-card-1">
                    <span class="woman-card-icon">📈</span>
                    <div class="woman-card-value">+87%</div>
                    <div class="woman-card-label">Crescimento</div>
                </div>
                <!-- Card 2 -->
                <div class="woman-card woman-card-2">
                    <span class="woman-card-icon">💡</span>
                    <div class="woman-card-value">+62%</div>
                    <div class="woman-card-label">Engajamento</div>
                </div>
                <!-- Card 3 -->
                <div class="woman-card woman-card-3">
                    <span class="woman-card-icon">🚀</span>
                    <div class="woman-card-value">+95%</div>
                    <div class="woman-card-label">Conversão</div>
                </div>
                <div class="woman-container">
                    <!-- Blur animado atrás da mulher -->
                    <div class="woman-blur-glow"></div>
                    <img src="../assets/mulher.png" alt="Mulher com celular" class="woman-image">
                    <!-- Feixe de luz removido -->
                </div>
            </div>
        </div>

        <!-- Efeitos de Fundo -->
        <div class="bg-effects">
            <!-- Feixes e orbs bem desfocados e no fundo -->
            <div class="light-beam beam-blur"></div>
            <div class="light-beam beam-blue beam-blur"></div>
            <div class="light-beam beam-white beam-blur"></div>
            <div class="radial-beam beam-blur"></div>
            <div class="cross-beam beam-blur"></div>
            <div class="light-orb orb-1 beam-blur"></div>
            <div class="light-orb orb-2 beam-blur"></div>
        </div>
    </div>
    <!-- Feixes de luz globais para toda a página -->
    <div class="global-bg-effects">
        <div class="global-light-beam global-beam-1 beam-blur"></div>
        <div class="global-light-beam global-beam-2 beam-blur"></div>
        <div class="global-radial global-radial-1 beam-blur"></div>
    </div>
    <ServicosComponent />
    <div style="margin-top: 80px;"><SolucoesDigitais /></div>
    <div style="margin-top: -2px;"><TesteAnimacao /></div>
    <div id="cases"></div>
    <CasesComponent />
    <SobrenosComponent />
    <FormularioComponent />
    <RodapeComponent />
</template>

<script>
import ServicosComponent from '../components/ServicosComponent.vue'
import CasesComponent from '../components/CasesComponent.vue'
import SobrenosComponent from '../components/SobrenosComponent.vue'
import FormularioComponent from '../components/FormularioComponent.vue'
import RodapeComponent from '../components/RodapeComponent.vue'
import TesteAnimacao from '../components/TesteAnimacao.vue'

import SolucoesDigitais from '../components/SolucoesDigitais.vue'

export default {
    name: 'TelaInicialView',
    components: {
        ServicosComponent,
        TesteAnimacao,
        CasesComponent,
        SobrenosComponent,
        FormularioComponent,
        RodapeComponent,
        SolucoesDigitais
    },
    methods: {
        scrollToCases() {
            const el = document.getElementById('cases');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped>
/* Topbar fixa com logo à esquerda */
.topbar {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    /* Removido: position: fixed; top: 0; left: 0; z-index: 100; */
    color: white;
    background: none;
    box-shadow: none;
}

.topbar-inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 32px;
    display: flex;
    align-items: center;
    height: 100%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 10;
    /* margin removido */
}

.logo-icon {
    font-size: 24px;
    filter: brightness(0) invert(1);
}



.logo-img {
    height: 102px;
    width: auto;
    display: block;
    object-fit: contain;
    filter: brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.18));

}

/* Ajuste para o conteúdo não ficar sob a topbar */
.hero-container {
    min-height: 100vh;
    width: 100%;
    color: white;
    position: relative;
    overflow: visible; /* Alterado de hidden para visible */
    font-family: 'Arial', sans-serif;
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 0;
    box-sizing: border-box;
    /* margin-top: 0; */
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
}

/* Desktop: Layout lado a lado (texto à esquerda, imagem à direita) */
@media (min-width: 769px) {
    .hero-container {
        flex-direction: row;
        justify-content: space-between;
        padding: 40px;
    }
    .topbar-inner {
        padding-left: 32px;
    }
    .text-content {
        flex: 1;
        order: 1;
        max-width: 600px;
        padding-right: 40px;
    }
    .image-section {
        flex: 1;
        order: 2;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}

/* Mobile: imagem em cima, depois título, descrição e botão */
@media (max-width: 768px) {
    .topbar {
        height: 56px;
    }
    .topbar-inner {
        padding-left: 12px;
        max-width: 100vw;
    }
    .hero-container {
        margin-top: 56px;
        padding: 20px;
        gap: 30px;
        max-width: 100vw;
        flex-direction: column;
        text-align: center;
    }
    .image-section {
        order: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
    }
    .text-content {
        order: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
    }
    .main-title {
        order: 1;
        margin-bottom: 12px;
    }
    .description {
        order: 2;
        margin-bottom: 18px;
    }
    .cta-button {
        order: 3;
        margin-bottom: 0;
    }
}

/* Título */
.main-title {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: #ffffff;
    margin-top: 70px;
}

@media (max-width: 768px) {
    .main-title {
        margin-bottom: 20px;
    }
}

/* Descrição */
.description {
    font-size: clamp(19px, 2vw, 16px);
    line-height: 1.6;
    margin-bottom: 40px;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
    .description {
        margin-bottom: 30px;
    }
}

/* Botão */
.cta-button {
    background: linear-gradient(135deg, #2a4a6b 0%, #1e3a5f 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 15px 30px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
    background: linear-gradient(135deg, #3a5a7b 0%, #2e4a6f 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
    .cta-button {
        padding: 12px 25px;
        font-size: 14px;
    }
}

/* Wrapper para os cards e a mulher */
.woman-cards-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(320px, 36vw, 480px);
    height: clamp(380px, 44vw, 560px);
}

/* Container da Imagem */
.woman-container {
    position: relative;
    overflow: visible; /* Permite que o blur/glow ultrapasse o container */
    width: clamp(250px, 30vw, 400px);
    height: clamp(320px, 40vw, 500px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

@media (max-width: 768px) {
    .woman-cards-wrapper {
        width: 300px;
        height: 370px;
    }
    .woman-container {
        width: 220px;
        height: 280px;
    }
}

/* Cards ao redor da mulher */
/* Cards ao redor da mulher com animação flutuante */
.woman-card {
    position: absolute;
    min-width: 88px;
    min-height: 68px;
    background: rgba(255,255,255,0.13);
    border-radius: 16px;
    box-shadow: 0 4px 18px 0 rgba(86,172,210,0.13), 0 1.5px 8px 0 rgba(0,0,0,0.10);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 8px 10px;
    z-index: 3;
    backdrop-filter: blur(6px);
    border: 1.2px solid rgba(86,172,210,0.18);
    color: #fff;
    font-family: inherit;
    transition: transform 0.2s;
    animation: woman-card-float 4.2s ease-in-out infinite;
}
.woman-card-1 {
    top: 2%;
    left: -18%;
    animation-delay: 0s;
}
.woman-card-2 {
    top: 75%;
    left: -8%;
    animation-delay: 1.2s;
}
.woman-card-3 {
    top: 18%;
    right: -18%;
    animation-delay: 2.1s;
}
.woman-card:hover {
    transform: scale(1.06) translateY(-4px);
    box-shadow: 0 8px 32px 0 rgba(86,172,210,0.22), 0 2px 12px 0 rgba(0,0,0,0.13);
}
@keyframes woman-card-float {
    0%, 100% {
        transform: translateY(0px) scale(1);
    }
    50% {
        transform: translateY(-18px) scale(1.04);
    }
}
.woman-card-icon {
    font-size: 2.1rem;
    margin-bottom: 6px;
    filter: drop-shadow(0 1px 2px rgba(86,172,210,0.18));
}
.woman-card-value {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 2px;
    color: #56acd2;
    text-shadow: 0 1px 4px rgba(0,0,0,0.13);
}
.woman-card-label {
    font-size: 1rem;
    opacity: 0.85;
    letter-spacing: 0.01em;
}
@media (max-width: 768px) {
    .woman-card {
        min-width: 70px;
        min-height: 54px;
        padding: 7px 6px 6px 6px;
        font-size: 0.92rem;
    }
    .woman-card-1 {
        top: 0%;
        left: -14%;
        animation-delay: 0s;
    }
    .woman-card-2 {
        top: 78%;
        left: -4%;
        animation-delay: 1.2s;
    }
    .woman-card-3 {
        top: 12%;
        right: -14%;
        animation-delay: 2.1s;
    }
}

/* Blur animado atrás da mulher - menor e mais fraco */
.woman-blur-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%;
    height: 110%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(86,172,210,0.22) 0%, rgba(86,172,210,0.10) 60%, transparent 100%);
    filter: blur(36px);
    z-index: 0;
    pointer-events: none;
    animation: woman-glow-pulse 2.8s ease-in-out infinite;
}

.woman-image {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

@keyframes woman-glow-pulse {
    0%, 100% {
        opacity: 0.65;
        filter: blur(48px);
    }
    50% {
        opacity: 1;
        filter: blur(64px);
    }
}

/* Efeitos de Fundo */
.bg-effects {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.light-beam {
    position: absolute;
    top: 8%;
    left: 58%;
    width: 340px;
    height: 800px;
    background: linear-gradient(120deg, rgba(86,172,210,0.22) 0%, rgba(255,255,255,0.13) 40%, transparent 100%);
    transform: rotate(16deg);
    filter: blur(12px);
    opacity: 0.7;
    pointer-events: none;
    z-index: 1;
    animation: beam-pulse 5s ease-in-out infinite;
}

/* Feixe azul mais intenso */
.beam-blue {
    left: 35%;
    top: 20%;
    width: 180px;
    height: 600px;
    background: linear-gradient(110deg, rgba(86,172,210,0.35) 0%, transparent 100%);
    transform: rotate(6deg);
    filter: blur(18px);
    opacity: 0.45;
    animation-delay: 1.2s;
}

/* Feixe branco suave */
.beam-white {
    left: 70%;
    top: 30%;
    width: 120px;
    height: 400px;
    background: linear-gradient(130deg, rgba(255,255,255,0.18) 0%, transparent 100%);
    transform: rotate(25deg);
    filter: blur(20px);
    opacity: 0.25;
    animation-delay: 2.2s;
}

/* Feixe radial circular */
.radial-beam {
    position: absolute;
    left: 50%;
    top: 60%;
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(86,172,210,0.18) 0%, transparent 80%);
    transform: translate(-50%, -50%);
    filter: blur(30px);
    opacity: 0.35;
    pointer-events: none;
    z-index: 1;
    animation: radial-pulse 7s ease-in-out infinite;
}

/* Feixe cruzando diagonal */
.cross-beam {
    position: absolute;
    left: 10%;
    top: 0;
    width: 80px;
    height: 100vh;
    background: linear-gradient(100deg, rgba(255,255,255,0.10) 0%, transparent 100%);
    transform: rotate(-18deg);
    filter: blur(12px);
    opacity: 0.3;
    z-index: 1;
    pointer-events: none;
    animation: cross-beam-move 10s linear infinite;
}

@keyframes beam-pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}
@keyframes radial-pulse {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 0.55; }
}
@keyframes cross-beam-move {
    0% { left: 10%; }
    50% { left: 13%; }
    100% { left: 10%; }
}

/* Orbs continuam */
.light-orb {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%);
    filter: blur(1px);
    animation: orb-float 6s ease-in-out infinite;
}
.orb-1 {
    width: clamp(60px, 8vw, 100px);
    height: clamp(60px, 8vw, 100px);
    top: 30%;
    right: 10%;
    animation-delay: 0s;
}
.orb-2 {
    width: clamp(40px, 6vw, 60px);
    height: clamp(40px, 6vw, 60px);
    bottom: 20%;
    right: 20%;
    animation-delay: 3s;
}
@keyframes orb-float {
    0%, 100% { transform: translateY(0px) scale(1);}
    50% { transform: translateY(-20px) scale(1.1);}
}

/* Feixes de luz globais */
.global-bg-effects {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 0;
}
.global-light-beam {
    position: absolute;
    width: 420px;
    height: 900px;
    background: linear-gradient(120deg, rgba(86,172,210,0.13) 0%, rgba(255,255,255,0.09) 40%, transparent 100%);
    filter: blur(18px);
    opacity: 0.35;
    pointer-events: none;
}
.global-beam-1 {
    left: 0;
    top: 0;
    transform: rotate(10deg);
    animation: global-beam-move 12s ease-in-out infinite;
}
.global-beam-2 {
    right: 0;
    top: 30%;
    width: 250px;
    height: 600px;
    transform: rotate(-15deg);
    opacity: 0.22;
    animation: global-beam-move 10s ease-in-out infinite reverse;
}
.global-light-beam.global-beam-3 {
    left: 40vw;
    top: 60vh;
    width: 180px;
    height: 400px;
    transform: rotate(25deg);
    opacity: 0.18;
    animation: global-beam-move 14s ease-in-out infinite;
}
/* Radial global */
.global-radial {
    position: absolute;
    left: 70vw;
    top: 80vh;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(86,172,210,0.10) 0%, transparent 80%);
    filter: blur(40px);
    opacity: 0.18;
    pointer-events: none;
    z-index: 0;
    animation: radial-pulse 10s ease-in-out infinite;
}
.global-radial-1 {
    left: 10vw;
    top: 10vh;
    width: 200px;
    height: 200px;
    opacity: 0.13;
}
@keyframes global-beam-move {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 0.55; }
}

/* Responsividade adicional para telas muito pequenas */
@media (max-width: 480px) {
    .hero-container {
        padding: 15px;
        gap: 20px;
    }

    .woman-container {
        width: 240px;
        height: 300px;
    }

    .main-title {
        font-size: 24px;
    }

    .description {
        font-size: 14px;
    }
}

/* Todos os efeitos de fundo com blur forte e opacidade baixa */
.beam-blur {
    filter: blur(40px) brightness(0.8) !important;
    opacity: 0.18 !important;
    z-index: 0 !important;
}

/* Ajuste para garantir que nada fique sobrepondo o conteúdo */
.bg-effects,
.global-bg-effects {
    z-index: 0 !important;
}

.hero-container,
.text-content,
.image-section {
    position: relative;
    z-index: 2;
}

/* Remover o feixe de luz destacado da mulher */
.woman-light-beam {
    display: none !important;
}

/* Remover scroll lateral forçando largura máxima e overflow-x */
html, body {
    width: 100%;
    overflow-x: hidden;
}

:root {
    width: 100vw;
    overflow-x: hidden;
}
</style>