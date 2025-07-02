<template>
  <section class="solucoes-digitais-container">
    <div class="solucoes-content">
      <h2 class="solucoes-title">Soluções Digitais</h2>
      <p class="solucoes-desc">
        Potencialize seu negócio com tecnologia, automação e inovação sob medida.<br>
        Nossas soluções digitais transformam ideias em resultados reais.
      </p>
      <div class="homem-img-wrapper">
        <img src="../assets/homem.png" alt="Homem Soluções Digitais" class="homem-img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolucoesDigitais'
}
</script>

<style scoped>
.solucoes-digitais-container {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222224;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
}

.solucoes-content {
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 0px 20px;
  box-sizing: border-box;
  color: white;
}

.solucoes-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 18px;
  letter-spacing: 1px;
  text-align: center;
}

.solucoes-desc {
  font-size: 1.35rem;
  margin-bottom: 38px;
  opacity: 0.92;
  color: white;
  text-align: center;
  max-width: 761px;
}

.homem-img-wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  min-height: 400px;
  height: 100%;
  flex: 1;
}

.homem-img {
  max-width: 821px;
  width: 100%;
  height: auto;
  border-radius: 32px;
  object-fit: contain;
  display: block;
}

@media (max-width: 900px) {
  .solucoes-title {
    font-size: 2.1rem;
  }
  .solucoes-desc {
    font-size: 1.05rem;
  }
  .homem-img {
    max-width: 821px;
    border-radius: 28px;
  }
  .solucoes-content {
    min-height: 70vh;
    padding: 30px 8px 0px 8px;
  }
}

@media (max-width: 600px) {
  .solucoes-title {
    font-size: 1.3rem;
  }
  .solucoes-desc {
    font-size: 0.95rem;
  }
  .homem-img {
    max-width: 821px;
    border-radius: 18px;
  }
  .solucoes-content {
    min-height: 60vh;
    padding: 18px 2px 0px 2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .homem-img-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    min-height: 200px;
    height: 100%;
    flex: 1;
    position: static;
    left: auto;
    right: auto;
    bottom: auto;
    z-index: auto;
    background: transparent;
    box-shadow: none;
  }
  .solucoes-digitais-container {
    position: relative;
    min-height: 100vh;
    padding-bottom: 0 !important;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>