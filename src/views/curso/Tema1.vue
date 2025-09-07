<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Técnicas de retrospección efectiva'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: audio-imagen
      .bg-full-width.bg-color-1.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-6
              p(data-aos="fade-left").mb-4 Para comenzar con el estudio de esta temática, lo invitamos a escuchar el siguiente pódcast.
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Técnicas de retrospección efectiva"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
            .col-lg-6
              figure
                img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Propósito y valor de las retrospectivas en Scrum

      // Bloque: imagen-texto-iconobloque 4:8
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Las retrospectivas en Scrum, representan un elemento central para la consolidación de la agilidad en equipos de trabajo. Son reuniones periódicas en las que los miembros del equipo examinan, de manera sistemática, su desempeño durante el Sprint que acaba de concluir, para detectar áreas de mejora y reforzar las buenas prácticas. Este ejercicio de autoevaluación es clave para que los equipos no solo mejoren su productividad, sino también su cohesión y motivación.

          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Desde una perspectiva filosófica, las retrospectivas en Scrum se fundamentan en el concepto de aprendizaje organizacional y la mejora continua, que busca que cada iteración o ciclo de trabajo, sea una oportunidad para avanzar y perfeccionar, tanto el producto como los procesos que lo generan. Esta práctica está en consonancia con el manifiesto ágil, que enfatiza la importancia de la reflexión regular sobre cómo ser más efectivos y ajustar el comportamiento en consecuencia.

      // Bloque: párrafo simple
      h2.mb-4 Propósito fundamental de las retrospectivas en Scrum

      // Bloque: color-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 El propósito principal de las retrospectivas, es generar un espacio de reflexión y diálogo abierto y seguro donde el equipo pueda analizar lo que funcionó bien, lo que no funcionó y cómo se puede mejorar en el próximo Sprint. Se trata de un ejercicio de transparencia y honestidad que fomenta la responsabilidad compartida, es decir, que todos los miembros del equipo reconocen su papel en el éxito o las dificultades y se comprometen en acciones concretas para avanzar.
          
          p(data-aos="fade-left") En este sentido, la retrospectiva es una herramienta para:
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in").mb-4.mb-lg-0

      // Bloque: slyder-4
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/5.png")
              .col-lg-7.order-lg-1
                h5 Diagnosticar el estado actual del equipo y los procesos
                p el equipo revisa qué actividades o dinámicas fueron efectivas y cuáles no. Por ejemplo, puede detectar que las reuniones diarias (daily stand-ups) se extendieron demasiado y perdieron foco, afectando la coordinación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/6.png")
              .col-lg-7.order-lg-1
                h5 Identificar obstáculos o impedimentos que retrasan el avance
                p el equipo, puede detectar problemas como demoras en la entrega de información, falta de recursos o dificultades técnicas que no fueron abordadas a tiempo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/7.png")
              .col-lg-7.order-lg-1
                h5 Diseñar y acordar mejoras concretas para implementar en el siguiente Sprint
                p la retrospectiva, debe finalizar con un plan de acción claro que permita que el equipo evolucione y evite repetir errores.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/8.png")
              .col-lg-7.order-lg-1
                h5 Fortalecer la comunicación y el trabajo en equipo
                p al permitir que cada miembro exprese sus opiniones y sentimientos, se refuerzan la confianza y el sentido de pertenencia.

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Un equipo Scrum de desarrollo de software que trabaja en una aplicación web, realiza una retrospectiva al finalizar su Sprint de dos semanas. Durante la sesión, los miembros comentan que el equipo de diseño entregó los wireframes con retraso, lo que afectó la implementación por parte de los desarrolladores. Además, destacan que la calidad del código fue buena y que el uso de integración continua, facilitó las pruebas.

          .bg-color-4.p-4(data-aos="fade-left")
            p.mb-0 Como resultado, acuerdan implementar una comunicación más cercana entre diseñadores y desarrolladores, con reuniones conjuntas semanales, y asignar tiempo para revisiones tempranas de diseño, antes del Sprint. Este ejemplo ilustra cómo la retrospectiva ayuda a resolver problemas operativos y mejora la colaboración.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")

      // Bloque: párrafo simple
      h2.mb-4 Valor que aportan las retrospectivas a equipos y organizaciones
      p.mb-4 Las retrospectivas tienen un valor que trasciende el corto plazo. Se trata de una práctica que, si se adopta correctamente, puede transformar la cultura organizacional y la forma en que los equipos abordan el trabajo. El valor fundamental radica en que convierten la experiencia en conocimiento y acción.

      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Mejora continua")
              p La naturaleza iterativa de Scrum permite incorporar aprendizajes y ajustes después de cada Sprint. Este ciclo de mejora continua, potenciado por las retrospectivas, hace que los equipos sean cada vez más eficientes y resilientes, ante cambios o dificultades. La mejora no es un evento aislado, sino una práctica integrada en el día a día.
              p #[strong Ejemplo.] Un equipo que, en una retrospectiva, identifica que la planificación inicial del Sprint fue muy optimista, puede ajustar sus estimaciones en Sprints posteriores, logrando entregas más realistas y sin generar estrés innecesario.

            .div(titulo="Incremento de la productividad y calidad")
              p La capacidad de detectar y corregir impedimentos permite que el equipo avance con mayor fluidez y entregue productos con mejor calidad. Esto se traduce en mayor satisfacción del cliente y en equipos más motivados.

            .div(titulo="Fomento de la transparencia y confianza")
              p La retrospección requiere apertura y honestidad, lo cual fortalece la confianza entre los miembros del equipo. Cuando los colaboradores sienten que pueden expresar sus opiniones sin miedo a represalias, se crea un ambiente propicio para la innovación y la colaboración.
              p #[strong Ejemplo.] Un miembro del equipo que nota que cierta práctica está generando retrabajo, puede plantearlo durante la retrospectiva y, con el apoyo del equipo, proponer una alternativa para reducir errores.

            .div(titulo="Adaptación y respuesta rápida al cambio")
              p La retrospectiva hace que los equipos no permanecen estáticos, sino que se ajusten de manera ágil a nuevas circunstancias, requisitos o tecnologías. Esta capacidad adaptativa es esencial en entornos de alta incertidumbre.

      // Bloque: párrafo simple
      h2.mb-4 Más ejemplos que evidencian el valor de las retrospectivas

      // Bloque: color-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-6.p-4(data-aos="fade-left")
            ul.lista-ul--color.color-dark
              li.mb-3
                i.fas.fa-arrow-circle-right
                | En un equipo de desarrollo de productos, tras varias retrospectivas, se identificó que la falta de definición clara de historias de usuario, generaba retrabajo constante. Implementaron sesiones de refinamiento más rigurosas, antes de la planificación, lo que redujo el retrabajo y aumentó la velocidad del equipo.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | En otro caso, un equipo detectó que los testers se involucraron muy tarde en el proceso, lo que genera cuellos de botella. Decidieron integrar a los testers desde la planificación, lo que permitió detectar errores tempranamente y mejorar la calidad.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Estructura básica de una sesión de retrospectiva

      p.mb-4 La sesión de retrospectiva es una práctica fundamental en los equipos que trabajan bajo marcos ágiles, ya que permite revisar el proceso, identificar oportunidades de mejora y fortalecer la colaboración.

      // Bloque: img-anexo
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/12.png', alt='')

            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Estructura básica de una sesión de retrospectiva
              p.mb-4(data-aos="fade-right") En el PDF Estructura básica de una sesión de retrospectiva, se presenta una guía detallada para llevar a cabo esta ceremonia, incluyendo fases, actividades y ejemplos que facilitan su implementación. Este recurso permite a los equipos adoptar una dinámica organizada, participativa y enfocada en el aprendizaje continuo.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.mb-0 Estructura básica de una sesión de retrospectiva

      // Bloque: titulo-segundo
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3] Técnicas dinámicas para retrospectivas

      p.mb-4 Las técnicas dinámicas son claves para enriquecer las retrospectivas ágiles, ya que permiten estructurar la reflexión, fomentar la participación y generar aprendizajes significativos.

      // Bloque: img-anexo
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/13.png', alt='')

            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Técnicas dinámicas para retrospectivas
              p.mb-4(data-aos="fade-right") En el PDF Técnicas dinámicas para retrospectivas, se presentan tres enfoques ampliamente utilizados, que ayudan a los equipos Scrum a identificar acciones de mejora, expresar emociones y construir consensos. Este recurso ofrece herramientas prácticas para facilitar sesiones más efectivas, empáticas y orientadas a resultados.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.mb-0 Técnicas dinámicas para retrospectivas

      // Bloque: titulo-segundo
      #t_1_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.4] Buenas prácticas para facilitar retrospectivas eficaces

      // Bloque: imagen-iconobloque-texto
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La retrospectiva es una ceremonia clave dentro del marco Scrum que busca el mejoramiento continuo del equipo y del proceso de trabajo. Para que esta sesión sea verdaderamente efectiva y cumpla con su propósito, es indispensable que el facilitador, usualmente el Scrum Master, aplique buenas prácticas que promuevan la participación activa, el ambiente de confianza y la generación de resultados concretos.
          
          p(data-aos="fade-left") En este tema se analizarán las buenas prácticas esenciales para facilitar retrospectivas eficaces, explicando su importancia, detallando cómo aplicarlas y ejemplificando situaciones reales donde su correcta ejecución ha marcado la diferencia.

      // Bloque: acordeon-img
      .row.align-items-start.mb-5
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Preparación cuidadosa y agenda clara")
              p Una retrospectiva exitosa comienza mucho antes de que se reúna el equipo. El facilitador debe preparar con anticipación la sesión, definiendo los objetivos específicos y diseñando una agenda clara y estructurada.
              p Por ejemplo, puede planificar la duración de cada actividad, la técnica a utilizar (como Start-Stop-Continue o 4Ls), y los tiempos para compartir y discutir. Contar con una agenda ayuda a mantener el enfoque y el ritmo durante la sesión, evitando desviaciones o saturación.
              p #[strong Ejemplo.] En un equipo con dificultades para finalizar las retrospectivas a tiempo, el Scrum Master implementó una agenda visual con temporizadores para cada sección, lo que aumentó la puntualidad y permitió un cierre efectivo.

            .div(titulo="Fomentar un ambiente de confianza y respeto")
              p La participación sincera solo es posible si el equipo se siente en un espacio seguro donde puede expresar opiniones, emociones y críticas sin temor a represalias. Por ello, el facilitador debe promover un clima de respeto mutuo y apertura.
              p Esto implica, por ejemplo, establecer normas básicas al inicio de la sesión, como el compromiso de escuchar sin interrumpir, no juzgar, y respetar la confidencialidad. Además, es útil comenzar con actividades rompehielos que relajen al equipo y refuercen la empatía.
              p #[strong Ejemplo.] Un equipo que inicialmente evitaba discutir problemas graves logró abrirse cuando el Scrum Master propuso comenzar cada retrospectiva con una ronda breve para compartir cómo se sentían ese día, generando mayor conexión emocional.

            .div(titulo="Promover la participación equitativa y evitar dominancias")
              p Un riesgo frecuente en retrospectivas es que solo unas pocas personas hablen, mientras que otros permanecen callados. Para evitarlo, el facilitador debe utilizar técnicas que fomenten la participación de todos, como rondas de palabra, uso de notas adhesivas para que cada quien escriba sus ideas, o herramientas digitales con encuestas anónimas.
              p #[strong Ejemplo.] En un equipo remoto, el facilitador usó una herramienta en línea para que todos enviaran sus aportes simultáneamente, asegurando que se escucharan todas las voces, incluso las más tímidas.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/16.png", alt="").mb-4.mb-lg-0

      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/17.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Centrar la sesión en acciones concretas y realistas")
              p No basta con identificar problemas o sentimientos; la retrospectiva debe concluir con compromisos claros y alcanzables. Por ello, el facilitador debe guiar al equipo para que transforme las reflexiones en acciones específicas con responsables y fechas de seguimiento.
              p #[strong Ejemplo.] Un equipo acostumbraba a finalizar la retrospectiva sin definir próximos pasos. Con la nueva práctica de asignar tareas concretas a miembros del equipo, mejoró notablemente la implementación de mejoras y la motivación.

            .div(titulo="Adaptar la retrospectiva a las necesidades del equipo")
              p Cada equipo es único y evoluciona con el tiempo. Por eso, el facilitador debe ajustar las técnicas, duración, dinámicas y frecuencia de las retrospectivas, según la madurez, tamaño y contexto del grupo.
              p Por ejemplo, equipos nuevos pueden requerir sesiones más guiadas y cortas, mientras que equipos maduros, pueden aprovechar técnicas más creativas y sesiones más profundas. Además, es recomendable variar las dinámicas para mantener el interés y evitar la rutina.
              p #[strong Ejemplo.] Un equipo que sentía aburrimiento y falta de motivación en las retrospectivas comenzó a alternar técnicas (Mad-Sad-Glad, 4Ls, Start-Stop-Continue), mejorando la participación y calidad de los resultados.

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Facilitar retrospectivas eficaces requiere una combinación de preparación, habilidades interpersonales, técnicas adecuadas y un enfoque claro en la mejora continua. Al aplicar estas buenas prácticas, el facilitador contribuye a que el equipo no solo identifique áreas de mejora, sino que se comprometa activamente a implementar cambios que potencien su desempeño y resultados.

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre técnicas de retrospección efectiva.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/28993" target="_blank" rel="noopener noreferrer") Escalona, I. (2009). Planeación integral agregada e interrelación de los sistemas intermitentes con el MRP y filosofía JIT, kanban, reingeniería. El Cid Editor | apuntes.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/0-ruR-h2R3w?si=57xzuPryu0W9mWMo" target="_blank" rel="noopener noreferrer") Proyecto Kanban. (2020). Meetup "SCRUM y Retrospectivas" con Verónica Miers [video]. YouTube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
