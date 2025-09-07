<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Indicadores de mejora'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: texto-iconobloque-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 En el contexto de las metodologías ágiles, la mejora continua es uno de los pilares fundamentales para el éxito de los equipos y los proyectos. Para que esta mejora sea tangible y efectiva, es necesario contar con mecanismos que permitan medir el desempeño, identificar obstáculos y evaluar el impacto de las acciones implementadas. Aquí es donde entran en juego los indicadores de mejora.

          .bg-color-4.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los indicadores ágiles son herramientas cuantitativas y cualitativas que facilitan la toma de decisiones basadas en datos reales y objetivos. A diferencia de métricas tradicionales rígidas, los indicadores en entornos ágiles están diseñados para ser flexibles, adaptables y alineados con los valores de transparencia, colaboración y entrega de valor continuo.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-5 Su correcta utilización permite a los equipos no solo monitorear el progreso en cada sprint o iteración, sino también anticipar riesgos, optimizar procesos y garantizar la calidad del producto final. En este sentido, los indicadores actúan como un espejo que refleja la salud del proyecto y la efectividad de las prácticas implementadas.

          .bg-color-6.p-4(data-aos="fade-left").mb-5
            p.mb-0 En este tema, se explorarán diferentes tipos de indicadores claves, que todo equipo ágil debe conocer y manejar, incluyendo la velocidad del equipo, los indicadores de calidad como defectos y deuda técnica, y los KPIs ágiles que permiten medir el avance y la mejora continua. Se profundizará en cómo estos indicadores deben interpretarse, las ventajas y limitaciones de cada uno, y ejemplos prácticos de su aplicación en situaciones reales de proyectos Scrum.
          
          p(data-aos="fade-left") Este conocimiento no solo fortalece la gestión y planificación, sino que también fomenta la cultura de mejora constante y responsabilidad compartida, pilares que sustentan el éxito a largo plazo en la adopción de metodologías ágiles.

      // Bloque: titulo-segundo
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Definición y utilidad de los indicadores ágiles

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 En el marco de las metodologías ágiles, los indicadores son elementos fundamentales que permiten a los equipos medir, analizar y mejorar sus procesos y resultados. Se entiende por indicadores ágiles aquellas métricas específicas que reflejan el desempeño de un equipo en la entrega de valor, la calidad del producto y la eficiencia de las prácticas implementadas durante el desarrollo de un proyecto.

          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-3 Un #[strong indicador ágil] es una medida cuantificable que permite evaluar aspectos claves del desarrollo y gestión de un proyecto bajo un enfoque ágil.
            p.mb-3 A diferencia de métricas tradicionales rígidas y basadas exclusivamente en el cumplimiento de planes, los #[strong indicadores] ágiles se enfocan en aspectos dinámicos, como la capacidad de adaptación, la entrega continua, y la satisfacción del cliente.
            p.mb-0 #[strong Estos indicadores] no solo reflejan el estado actual del proyecto, sino que facilitan la identificación de áreas de mejora y la toma de decisiones informadas para optimizar el trabajo del equipo.
          
          p(data-aos="fade-left") Los indicadores ágiles cumplen múltiples funciones que son esenciales para la eficacia de un equipo Scrum:
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")

      // Bloque: infografia-1
      .bg-full-width.bg-color-info.mb-5
        .px-4.px-md-5.pt-4.pt-lg-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/infografia1.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="16%" y="6%" numero="+")
                  h5 Facilitación de la mejora continua
                  p.mb-0 Al analizar estos indicadores en reuniones de retrospectiva, el equipo puede plantear acciones concretas para optimizar su rendimiento.

                .bg-color-white.box-shadow.p-3(x="20%" y="35%" numero="+")
                  h5 Medición del progreso
                  p.mb-0 Permiten visualizar cómo avanza el equipo hacia los objetivos del sprint y del proyecto, proporcionando información clara y objetiva.

                .bg-color-white.box-shadow.p-3(x="60%" y="12.5%" numero="+")
                  h5 Detección temprana de problemas
                  p.mb-0 Ayudan a identificar posibles obstáculos o desviaciones en las tareas, facilitando la corrección rápida, antes de que los problemas se amplifiquen.

                .bg-color-white.box-shadow.p-3(x="63%" y="31%" numero="+")
                  h5 Fomento de la transparencia
                  p.mb-0 Al ser visibles para todos los miembros del equipo y stakeholders, los indicadores generan confianza y alinean expectativas.

                .bg-color-white.box-shadow.p-3(x="60%" y="48%" numero="+")
                  h5 Soporte en la toma de decisiones
                  p.mb-0 Los datos obtenidos a partir de indicadores permiten a Scrum Masters, Product Owners y otros responsables, tomar decisiones basadas en evidencia, reduciendo riesgos y aumentando la efectividad.

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.mb-5.text-white
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[strong Ejemplo práctico.] Consideremos un equipo Scrum que utiliza el indicador de velocidad (story points completados por sprint). Si durante varios sprints la velocidad promedio del equipo es de 30 puntos, pero en el sprint actual baja a 20 puntos, este indicador señala un posible problema. La reducción podría deberse a tareas más complejas, falta de recursos o impedimentos no detectados. Esta información será fundamental para que el equipo investigue, analice causas y tome medidas correctivas, en la siguiente retrospectiva.

      // Bloque: titulo-segundo
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Métrica de velocidad del equipo

      p.mb-4 La métrica de velocidad es una herramienta clave en la gestión de proyectos ágiles, ya que permite conocer cuánto trabajo puede completar un equipo en un ciclo determinado.

      // Bloque: anexo-img
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/6.png', alt='')

            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Métrica de velocidad del equipo
              p.mb-4(data-aos="fade-right") En el PDF Métrica de velocidad del equipo, se analiza en detalle cómo esta medida, expresada en story points, facilita la planificación realista, el seguimiento del desempeño y la mejora continua en marcos como Scrum. A través de ejemplos prácticos y recomendaciones, se presentan los usos adecuados de esta métrica para fortalecer la autonomía del equipo y la previsibilidad del desarrollo.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.mb-0 Métrica de velocidad del equipo

      // Bloque: titulo-segundo
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Indicadores de calidad: defectos y deuda técnica

      // Bloque: imagen-color-texto
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 En el contexto de los marcos ágiles como Scrum, los indicadores de calidad son fundamentales para garantizar que el producto entregado no solo sea funcional, sino también sostenible, mantenible y escalable. Dos de los principales indicadores que permiten evaluar la calidad de un producto en desarrollo, son: los defectos y la deuda técnica.
          
          p(data-aos="fade-left") Ambos elementos actúan como señales de alerta y mecanismos de mejora continua. Su monitoreo constante permite a los equipos tomar decisiones informadas sobre prioridades, tiempos de entrega y refactorización del código, contribuyendo a la salud a largo plazo del software.

      // Bloque: párrafo simple
      h2.mb-4 ¿Qué es un defecto?

      // Bloque: color-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 En términos simples, un defecto (bug) es cualquier desviación entre el comportamiento esperado del software y el comportamiento real observado. Los defectos pueden ser descubiertos durante las pruebas internas del sprint, en revisiones del producto o incluso, por los usuarios finales en producción.
          
          p(data-aos="fade-left").mb-3 #[strong Ejemplo.] Si un botón que debe guardar información en una base de datos, en cambio, borra el contenido ingresado, se considera un defecto funcional.
          
          p(data-aos="fade-left") Los defectos se clasifican normalmente por:
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in").mb-4.mb-lg-0

      // Bloque: iconos-color
      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Severidad
                p.mb-0 ¿Qué tan grave es el impacto del error?
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Prioridad
                p.mb-0 ¿Qué tan urgente es su corrección?
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Frecuencia
                p.mb-0 ¿Con qué regularidad ocurre?

      // Bloque: párrafo simple
      p.mb-5 Medir los defectos ayuda a responder preguntas claves como: ¿estamos disminuyendo la cantidad de errores en cada sprint? ¿Qué tipo de errores se repiten con frecuencia? ¿En qué módulos del sistema se concentra la mayor cantidad de fallas?

      // Bloque: párrafo simple
      h2.mb-4 ¿Qué es la deuda técnica?

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-5 La deuda técnica #[em (technical debt)] representa el costo implícito de decisiones técnicas que priorizan soluciones rápidas sobre soluciones correctas o sostenibles. Esta deuda se acumula cuando el equipo opta por atajos en la codificación, pospone pruebas unitarias o deja tareas de documentación pendientes.

          .bg-color-4.p-4(data-aos="fade-left").mb-5
            p.mb-0 El término #[strong deuda técnica] fue introducido por Ward Cunningham, uno de los autores del Manifiesto Ágil, quien lo comparó con una deuda financiera: puede ser útil en el corto plazo, pero si no se paga, los intereses se acumulan y el costo se multiplica.
          
          p.mb-4 #[strong Ejemplo.] Un equipo decide lanzar una funcionalidad sin pruebas automatizadas, para cumplir con la fecha prometida. El resultado es que, más adelante, cada pequeño cambio requiere pruebas manuales, lo que ralentiza los sprints futuros.

      // Bloque: párrafo simple
      h2.mb-4 Indicadores claves para monitorear defectos y deuda técnica
      p.mb-4 A continuación, se presentan algunas métricas e indicadores ágiles, relacionados con estos dos conceptos:

      // Bloque: tabla
      .titulo-figura.mb-2
        h5 Tabla 1. 
        span Indicadores claves

      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th.bg-color-tabla.text-white Indicador
              th.bg-color-tabla.text-white Descripción
          tbody
            tr
              td Número de defectos abiertos.
              td Cuántos errores aún no han sido resueltos.
            tr
              td Tasa de defectos por sprint.
              td Cuántos bugs se reportan en promedio, en cada sprint.
            tr
              td Tiempo medio de resolución.
              td Tiempo que se tarda en resolver un error, desde su detección.
            tr
              td Porcentaje de cobertura de pruebas.
              td Qué tanto del código está cubierto por pruebas automatizadas.
            tr
              td Índice de refactorización.
              td Qué porcentaje del código, se refactoriza cada sprint.
            tr
              td Ratio de deuda técnica.
              td Estimación del esfuerzo necesario para resolver deuda técnica pendiente.

      // Bloque: párrafo simple
      p.mb-5 Las buenas prácticas para reducir defectos y deuda técnica, son:

      // Bloque: slyfc 8:4
      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.pb-md-3.pt-md-4
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema2/13.svg", style="max-width: 90px")
                  h5.text-center #[strong Integración continua y pruebas automatizadas]
                  p.mb-0 Ayudan a detectar errores tempranamente, evitando su acumulación.

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema2/14.svg", style="max-width: 90px")
                  h5.text-center #[strong Definición de "Hecho" (Definition of Done)]
                  p.mb-0 Incluir criterios claros como "código documentado", "pruebas unitarias pasadas", "sin errores críticos".

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema2/15.svg", style="max-width: 90px")
                  h5.text-center #[strong Revisiones de código (code reviews)]
                  p.mb-0 Facilitan el intercambio de conocimientos y evitan errores por descuido.

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema2/16.svg", style="max-width: 90px")
                  h5.text-center #[strong Sprint de mantenimiento o pago de deuda técnica]
                  p.mb-0 Algunos equipos destinan un sprint completo para reducir errores acumulados y limpiar código.

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema2/17.svg", style="max-width: 90px")
                  h5.text-center #[strong Refactorización constante]
                  p.mb-0 Mejorar el diseño interno del código, sin alterar su funcionalidad externa.

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema2/18.svg", style="max-width: 90px")
                  h5.text-center #[strong Visualización de la deuda técnica]
                  p.mb-0 Usar herramientas que permitan rastrear e identificar áreas problemáticas (ejemplo, SonarQube).

            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 #[strong Ejemplo aplicado.] Un equipo de desarrollo que entrega funcionalidades cada dos semanas, observa que su velocidad está disminuyendo gradualmente. Al analizar sus métricas, detecta que el número de defectos abiertos ha aumentado y que el código nuevo no se acompaña de pruebas unitarias.
          
          p(data-aos="fade-left").mb-5 Para abordar esto, decide implementar las siguientes acciones:

          .bg-color-1.p-4(data-aos="fade-left")
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Dedicar el 20 % del próximo sprint a refactorizar código heredado.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Establecer una política obligatoria de revisión de código.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Definir que ningún ítem del backlog se considera "hecho" si no tiene pruebas automatizadas.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-5 En los siguientes tres sprints, la deuda técnica se reduce en un 35 %, y la velocidad del equipo mejora, volviendo a su promedio inicial.

          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 Los defectos y la deuda técnica no deben ser vistos como fallos inevitables, sino como señales de aprendizaje y oportunidades de mejora. Al medirlos y actuar sobre ellos con disciplina y transparencia, los equipos ágiles fortalecen la calidad de sus productos, mejoran su eficiencia y garantizan una evolución sostenible del software. En última instancia, estos indicadores no solo reflejan la salud técnica del producto, sino también la madurez del equipo, en la gestión de su propio proceso de desarrollo.

      // Bloque: titulo-segundo
      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] KPIs ágiles: cómo medir el progreso y la mejora continua

      p.mb-4 La medición del progreso en entornos ágiles no se limita al seguimiento de tareas, sino que busca generar aprendizajes significativos y decisiones informadas.

      // Bloque: anexo-img
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/22.png', alt='')

            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") KPIs ágiles: cómo medir el progreso y la mejora continua
              p.mb-4(data-aos="fade-right") En el PDF KPIs ágiles, se presentan indicadores claves que permiten evaluar la entrega de valor, la eficiencia del equipo y la satisfacción del cliente, alineados con los principios de colaboración y adaptabilidad. A través de ejemplos y recomendaciones, se ofrece una guía práctica para implementar estos KPIs como herramientas que impulsan la mejora continua y el desarrollo sostenible del producto.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.mb-0 KPIs ágiles: cómo medir el progreso y la mejora continua

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre indicadores de mejora.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/8346" target="_blank" rel="noopener noreferrer") Juárez Núñez, H. (2006). Los sistemas just-in-time/ Kanban, un paradigma productivo. Red Política y Cultura.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=BajntbnQfhg" target="_blank" rel="noopener noreferrer") Ágiles - Productos y Clientes. (2023). Las 4 métricas ágiles de un Scrum Team, y la velocity no es una de ellas [video]. Youtube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
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
