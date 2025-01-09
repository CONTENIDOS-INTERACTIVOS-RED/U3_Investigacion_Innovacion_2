<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Proceso emprendedor en empresas de base tecnológica'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-color-9.mb-5(data-aos='fade-up')
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 El emprendimiento de base tecnológica, es una forma especializada de crear empresas que utilizan el conocimiento científico y tecnológico para generar valor en el mercado. Este tipo de emprendimiento destaca por su alto potencial de crecimiento, su capacidad para generar innovaciones disruptivas y su contribución al desarrollo económico y social. En esta sección, se abordan sus principales fundamentos, conceptos claves y características distintivas.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/1.png', alt='')

    #t_2_1.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.1] Fundamentos del emprendimiento de base tecnológica
    p.mb-4(data-aos='fade-up') El emprendimiento de base tecnológica, se basa en tres componentes claves:
    .bg-full-width.bg-color-3.mb-5(data-aos='fade-up')
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-3
            .bg-color-14.p-3.mb-3.br-15
              p.fw-bold.mb-0 Base tecnológica
            .bg-color-15.p-3.mb-3.br-15
              p.fw-bold.mb-0.text-white Proceso emprendedor
            .bg-color-16.p-3.mb-3.br-15
              p.fw-bold.mb-0 Ecosistema de innovación
          .col-sm-12.col-lg-8
            .bg-color-20.p-3.mb-3.br-15
              p.mb-0 Uso de conocimientos científicos y técnicos, avanzados.
            .bg-color-21.p-3.mb-3.br-15
              p.mb-0 Identificación de oportunidades, validación de mercado y modelos de negocio escalables.
            .bg-color-22.p-3.mb-3.br-15
              p.mb-0 Interacciones entre universidades, empresas, el gobierno y entidades de financiamiento.

    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/2.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-4 Este enfoque ha crecido notablemente en la última década, impulsado por políticas públicas como las de MinCiencias, y las iniciativas de entidades como iNNpulsa y Bancóldex. Estas han fortalecido el ecosistema emprendedor y el potencial transformador de estas iniciativas, en la matriz productiva del país.
        .bg-color-12.p-4
          p.fw-bold Ejemplo práctico
          p.mb-0 En el sector biotecnológico, empresas colombianas están desarrollando soluciones innovadoras para agricultura sostenible, salud y gestión ambiental. Estas combinan conocimientos científicos con modelos de negocio disruptivos, mostrando el impacto significativo del emprendimiento de base tecnológica en sectores claves de la economía.

    h2.mb-3(data-aos='fade-up') Conceptos claves: emprendimiento de base científico-tecnológica
    p.mb-5(data-aos='fade-up') Este tipo de emprendimiento, convierte resultados de investigación en productos y servicios viables en el mercado. Sus características incluyen:
    .bg-full-width.bg-color-3.mb-5(data-aos='fade-up')
      .px-5.py-2
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-6
            ol.lista-ol--cuadro.color-terciario.lista-ol--cuadro--separador.mb-0
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Instituciones gubernamentales: MinCiencias, iNNpulsa.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Entidades financieras: Bancóldex, fondos de capital privado.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Universidades y centros de investigación.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Incubadoras y aceleradoras de empresas.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 Redes de mentores y expertos.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t2/3.svg', alt='')

    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/4.png', alt='')
      .col-sm-12.col-lg-8
        p Contexto colombiano:
        .p-4.bg-color-8.mb-3
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/5.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Universidades, centros de investigación y parques tecnológicos, han fortalecido la transferencia de conocimiento desde la academia, hacia el sector productivo.
        p.mb-0 #[b Ejemplo:] emprendimientos en el sector salud desarrollan dispositivos médicos y soluciones biotecnológicas. Este proceso incluye pruebas de concepto, validaciones clínicas y certificaciones regulatorias.
    h2.mb-3(data-aos='fade-up') Características distintivas de empresas de base tecnológica
    p.mb-5(data-aos='fade-up') Las empresas de base tecnológica (EBT) poseen características que las diferencian de las tradicionales:
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Alta inversión en I+D') 
            p Invierten significativamente en investigación y desarrollo para generar soluciones innovadoras que respondan a las necesidades del mercado.
          div(numero='2' titulo='Personal altamente cualificado') 
            p Cuentan con un equipo con habilidades técnicas y científicas avanzadas, claves para su éxito en la creación de productos y servicios diferenciados.
          div(numero='3' titulo='Orientación hacia mercados dinámicos y globales') 
            p Se enfocan en sectores de rápido crecimiento y alto impacto, aprovechando oportunidades en mercados internacionales.
          div(numero='4' titulo='Protección de propiedad intelectual')
            p Implementan estrategias para proteger sus desarrollos y mantener su ventaja competitiva en el mercado.
          div(numero='5' titulo='Conexión con ecosistemas de innovación')
            p Mantienen cercanía con universidades, centros de investigación y fondos de inversión, esenciales para su crecimiento y desarrollo continuo.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/6.png')

    p.mb-4(data-aos='fade-up') Las aplicaciones en sectores claves, son:
    .bg-full-width.bg-color-3.mb-5(data-aos='fade-up')
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-3
            .bg-color-14.p-3.mb-3.br-15
              p.fw-bold.mb-0.text-center Tecnologías limpias
          .col-sm-12.col-lg-8
            .bg-color-20.p-3.mb-3.br-15
              p.mb-0 Empresas colombianas desarrollan soluciones en energías renovables y gestión ambiental. Estas integran conocimiento científico con modelos de negocio innovadores, generando propuestas competitivas.
            
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-3
            .bg-color-15.p-3.mb-3.br-15
              p.fw-bold.mb-0.text-white.text-center Tecnologías 4.0
          .col-sm-12.col-lg-8
            .bg-color-21.p-3.mb-3.br-15
              p.mb-0 En el sector industrial, EBT implementan IoT, automatización y optimización de recursos.

    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/7.svg', alt='')
      .col-sm-12.col-lg-8
        p.mb-4 El emprendimiento de base tecnológica es un motor esencial para la innovación y el desarrollo económico en Colombia. Su éxito radica en la combinación de capacidades técnicas, científicas y empresariales, junto con la integración efectiva en el ecosistema de innovación. Las empresas de base tecnológica destacan por su capacidad para transformar sectores tradicionales y abrir nuevas oportunidades en mercados globales.
        .bg-color-white.shadow-soft.mb-5
          .px-3.py-4
            .row.justify-content-around.align-items-center
              .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-link.svg", style="width: 70px")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Emprendimiento de base tecnológica: Un reto por cumplir.
                    p.mb-0 Para ampliar los conocimientos sobre emprendimiento tecnológico se recomienda consultar los siguientes recursos:
                  .col-sm-auto
                    a.boton.color-acento-botones(href='https://www.scielo.sa.cr/scielo.php?script=sci_arttext&pid=S1659-33592019000200033' target='_blank')
                      span Ir al sitio
                      i.fas.fa-arrow-right

    #t_2_2.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.2] Ecosistema de emprendimiento tecnológico en Colombia
    p.mb-4(data-aos='fade-up') El ecosistema de emprendimiento tecnológico en Colombia, es una red interconectada que integra instituciones, recursos y actores claves para fomentar la creación y el desarrollo de empresas innovadoras. En la última década, ha experimentado avances significativos, consolidándose como uno de los más dinámicos en América Latina.
    p.mb-4(data-aos='fade-up') Componentes principales:
    .bg-part-1.mb-5(data-aos='fade-up')
      .px-5.py-0-cus
        .row.align-items-center.img-over
          .col-sm-12.col-lg-6
            ol.lista-ol--cuadro.color-terciario.lista-ol--cuadro--separador.mt-5
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 #[b Instituciones gubernamentales:] MinCiencias, iNNpulsa.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 #[b Entidades financieras:] Bancóldex, fondos de capital privado.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 #[b Universidades y centros de investigación.]
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 #[b Incubadoras y aceleradoras de empresas.]
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 #[b Redes de mentores y expertos.]
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t2/8.svg')

    h2.mb-3(data-aos='fade-up') Iniciativas destacadas
    p.mb-5(data-aos='fade-up') Programas como Apps.co, Colombia Científica y los Centros de Desarrollo Tecnológico, han permitido conectar la academia, la industria y el gobierno. Esto ha impulsado sectores claves como el fintech, donde startups colombianas han desarrollado soluciones innovadoras gracias al acceso a capital semilla, mentoría y programas de aceleración.

    h2.mb-3(data-aos='fade-up') Modelos de negocio para empresas tecnológicas
    p.mb-5(data-aos='fade-up') Los modelos de negocio tecnológicos, definen cómo las empresas crean, entregan y capturan valor en mercados en constante transformación digital. Para ser sostenibles, deben adaptarse a dinámicas cambiantes, integrando diversos elementos.
    p.mb-3(data-aos='fade-up') Elementos claves:
    .row.justify-content-center.align-items-center.mb-2(data-aos='fade-up')
      .col-sm-12.col-lg-4
        .bg-color-23.p-4.br-15
          p.mb-0.fw-bold.text-center Propuesta de valor tecnológica.
      .col-sm-12.col-lg-4
        .bg-color-9.p-4.br-15
          p.mb-0.fw-bold.text-center Segmentos de mercado objetivo.
      .col-sm-12.col-lg-4
        .bg-color-19.p-4.br-15
          p.mb-0.fw-bold.text-center Canales digitales de distribución.
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4
        .bg-color-14.p-4.br-15
          p.mb-0.fw-bold.text-center Fuentes de ingresos recurrentes.
      .col-sm-12.col-lg-4
        .bg-color-16.p-4.br-15
          p.mb-0.fw-bold.text-center Estructura de costos optimizada.
      .col-sm-12.col-lg-4
        .bg-color-15.p-4.br-15
          p.mb-0.fw-bold.text-center.text-white Recursos y capacidades tecnológicas claves.

    .bg-full-width.bg-color-12.mb-5(data-aos='fade-up')
      .px-5.py-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/9.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0.fw-bold Ejemplo en Colombia
              p.mb-0 Empresas de servicios digitales, como aquellas que ofrecen Software as a Service (SaaS), han adaptado soluciones globales a las necesidades locales, integrando precios flexibles y soporte personalizado para atender a PyMEs.

    .bg-full-width.bg-fondo-1.mb-5(data-aos='fade-up')
      .px-5.py-4
        p.mb-4.fw-bold Fuentes de financiación en Colombia
        p.mb-4 El financiamiento para emprendimientos tecnológicos en Colombia, combina recursos públicos y privados que atienden distintas etapas empresariales. Las principales entidades incluyen:
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/10.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Bancoldex
                p.mb-0.text-center Ofrece líneas de crédito especializadas para empresas innovadoras.
          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/11.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center iNNpulsa
                p.mb-0.text-center Administra programas de capital semilla y cofinanciación.

          .col-sm-12.col-lg-4.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/12.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center MinCiencias
                p.mb-0.text-center Impulsa convocatorias para proyectos de investigación y desarrollo tecnológico.
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-7
        p.fw-bold Protección de propiedad intelectual
        p La propiedad intelectual es un activo estratégico crucial para las empresas de base tecnológica, que influye directamente en su éxito y viabilidad a largo plazo.
        p.mb-3  Aspectos claves de protección:
        ol.lista-ol--cuadro.color-terciario.lista-ol--cuadro--separador
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0.fw-bold Patentes y modelos de utilidad.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0.fw-bold Derechos de autor y secretos industriales.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0.fw-bold Registro de marcas.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/13.png', alt='')
    h2.mb-3(data-aos='fade-up')  Estrategias en Colombia
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/14.png', alt='')
      .col-sm-12.col-lg-8
        .p-4.bg-color-8.mb-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/15.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 La Superintendencia de Industria y Comercio (SIC), lidera esfuerzos para mejorar los procesos de registro. Programas específicos apoyan a emprendedores en la protección de sus innovaciones, tanto a nivel nacional como internacional.
        p.mb-0 #[b Ejemplo práctico:] en desarrollo de software, las empresas adoptan estrategias mixtas como el registro de derechos de autor para código fuente y la protección de algoritmos clave como secretos comerciales.


    .bg-full-width.bg-color-3.mb-5(data-aos='fade-up')
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Desarrollo del proceso emprendedor
             p.mb-4 El proceso emprendedor de base tecnológica, incluye etapas como ideación, validación, escalabilidad y sostenibilidad, facilitadas por metodologías como Lean Startup y el desarrollo de productos mínimos viables (PMV).
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/desarrollo.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Desarrollo del proceso emprendedor
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t2/16.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.scielo.sa.cr/scielo.php?script=sci_arttext&pid=S1659-33592019000200033' target='_blank' rel='noopener noreferrer') Gómez Zuluaga, M. E. (2019). Emprendimiento de base tecnológica: Un reto por cumplir. Tec Empre, 13(2), pp. 33-44. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://mgaayuda.dnp.gov.co/' target='_blank' rel='noopener noreferrer') Aplicativo para la gestión de proyectos de inversión pública.
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=daJLgygQ0vY' target='_blank' rel='noopener noreferrer') Héctor Escobedo. (2016). Business to Business.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=DDSKWGhxQWg' target='_blank' rel='noopener noreferrer') Negocios En Tu Mundo. (2018). Ecosistema de emprendimiento y Transformación digital - [Negocios en Tm].

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=CYMsldJx9dA' target='_blank' rel='noopener noreferrer') OpenWebinars. (2021). Qué es el PMV.

          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
