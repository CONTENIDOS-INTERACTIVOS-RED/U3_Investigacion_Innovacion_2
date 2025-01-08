<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8.bg-color-2
          .p-4
            p.mb-0 La investigación y la innovación, son pilares fundamentales para el desarrollo económico, social y ambiental, en el contexto global actual. Estas actividades permiten la generación de conocimiento, la solución de problemáticas complejas y la creación de valor en diversos sectores. Evaluar el impacto de los proyectos de investigación e innovación, se ha convertido en una práctica esencial para optimizar recursos, medir resultados y garantizar su alineación con los objetivos estratégicos de las organizaciones y las necesidades de la sociedad.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/intro/1.png', alt='')
  
      .bg-full-width.bg-fondo-11.mb-0
        .px-5.py-4
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/intro/2.svg', alt='')
            .col-sm-12.col-lg-8
              p.mb-4 En este documento, se exploran temas claves como la evaluación de proyectos de investigación e innovación, los fundamentos del emprendimiento de base tecnológica y su impacto en diferentes dimensiones. También se destacan las herramientas metodológicas para evaluar viabilidad técnica y económica, así como los indicadores claves de desempeño y sostenibilidad, considerando, tanto aspectos cuantitativos como cualitativos. Estos elementos ofrecen una perspectiva integral para comprender cómo la innovación contribuye al bienestar social y al desarrollo sostenible.
              .bg-color-1.p-4
                p.mb-0 Finalmente, se analizan casos específicos del ecosistema colombiano, identificando las oportunidades y desafíos en la gestión de proyectos innovadores. Además, se subraya la importancia de enfoques colaborativos, adaptados al contexto local, para maximizar el impacto en comunidades, mercados y el medio ambiente. Este enfoque integral busca proporcionar herramientas prácticas para fortalecer las capacidades de evaluación y gestión de proyectos, contribuyendo al avance de la ciencia, la tecnología y la innovación.
  
  
  
  
  
  
  
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
