<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Implementación de feedback continuo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: texto-iconobloque-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 En el contexto de las metodologías ágiles, el feedback continuo se posiciona como un pilar fundamental para garantizar la mejora constante tanto del producto como del equipo de desarrollo. A diferencia de los modelos tradicionales donde la retroalimentación se recibe al final de un ciclo largo de desarrollo, en Scrum y otras metodologías ágiles, esta práctica se distribuye de forma constante y sistemática durante todo el proyecto. Esta dinámica permite ajustar comportamientos, identificar oportunidades de mejora y reforzar aciertos con rapidez, lo que se traduce en productos de mayor calidad y equipos más cohesionados y resilientes.

          .bg-color-2.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El valor del feedback no radica únicamente en señalar errores o aciertos, sino en cómo se convierte en una herramienta estratégica para generar aprendizaje colectivo y transformar la cultura organizacional. Al implementarse de manera efectiva, el feedback fomenta la transparencia, la confianza mutua y el compromiso compartido con los objetivos del equipo y del producto.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Cultura de retroalimentación en equipos ágiles

      // Bloque: imagen-color-texto 4:8
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-5
            p.mb-4 En el corazón de los equipos ágiles, la retroalimentación constante y constructiva no es una acción puntual, sino una práctica cultural.
            p.mb-4 Esta cultura implica crear un ambiente donde cada miembro se sienta con la libertad y la responsabilidad de compartir observaciones, expresar inquietudes y proponer mejoras.
            p.mb-0 La retroalimentación en los equipos ágiles no solo busca mejorar los entregables, sino también fortalecer las relaciones interpersonales, la confianza y la autogestión.
          
          p(data-aos="fade-left") A diferencia de los enfoques tradicionales, donde la retroalimentación suele estar centralizada en líderes jerárquicos o se produce solo al final de un ciclo de trabajo, en Scrum y otras metodologías ágiles, el feedback es distribuido, frecuente y horizontal. Cualquier miembro del equipo puede ofrecerlo o solicitarlo, promoviendo un flujo de mejora continua.

      // Bloque: párrafo simple
      h2.mb-4 Características de una cultura de feedback saludable
      p.mb-4 Una cultura de retroalimentación efectiva en contextos ágiles, presenta las siguientes características:

      // Bloque: slyfc 8:4
      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.pb-md-3.pt-md-5
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema3/4.svg", style="max-width: 90px")
                  h5.text-center #[strong Seguridad psicológica]
                  p.mb-0 Los miembros del equipo se sienten seguros al expresar opiniones sin temor a represalias.

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema3/5.svg", style="max-width: 90px")
                  h5.text-center #[strong Reciprocidad]
                  p.mb-0 El feedback se da y se recibe de forma bilateral; no es impuesto, sino colaborativo.

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema3/6.svg", style="max-width: 90px")
                  h5.text-center #[strong Oportunidad]
                  p.mb-0 La retroalimentación es proporcionada en el momento adecuado, idealmente de manera inmediata o en ciclos definidos (como las retrospectivas).

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema3/7.svg", style="max-width: 90px")
                  h5.text-center #[strong Claridad]
                  p.mb-0 Se enfoca en hechos observables y no en juicios personales. Esto evita malentendidos y promueve el aprendizaje.

                .bg-white.p-4.shadow-sm.h-100
                  img.d-block.mx-auto.mb-3(src="@/assets/curso/tema3/8.svg", style="max-width: 90px")
                  h5.text-center #[strong Orientación a la mejora]
                  p.mb-0 El propósito principal no es corregir, sino hacer crecer, tanto al individuo como al equipo.

            .col-lg-4
              figure
                img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")

      // Bloque: imagen-color-texto
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-6.p-4.py-lg-5(data-aos="fade-left").mb-5
            p.mb-0 Ejemplo práctico. Un sprint con cultura de feedback. En un equipo Scrum que ha integrado esta cultura, durante una retrospectiva, un desarrollador comenta que la integración continua ha fallado varias veces por falta de pruebas automatizadas. En lugar de tomar esto como una crítica personal, el equipo agradece el comentario y propone una acción concreta: asignar tiempo en el siguiente sprint, para reforzar los test unitarios.
          
          p(data-aos="fade-left") Este tipo de intercambio transforma la crítica en colaboración, y refuerza la responsabilidad compartida por la calidad del producto.

      // Bloque: párrafo simple
      h2.mb-4 Obstáculos comunes para una cultura de feedback y cómo superarlos

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 Pese a sus beneficios, establecer una cultura sólida de retroalimentación, enfrenta desafíos. Algunos de los más comunes incluyen:

          .bg-color-4.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Temor a herir sentimientos o crear conflictos.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Falta de formación en cómo dar feedback constructivo.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Desconfianza entre los miembros del equipo.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Ambientes donde los errores son penalizados en lugar de analizados.
            
            p.mb-4 Para superarlos, los equipos pueden adoptar estrategias como:
            
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Capacitación en habilidades comunicativas y escucha activa.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Implementación de normas de equipo que valoren la sinceridad con respeto.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Uso de marcos como "Start-Stop-Continue" o "SBI (Situation-Behavior-Impact)" para estructurar el feedback.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Reconocimiento abierto de los errores como oportunidades de mejora.
          
          p(data-aos="fade-left") La cultura de retroalimentación es mucho más que un componente técnico en los equipos ágiles; es una habilidad colectiva estratégica. Cuando se cultiva adecuadamente, se convierte en un catalizador del aprendizaje organizacional, mejora la cohesión del equipo, eleva la calidad del producto y potencia el crecimiento profesional de cada integrante. Fomentar esta cultura requiere constancia, liderazgo distribuido y un entorno que premie la apertura al cambio.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Tipos de feedback

      p.mb-4 La retroalimentación es un pilar fundamental en el trabajo colaborativo de los equipos ágiles, ya que permite fortalecer la comunicación, detectar áreas de mejora y consolidar aprendizajes.

      // Bloque: anexo-img
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/12.png', alt='')

            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Tipos de feedback
              p.mb-4(data-aos="fade-right") En el PDF Tipos de feedback, se presentan diferentes formas de retroalimentación, formal, informal, inmediata y diferida, que pueden aplicarse estratégicamente, según el contexto, el objetivo y el momento en que ocurren los eventos dentro del ciclo ágil. Comprender estas modalidades y saber cuándo utilizarlas, favorece entornos más colaborativos, proactivos y orientados a la mejora continua.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.mb-0 Tipos de feedback

      // Bloque: titulo-segundo
      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Técnicas para brindar y recibir feedback eficaz

      // Bloque: iconobloque-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-6.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La retroalimentación eficaz no es un simple intercambio de opiniones; es una herramienta estratégica para impulsar el aprendizaje, fortalecer la confianza del equipo y fomentar la mejora continua. En el marco de las metodologías ágiles, donde la colaboración es un pilar fundamental, aprender a dar y recibir feedback de manera efectiva, es una competencia clave que debe cultivarse con intención, práctica y estructura.
          
          p(data-aos="fade-left") El feedback mal ejecutado puede generar fricciones, defensividad o desmotivación. Por el contrario, un feedback bien ofrecido y adecuadamente recibido, puede convertirse en catalizador de crecimiento personal y colectivo.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")

      // Bloque: acordeon-img
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
        .col-lg-8
          AcordionA(tipo="b").mb-5
            .div(titulo="Técnica del sándwich (positivo – mejora – positivo)")
              p Esta técnica consiste en estructurar el mensaje en tres partes: comenzar con una observación positiva, luego señalar el aspecto a mejorar, y finalizar con otro comentario positivo. Su propósito es reducir la resistencia del receptor y enmarcar la mejora dentro de una visión de aprecio y apoyo.
              p #[strong Ejemplo.] "Aprecio mucho tu esfuerzo por cumplir con las tareas del sprint y cómo apoyaste a tus compañeros. Observé que algunas historias se quedaron sin documentar en Confluence, lo que podría dificultar la trazabilidad. Pero en general, tu iniciativa ha sido muy valiosa para el equipo".
              p #[strong Ventaja]: genera un clima de receptividad.
              p #[strong Riesgo]: si se abusa, puede percibirse como manipulación.
            
            .div(titulo="Técnica SBI (Situation – Behavior – Impact)")
              p Esta técnica propone describir de forma clara:
              ul.lista-ul--color.color-dark.mb-3
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Situation]: el contexto específico.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Behavior]: lo que la persona hizo o dijo.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Impact]: la consecuencia generada por esa acción.
              p Permite dar un feedback objetivo, concreto y centrado en hechos, sin juicios personales.
              p #[strong Ejemplo]. "En la daily de hoy (Situación), cuando interrumpiste a Juan mientras explicaba su tarea (Comportamiento), él se mostró incómodo y perdió el hilo de lo que decía (Impacto)".
              p #[strong Ventaja]: elimina la ambigüedad y se enfoca en lo observable.
              p #[strong Ideal]: para situaciones delicadas o potencialmente conflictivas.

            .div(titulo="Técnica \"STOP – START – CONTINUE\"")
              p Muy usada también en retrospectivas, esta técnica ayuda a estructurar feedback en tres preguntas:
              p - ¿Qué debe detenerse porque no está funcionando?
              p - ¿Qué debe empezar a hacerse que aún no se hace?
              p - ¿Qué debe continuar porque está funcionando bien?
              p Facilita un enfoque equilibrado y orientado a la acción.
              p #[strong Ejemplo en equipo Scrum]
              p - #[strong STOP]: cambiar prioridades a mitad del sprint sin coordinación.
              p - #[strong START]: involucrar al cliente desde el primer refinamiento.
              p - #[strong CONTINUE]: celebrar las pequeñas victorias al finalizar el sprint.
              p #[strong Ventaja]: fomenta reflexión sin críticas destructivas.
              p #[strong Ideal]: para dinámicas de grupo y sesiones periódicas.

            .div(titulo="Técnica COIN (Context – Observation – Impact – Next steps)")
              p Una evolución de SBI que añade un cuarto componente: la acción futura. Se enfoca no solo en lo ocurrido, sino en cómo se puede avanzar.
              p #[strong Ejemplo]. "Durante el sprint planning (Contexto), vi que interrumpiste al Scrum Master varias veces (Observación), lo cual generó confusión en la asignación de tareas (Impacto). Te propongo que la próxima vez anotemos dudas y las abordemos al final (Próximo paso)".
              p #[strong Ventaja]: impulsa un cambio concreto en el comportamiento futuro.
              p #[strong Ideal]: para situaciones recurrentes que requieren corrección.

      // Bloque: acordeon-img
      .row.mb-5
        .col-lg-8
          AcordionA(tipo="b").mb-5
            .div(titulo="Técnica de \"feedback feedforward\"")
              p Esta técnica cambia el foco de lo que se hizo mal hacia lo que puede hacerse mejor en el futuro. En lugar de retroalimentar con base en errores pasados, se proyectan oportunidades de desarrollo.
              p #[strong Ejemplo]. En lugar de decir: "No cumpliste con los criterios de aceptación", se plantea: "En los próximos sprints, ¿cómo podrías asegurarte de validar los criterios con el Product Owner antes de cerrar la historia?".
              p #[strong Ventaja]: evita culpabilización y fortalece el desarrollo.
              p #[strong Ideal]: en contextos donde la cultura de aprendizaje es prioritaria.

            .div(titulo="Técnica \"Feedback en un minuto\" (One Minute Feedback)")
              p Popularizada en ambientes ágiles de ritmo acelerado, esta técnica consiste en brindar retroalimentación inmediata, breve y enfocada, ideal para entornos de alta iteración como el desarrollo de software.
              p #[strong Ejemplo]. Al finalizar una demo: "Buen trabajo mostrando cómo se resolvió el bug. La claridad con la que explicaste el impacto en producción fue excelente".
              p #[strong Ventaja]: promueve agilidad y refuerzo inmediato.
              p #[strong Ideal]: para reconocer acciones pequeñas y cotidianas.

            .div(titulo="Recibir feedback: actitud y habilidades del receptor")
              p Brindar retroalimentación efectiva no es suficiente si quien la recibe no está preparado emocionalmente o cognitivamente para escucharla. Por ello, desarrollar habilidades como la escucha activa, la gestión emocional y el agradecimiento por la mejora son fundamentales.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Buenas prácticas para recibir feedback:

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color.color-dark
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Escuchar sin interrumpir.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Evitar ponerse a la defensiva.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Hacer preguntas aclaratorias si algo no queda claro.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Agradecer el feedback recibido.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Reflexionar antes de actuar.
          
          p(data-aos="fade-left") El feedback eficaz es una herramienta poderosa cuando se comprende como un proceso bilateral, empático y constructivo. Tanto quien da como quien recibe deben asumir un rol proactivo y respetuoso, aplicando técnicas que se adapten al contexto y al nivel de confianza del equipo. Estas técnicas no solo mejoran la comunicación interna, sino que aumentan la madurez ágil del equipo, promueven la excelencia y contribuyen a la evolución tanto del producto como de las personas.

      // Bloque: titulo-segundo
      #t_3_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.4] Integración del feedback en la mejora del producto y del equipo

      p.mb-4 La retroalimentación es un motor esencial de la mejora continua en los marcos de trabajo ágiles, ya que permite ajustar tanto el desarrollo del producto como la dinámica del equipo de forma oportuna y estratégica.

      // Bloque: anexo-img
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/18.png', alt='')

            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Integración del feedback en la mejora del producto y del equipo
              p.mb-4(data-aos="fade-right") En el PDF Integración del feedback en la mejora del producto y del equipo, se analizan las formas más efectivas de incorporar el feedback dentro del ciclo ágil, destacando cómo este puede provenir de múltiples fuentes, y cómo transformarlo en acciones concretas que fortalezcan tanto la calidad del software como la colaboración y el bienestar del equipo.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.mb-0 Integración del feedback en la mejora del producto y del equipo

      // Bloque: párrafo simple
      p.mb-4 Para finalizar, lo invitamos a ver el siguiente video, el cual presenta la herramienta Jira, enfocándola en su utilización en un proyecto Scrum.

      // Bloque: video-fondo
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/JxrZwg_oN5Y?si=isKAGQhWJQ6jrcgv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      // Bloque: actividad
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario="cuestionario"/>

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre implementación de feedback continuo.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/28569" target="_blank" rel="noopener noreferrer") Clery Aguirre, A. G. (2009). Aplicación y uso del sistema Kanban para lograr la eficiencia operativa de una empresa. El Cid Editor | apuntes.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=-hoki2YPHQw" target="_blank" rel="noopener noreferrer") Evolution4All. (2019). Agile Retrospectives: Feedback Door Exercise [video].YouTube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema3,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
