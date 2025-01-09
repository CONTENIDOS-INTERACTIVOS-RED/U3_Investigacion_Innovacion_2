<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Evaluación de proyectos de investigación-innovación'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        .bg-color-12.p-4.mb-4
          p.mb-0 En el contexto actual, marcado por la transformación digital y la sostenibilidad, es crucial evaluar y gestionar proyectos de investigación e innovación, para mantener la competitividad en un mercado cada vez más dinámico y exigente. Este enfoque resulta clave, tanto a nivel global como en el caso específico de Colombia, donde el ecosistema de innovación está en construcción. Las iniciativas gubernamentales han buscado fortalecer la conexión entre la academia, el sector productivo y el Estado, ofreciendo oportunidades únicas para avanzar en este campo.
        p.mb-0 Además, el impacto de estos proyectos trasciende lo económico, considerando también dimensiones sociales, ambientales y culturales. La evaluación desde una perspectiva integral, permite valorar tanto aspectos cuantitativos como cualitativos, asegurando decisiones estratégicas informadas.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/1.png', alt='')
    h2.mb-3(data-aos='fade-up') Elementos claves para evaluar proyectos
    p.mb-5(data-aos='fade-up') Según Albornoz (2009), los factores a considerar abarcan todas las etapas del proyecto, desde su concepción hasta la ejecución y el seguimiento de resultados. Esto incluye:
    .bg-part-1.mb-5(data-aos='fade-up')
      .px-5.py-0-cus
        .row.align-items-center.img-over
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t1/2.svg')
          .col-sm-12.col-lg-7
            ol.lista-ol--cuadro.color-terciario.lista-ol--cuadro--separador.mt-5
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Identificación de objetivos claros y medibles.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Análisis de recursos disponibles (humanos, técnicos y financieros).
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Implementación de indicadores y métricas específicas.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Seguimiento continuo y ajuste basado en resultados intermedios.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 Evaluación final y medición del impacto global.


    h2.mb-3(data-aos='fade-up') Indicadores de éxito y métricas de impacto
    p.mb-5(data-aos='fade-up') La evaluación de proyectos, es un proceso sistemático que considera múltiples variables. En este contexto, los indicadores de éxito y las métricas de impacto, son herramientas esenciales para cuantificar y cualificar resultados. Estos permiten medir:
    .bg-full-width.bg-fondo-8.mb-5(data-aos='fade-up')
      .p-4.p-md-5
        .row.justify-content-center.mb-0
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas='col-12 col-lg-6')
              // Económicos
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/4.svg' alt='Indicador económico')
                    h4.text-center Económicos
                    p.mb-0.text-center Retorno sobre la inversión, reducción de costos, creación de valor económico.

              // Sociales
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/5.svg' alt='Indicador social')
                    h4.text-center Sociales
                    p.mb-0.text-center Impacto en la comunidad, generación de empleo, mejora en calidad de vida.

              // Ambientales
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/6.svg' alt='Indicador ambiental')
                    h4.text-center Ambientales
                    p.mb-0.text-center Reducción de la huella de carbono, sostenibilidad de procesos.

              // Conocimiento e innovación
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/7.svg' alt='Indicador de conocimiento')
                    h4.text-center Conocimiento e innovación
                    p.mb-0.text-center Generación de nuevo conocimiento y transferencia tecnológica.

              // Organizacionales
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/8.svg' alt='Indicador organizacional')
                    h4.text-center Organizacionales
                    p.mb-0.text-center Mejora de procesos internos y fortalecimiento de alianzas estratégicas.

          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
              img(src='@/assets/curso/t1/3.png')

    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/9.png', alt='')
      .col-sm-12.col-lg-7
        p.fw-bold Relevancia de los indicadores
        p.mb-3 De acuerdo con Boero (2020), una combinación equilibrada de métricas cuantitativas y cualitativas, es fundamental para evaluar el impacto de los proyectos de manera integral. Este enfoque permite:
        ol.lista-ol--cuadro.color-terciario.lista-ol--cuadro--separador
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 #[b Identificar áreas de mejora:] facilita ajustes en tiempo real durante la ejecución.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 #[b Optimizar recursos:] evita desperdicios y asegura una asignación eficiente.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 #[b Toma de decisiones estratégicas:] proporciona información confiable para planificar futuros proyectos.

    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-10
        p.fw-bold Metodologías aplicadas en Colombia
        p.mb-4 En los últimos años, las políticas de ciencia, tecnología e innovación, impulsadas por el Ministerio de Ciencia, Tecnología e Innovación han fortalecido la implementación de evaluaciones rigurosas. Las instituciones académicas y empresariales, han adoptado herramientas avanzadas que garantizan un análisis integral de sus proyectos.
        p.mb-0 El proceso de evaluación es esencial para medir el éxito de proyectos y estrategias, asegurando su alineación con las prioridades organizacionales: 

      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/t1/10.svg', alt='')

    .bg-full-width.bg-fondo-slider.mb-5(data-aos='fade-up')
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          // Definición de objetivos
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/11.png', alt='')
            .col-sm-12.col-lg-7
              h5 Definición de objetivos
              p Identificar metas claras, alineadas con las prioridades estratégicas.

          // Recolección de datos
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/12.png', alt='')
            .col-sm-12.col-lg-7
              h5 Recolección de datos
              p Utilizar fuentes primarias y secundarias, incluyendo entrevistas, encuestas y estadísticas.

          // Implementación de ajustes
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/13.png', alt='')
            .col-sm-12.col-lg-7
              h5 Implementación de ajustes
              p Realizar cambios basados en resultados preliminares y retroalimentación de stakeholders.

          // Evaluación final
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t1/14.png', alt='')
            .col-sm-12.col-lg-7
              h5 Evaluación final
              p Medir resultados contra los objetivos iniciales y documentar lecciones aprendidas.


    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos='fade-up')
      .px-5.py-4
        .row.justify-content-around.align-items-center
          .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-video.svg", style="width: 70px")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Evaluación de Proyectos y análisis de sensibilidad de Proyectos
                p.mb-0 Para ampliar los conocimientos en la evaluación de proyectos que se han estudiado, se recomienda explorar el siguiente video:
              .col-sm-auto
                a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=ECEyS3TfVT8' target='_blank')
                  span Ver video
                  i.fas.fa-arrow-right


    h2.mb-3(data-aos='fade-up')  Indicadores claves de desempeño (KPI) en proyectos de innovación
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-7
        p Los indicadores claves de desempeño (KPI), en proyectos de innovación, son métricas fundamentales para monitorear y evaluar el éxito de las iniciativas. Estos indicadores permiten medir aspectos como el retorno de la inversión, la eficiencia en el uso de recursos, el tiempo de desarrollo, la satisfacción del usuario final y el impacto en el mercado.
        .bg-color-1.p-4
          p.mb-0 Para definir KPI pertinentes, es crucial entender los objetivos del proyecto y alinearlos con la estrategia organizacional. Algunos de los indicadores más relevantes, incluyen:
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/15.png', alt='')

    .bg-full-width.bg-fondo-8.mb-0(data-aos='fade-up')
      .p-4.p-md-5
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
            img(src='@/assets/curso/t1/21.png')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas='col-12 col-lg-6')
              // Tasa de éxito
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/16.svg' alt='Indicador de tasa de éxito')
                    h4.text-center Tasa de éxito
                    p.mb-0.text-center En la implementación de innovaciones.

              // Tiempo promedio
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/17.svg' alt='Indicador de tiempo promedio')
                    h4.text-center Tiempo promedio
                    p.mb-0.text-center De desarrollo de nuevos productos.

              // Porcentaje de ingresos
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/18.svg' alt='Indicador de porcentaje de ingresos')
                    h4.text-center Porcentaje de ingresos generados
                    p.mb-0.text-center Por productos o servicios innovadores.

              // Cantidad de patentes
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/19.svg' alt='Indicador de patentes')
                    h4.text-center Cantidad de patentes registradas
                    p.mb-0.text-center.

              // Nivel de satisfacción
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white.br-15
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/20.svg' alt='Indicador de satisfacción')
                    h4.text-center Nivel de satisfacción de los usuarios
                    p.mb-0.text-center Con las innovaciones implementadas
        p.mb-0 Las organizaciones han adaptado sus KPI para reflejar las características del ecosistema de innovación nacional. Según el Ministerio de Ciencia, Tecnología e Innovación, empresas colombianas integran indicadores que miden:
          
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4
        .p-4.bg-color-1.br-15.h-100.text-center
          p.mb-0 Colaboración con universidades y centros de investigación.

      .col-sm-12.col-lg-4
        .p-4.bg-color-19.br-15.h-100.text-center
          p.mb-0 Aprovechamiento de incentivos gubernamentales.

      .col-sm-12.col-lg-4
        .p-4.bg-color-9.br-15.h-100.text-center
          p.mb-0 Impacto en la competitividad regional.

    p.mb-4(data-aos='fade-up') Un caso práctico se observa en el sector industrial, donde empresas manufactureras miden la adopción de tecnologías 4.0 mediante KPI como:
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        .bg-color-14.p-3.mb-3.br-15
          p.fw-bold.mb-0 Grado de automatización de procesos.
        .bg-color-15.p-3.mb-3.br-15
          p.fw-bold.mb-0.text-white Implementación de soluciones IoT #[i (Internet of Things)].
        .bg-color-16.p-3.mb-3.br-15
          p.fw-bold.mb-0 Eficiencia energética.
        .bg-color-17.p-3.mb-0.br-15
          p.fw-bold.mb-0 Reducción de desperdicios en la cadena productiva.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/22.png', alt='')

    p.mb-4(data-aos='fade-up') De acuerdo con Pacheco Coello (2021), los KPI deben seguir el enfoque SMART (Específicos, Medibles, Alcanzables, Relevantes y Temporales), lo que permite una evaluación objetiva y precisa del desempeño. Este enfoque también facilita decisiones informadas y la mejora continua de los procesos de innovación.
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-10
        h2.mb-3 Evaluación de viabilidad técnica y económica
        p.mb-0 La evaluación de viabilidad técnica y económica, es un paso esencial en la gestión de proyectos de innovación, porque determina si un proyecto es factible y garantiza su sostenibilidad. Este análisis abarca, tanto aspectos técnicos como económicos:
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/t1/23.svg', alt='')
    .bg-full-width.bg-fondo-11.mb-4(data-aos='fade-up')
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/24.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Viabilidad técnica
                p.mb-0.text-center Examen de los recursos tecnológicos, humanos y materiales necesarios.
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/25.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Viabilidad económica
                p.mb-0.text-center Análisis del retorno de la inversión, flujo de caja proyectado, costos operativos, y los ingresos esperados.

    .bg-full-width.bg-color-12.mb-0(data-aos='fade-up')
      .px-5.py-4
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t1/26.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 Este tipo de evaluación, ha adquirido relevancia por la competencia en la obtención de recursos y la necesidad de optimizar inversiones en innovación. Instituciones financieras y fondos de inversión, exigen análisis rigurosos que demuestren, tanto viabilidad técnica como rentabilidad esperada.

    .bg-full-width.bg-color-3.mb-5(data-aos='fade-up')
      .px-5.py-2
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t1/27.svg', alt='')
          .col-sm-12.col-lg-6
            p.mb-0 En el sector tecnológico, las startups colombianas están adoptando metodologías ágiles como:
            ol.lista-ol--cuadro.color-terciario.lista-ol--cuadro--separador.mb-0
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Pruebas de concepto.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Prototipos mínimos viables (MVP).
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Validación temprana con usuarios potenciales.

    p.mb-4(data-aos='fade-up') Estas metodologías permiten realizar ajustes, antes de inversiones significativas. Además, Lira Briceño (2020), destaca el uso de herramientas financieras avanzadas, como:
    .row.justify-content-center.mb-4(data-aos='fade-up')
      .col-sm-12.col-lg-4
        .p-4.bg-color-1.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/28.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Valor Presente Neto (VPN).

      .col-sm-12.col-lg-4
        .p-4.bg-color-1.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/28.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Tasa Interna de Retorno (TIR).


      .col-sm-12.col-lg-4
        .p-4.bg-color-1.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/28.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Período de recuperación de la inversión.
      
    p.mb-4(data-aos='fade-up') Estas herramientas, combinadas con análisis técnicos detallados, ofrecen una evaluación integral que reduce los riesgos y respalda decisiones estratégicas en proyectos de innovación.    
    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos='fade-up')
      .px-5.py-4
        .row.justify-content-around.align-items-center
          .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-link.svg", style="width: 70px")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Reflexión teórica acerca de los criterios de evaluación para proyectos de investigación, desarrollo e innovación. 
                p.mb-0 Para ampliar los conocimientos sobre evaluación de proyectos, se recomienda consultar los siguientes recursos:
              .col-sm-auto
                a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=ECEyS3TfVT8' target='_blank')
                  span Ir al sitio
                  i.fas.fa-arrow-right
    h2.mb-3(data-aos='fade-up') Gestión de riesgos en proyectos innovadores
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-7
        .bg-color-9.p-4.mb-4
          p.mb-0 La gestión de riesgos en proyectos innovadores, asegura la viabilidad y el éxito de las iniciativas al identificar, evaluar, priorizar y mitigar, amenazas y oportunidades. Este proceso estructurado utiliza herramientas como matrices de probabilidad e impacto, análisis de escenarios, planes de contingencia y sistemas de monitoreo continuo.
        ol.lista-ol--cuadro.color-terciario.lista-ol--cuadro--separador.mb-0
            li.mb-0.d-flex
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 La volatilidad económica y cambios regulatorios, han hecho indispensable la implementación de sistemas de alerta temprana y equipos especializados.
            li.mb-0.d-flex
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 En sectores como el comercio electrónico, se gestionan riesgos relacionados con ciberseguridad, logística, adopción tecnológica y satisfacción del cliente mediante diversificación de proveedores, sistemas redundantes y pruebas piloto.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/29.png', alt='')

    .bg-full-width.bg-color-3.mb-5(data-aos='fade-up')
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/30.png', alt='')
          .col-lg-7
             h2.mb-4 Metodologías de evaluación
             p.mb-4 Las metodologías para evaluar proyectos de I+D+i, permiten medir desempeño e impacto, considerando aspectos técnicos, económicos, sociales y ambientales. En Colombia, herramientas como matrices FODA, ROI, evaluación multicriterio y análisis costo-beneficio, se adaptan al contexto local, incluyendo políticas nacionales, incentivos fiscales y desarrollo regional.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/Metodologias_Evaluacion.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Metodologías de evaluación

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.redalyc.org/journal/870/87070383002/html/' target='_blank' rel='noopener noreferrer')  Rodríguez Muñoz, R. & Socorro Castro, A. R. (2021). Reflexión teórica acerca de los criterios de evaluación para proyectos de investigación, desarrollo e innovación. Ciencia y Sociedad, 46(4), pp. 9-30. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://plataformasigp.minciencias.gov.co:7003/FormularioProyectos/' target='_blank' rel='noopener noreferrer') Plataforma SIGP
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=Fa5v2LFzMZQ' target='_blank' rel='noopener noreferrer') OpenWebinars. (2018). HERRAMIENTAS PARA SCRUM: TRELLO [video]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=k1ZiQSk_pok' target='_blank' rel='noopener noreferrer') Juan Rojas. (2024). Metodo AHP y Vikor Parte 1 [video]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=FEqhnoLUeZ0' target='_blank' rel='noopener noreferrer') Hansen Rosales Palacios. (2020). MS PROJECT 2016 (1/2) - RUTA CRITICA Y DIAGRAMA GANTT CASO PRACTICO Y REAL, SIMPLE [video]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=ECEyS3TfVT8' target='_blank' rel='noopener noreferrer') Universidad Continental - Modalidad a distancia. (2021). Evaluación de Proyectos y análisis de sensibilidad de Proyectos [video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
