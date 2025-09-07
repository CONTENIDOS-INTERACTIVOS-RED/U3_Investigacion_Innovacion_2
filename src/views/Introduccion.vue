<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'Introducción'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: imagen-texto-color 4:8
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-5 La mejora continua constituye uno de los principios fundamentales en los entornos ágiles y, en particular, dentro del marco de trabajo Scrum. Esta unidad aborda en profundidad las estrategias, herramientas y prácticas destinadas a fortalecer los procesos de revisión y ajuste en equipos ágiles, permitiendo así la evolución progresiva de los productos y el desarrollo de la colaboración. Comprender y aplicar correctamente las técnicas de retrospección, los indicadores de mejora y la implementación efectiva del feedback, se convierte en una competencia clave para cualquier profesional involucrado en la gestión ágil de proyectos.

          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 Al finalizar esta unidad, se espera que el estudiante sea capaz de identificar y aplicar técnicas efectivas de retrospectiva, interpretar indicadores de desempeño y calidad del equipo, utilizar métricas ágiles para el seguimiento del progreso, y fomentar una cultura de retroalimentación constructiva. Estos aprendizajes permitirán fortalecer la capacidad de análisis y mejora, tanto a nivel de producto como de equipo, consolidando así una cultura organizacional enfocada en la adaptación y la excelencia.

      // Bloque: párrafo simple
      p.mb-4(data-aos="fade-up") Dada la creciente demanda de profesionales capaces de liderar procesos de mejora continua en contextos complejos y cambiantes, esta unidad adquiere una relevancia particular en la formación de futuros ingenieros de software. La aplicación práctica de los conocimientos desarrollados, será visible en la optimización de procesos, la calidad del software entregado y en el fortalecimiento de equipos multidisciplinarios.
      
      p.mb-5(data-aos="fade-up") La unidad está organizada en tres grandes temas:

      // Bloque: iconos-color (3 bloques)
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Tema 1
                p.mb-0 Técnicas de retrospección efectiva.
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Tema 2
                p.mb-0 Indicadores de mejora.
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/6.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Tema 3
                p.mb-0 Estrategias para la implementación de feedback continuo.

      // Bloque: bg-full-color
      .bg-full-width.bg-color-1.mb-0
        .p-4.p-md-5
          p.mb-4(data-aos="fade-up") A lo largo de cada tema se ofrecerán ejemplos prácticos, análisis de casos y actividades reflexivas, que permitirán consolidar los conceptos.
          
          p.mb-0(data-aos="fade-up") Se invita al estudiante a asumir una participación activa, reflexiva y crítica, frente a los contenidos, contribuyendo con sus experiencias previas y observaciones en cada una de las actividades propuestas. Para un mejor aprovechamiento de esta unidad, se recomienda tener claros los conceptos básicos de Scrum y haber participado previamente en ejercicios de gestión de equipos ágiles. Esta unidad representa un espacio clave para fortalecer la capacidad analítica y el liderazgo en procesos de mejora dentro del marco de la ingeniería de software ágil.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
