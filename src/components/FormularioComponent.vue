<template>
  <div class="container">
    <div class="header-section">
      <h1>Vamos Conversar?</h1>
      <p>Pronto para impulsionar seu negócio? Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer.</p>
    </div>
    
    <div class="form-section">
      <h2>Solicite uma Proposta</h2>
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label for="nome">Nome Completo *</label>
            <input 
              type="text" 
              id="nome"
              v-model="form.nome"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input 
              type="email" 
              id="email"
              v-model="form.email"
              required
            />
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="empresa">Empresa</label>
            <input 
              type="text" 
              id="empresa"
              v-model="form.empresa"
            />
          </div>
          <div class="form-group">
            <label for="servico">Serviço de Interesse</label>
            <select 
              id="servico"
              v-model="form.servico"
            >
              <option value="">Selecione um serviço</option>
              <option value="desenvolvimento">Desenvolvimento Web</option>
              <option value="marketing">Marketing Digital</option>
              <option value="consultoria">Consultoria</option>
            </select>
          </div>
        </div>
        
        <div class="form-group full-width">
          <label for="orcamento">Orçamento Mensal</label>
          <input 
            type="text" 
            id="orcamento"
            v-model="form.orcamento"
            placeholder="Ex: R$ 5.000,00"
          />
        </div>
        
        <div class="form-group full-width">
          <label for="mensagem">Mensagem *</label>
          <textarea 
            id="mensagem"
            v-model="form.mensagem"
            placeholder="Conte mais sobre seu projeto aqui!"
            required
          ></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Enviar proposta</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormularioComponent',
  data() {
    return {
      form: {
        nome: '',
        email: '',
        empresa: '',
        servico: '',
        orcamento: '',
        mensagem: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Substitua pelo número desejado (apenas números, com DDD e país, ex: 5511999999999)
      const numeroWhatsapp = '553784032642'
      const texto = 
        `*Novo contato pelo site!*\n\n` +
        `*Nome:* ${this.form.nome}\n` +
        `*Email:* ${this.form.email}\n` +
        `*Empresa:* ${this.form.empresa || '-'}\n` +
        `*Serviço de Interesse:* ${this.form.servico || '-'}\n` +
        `*Orçamento Mensal:* ${this.form.orcamento || '-'}\n` +
        `*Mensagem:*\n${this.form.mensagem}`

      const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header-section {
  text-align: center;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.header-section h1 {
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 0;
}

.header-section p {
  color: #b5b5b5;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.form-section {
  background: #1A1A1A;
  border: 1px solid #333333;
  border-radius:20px;
  padding: 40px;
  max-width: 700px;
  margin: 0 auto;
}

.form-section h2 {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  margin-bottom: 20px;
}

.form-group label {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: #161616;
  border: 1px solid #333333;
  border-radius: 6px;
  color: #ffffff;
  font-size: 1rem;
  padding: 12px 16px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #5a9fd4;
}

.form-group select {
  cursor: pointer;
}

.form-group select option {
  background: #3a3a3a;
  color: #ffffff;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-group textarea::placeholder {
  color: #888;
}

.submit-btn {
  background: #183E62;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 40px;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background: #1c4972;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .container {
    padding: 40px 15px;
  }
  
  .header-section h1 {
    font-size: 2rem;
  }
  
  .header-section p {
    font-size: 1rem;
  }
  
  .form-section {
    padding: 30px 20px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .form-section h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .header-section h1 {
    font-size: 1.8rem;
  }
  
  .form-section {
    padding: 25px 15px;
  }
}
</style>