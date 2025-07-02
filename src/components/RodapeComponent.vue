<template>
  <footer class="rodape">
    <div class="rodape-content">
      <span>&copy; {{ new Date().getFullYear() }} Opus. Todos os direitos reservados.</span>
      <!-- <span class="creditos">Desenvolvido por Gustavo</span> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'RodapeComponent'
}
</script>

<style scoped>
.rodape {
  width: 100vw;
  background: #1A1A1A;
  color: #b5b5b5;
  border-top: 1px solid #333333;
  padding: 3vw 0 2vw 0;
  text-align: center;
  margin-top: 4vw;
  box-sizing: border-box;
}
.rodape-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  font-size: 1rem;
}
.creditos {
  font-size: 0.95rem;
  color: #56acd2;
}
@media (max-width: 600px) {
  .rodape {
    font-size: 0.95rem;
    padding: 2vw 0 1vw 0;
    margin-top: 2vw;
  }
}
</style>
