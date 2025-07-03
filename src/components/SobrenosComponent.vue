<template>
    <section class="sobrenos-section">
        <div class="sobrenos-container">
            <div class="sobrenos-texto">
                <h2>Quem Somos</h2>
                <p>
                    A Opus nasceu da paixão por transformar negócios através da tecnologia e marketing digital. Somos
                    uma agência especializada em tráfego pago e soluções tecnológicas que impulsionam o crescimento
                    sustentável.
                    Nossa missão é simples: gerar mais leads, vendas e crescimento para nossos clientes através de
                    estratégias data-driven e tecnologias de ponta.
                    Com uma equipe multidisciplinar de especialistas em marketing digital, desenvolvimento, análise de
                    dados e UX, oferecemos soluções completas e integradas.
                </p>
            </div>
            <div class="sobrenos-imagem">
                <img src="../assets/sobre.jpg"
                    alt="" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SobrenosComponent'
}
</script>

<style scoped>
.sobrenos-section {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 0 0 0;
    background: transparent;
}

.sobrenos-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    border-radius: 18px;
    display: flex;
    align-items: stretch; /* faz os filhos terem a mesma altura */
    justify-content: space-between;
    gap: 40px;
    min-height: 360px; /* igual ao .imagem do case */
}

.sobrenos-texto {
    flex: 1;
    color: #fff;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sobrenos-texto h2 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 18px;
    color: #FFFFFF;
}

.sobrenos-texto p {
    font-size: 1.15rem;
    color: #d1d5db;
    line-height: 1.7;
}

.sobrenos-imagem {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 100%;
}

.sobrenos-imagem img {
    width: 100%;
    height: 360px;
    background-color: #1A1A1A;
    border: 1px solid #333333;
    border-radius: 10px;
}

@media (max-width: 900px) {
    .sobrenos-container {
        flex-direction: column;
        padding: 40px 16px;
        gap: 24px;
    }

    .sobrenos-imagem img {
        width: 100%;
        max-width: 320px;
    }

    .sobrenos-texto {
        text-align: center;
    }
}
</style>
