<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Evaluación del impacto de la investigación e innovación en la sociedad y el mercado'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/t3/1.svg', alt='')
      .col-sm-12.col-lg-10
        p.mb-0 La evaluación del impacto de la investigación e innovación, es un campo complejo que reúne diferentes perspectivas para entender cómo las iniciativas tecnológicas afectan a la sociedad y a la economía. Este enfoque integral reconoce que el valor de la innovación va más allá de los beneficios económicos, abarcando también dimensiones sociales, culturales y ambientales que son esenciales para el desarrollo sostenible. 

    #t_3_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.1] Fundamentos evaluación de impacto de la investigación e innovación
    p.mb-0 La investigación y la innovación generan impactos significativos en distintos niveles de la sociedad, destacando las dimensiones social, económica e inclusiva.
    .bg-part-2.mb-5(data-aos="fade-up")
      .px-5.py-0-cus
        .row.align-items-center.img-over.px-3
          .col-sm-12.col-lg-7
            p.my-4 Lo invitamos a escuchar el siguiente pódcast, para estudiar la temática.
            TarjetaAudio.bg-white.mb-3(
              texto="Impacto de la investigación y la innovación en la sociedad: una visión integral"
              :audio="require('../../assets/componentes/audios/impacto_investigacion_innovacion.mp3')"
            )
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t3/2.svg')

    .bg-full-width.bg-color-white.shadow-soft.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-around.align-items-center
          .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-video.svg", style="width: 70px")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Ciencia con impacto
                p.mb-0 Para ampliar los conocimientos en los temas de impacto de la I+D+i que has estudiado, se recomienda explorar el siguiente video:
              .col-sm-auto
                a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=jRQ-K08LYWE' target='_blank')
                  span Ver video
                  i.fas.fa-arrow-right

    h2.mb-3(data-aos="fade-up") Métodos de evaluación del impacto: análisis costo-beneficio, SROI y metodologías cualitativas
    p.mb-5(data-aos="fade-up") Los métodos de evaluación del impacto en proyectos de investigación e innovación, permiten valorar de manera integral, los efectos generados en diversos contextos. Estos métodos combinan enfoques cuantitativos y cualitativos para capturar tanto beneficios tangibles, como transformaciones intangibles.
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t3/3.png', alt='Imagen representativa de análisis costo-beneficio')
            .col-sm-12.col-lg-7
              h5.mb-3 Análisis costo-beneficio (ACB)
              .ul.lista-ul--color.mb-0
                 li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Evalúa la relación entre los costos invertidos y los beneficios obtenidos.
                 li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Proporciona una base cuantitativa para determinar la eficiencia económica del proyecto.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t3/4.png', alt='Imagen representativa de SROI')
            .col-sm-12.col-lg-7
              h5.mb-3 SROI (#[i Social Return on Investment])
              .ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Cuantifica el valor social generado, considerando beneficios económicos y sociales.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Mide el impacto en términos de retorno social sobre la inversión realizada.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t3/5.png', alt='Imagen representativa de metodologías cualitativas')
            .col-sm-12.col-lg-7
              h5.mb-3 Metodologías cualitativas
              .ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Capturan aspectos intangibles y transformaciones sociales que no se pueden monetizar.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Utilizan herramientas como entrevistas, grupos focales y estudios de caso para comprender efectos más profundos.

    h2.mb-3(data-aos="fade-up") Aplicaciones en Colombia
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8.bg-color-1
        .p-4
          p.mb-0 En proyectos educativos, se combinan métricas cuantitativas sobre rendimiento académico con valoraciones cualitativas del desarrollo de competencias digitales y cambios pedagógicos, reflejando tanto impactos medibles como transformaciones culturales.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/6.png', alt='')
    #t_3_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.2] Indicadores de impacto, según la OCDE: innovación responsable y sostenibilidad
    .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-4 Los indicadores de la OCDE proporcionan un marco internacional para evaluar los resultados de actividades de investigación e innovación, enfatizando la innovación responsable y el desarrollo sostenible.
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-3.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t3/7.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Productividad científica
                p.mb-0.text-center Publicaciones, colaboraciones académicas.
          .col-sm-12.col-lg-3.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t3/8.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Transferencia tecnológica
                p.mb-0.text-center Patentes, licencias, acuerdos de cooperación.

          .col-sm-12.col-lg-3.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t3/9.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Sostenibilidad ambiental
                p.mb-0.text-center Reducción de emisiones, eficiencia energética.

          .col-sm-12.col-lg-3.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t3/10.svg', style='max-width: 90px').mx-auto
                h4.mb-2.text-center Impacto social
                p.mb-0.text-center Creación de empleos, inclusión social, equidad económica.


    h2.mb-3(data-aos="fade-up") Adaptación en Colombia
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .p-4.bg-color-2.mb-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t3/11.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Bajo la dirección de MinCiencias, estos indicadores se han ajustado para reflejar prioridades locales como biodiversidad, reducción de pobreza y cambio climático. En energías renovables, se evalúan reducción de emisiones, empleos verdes y transferencia tecnológica.

        p.fw-bold.mb-3 Metodologías de evaluación de impacto social
        p.mb-5 Estas metodologías permiten comprender los cambios generados en el bienestar y calidad de vida de las personas impactadas por iniciativas innovadoras.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/12.png', alt='')

    .bg-full-width.bg-color-18.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-10
             ImagenInfografica.color-secundario.mb-0
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/t3/13.svg', alt='Infografía de metodologías de evaluación de impacto social')
              .tarjeta.bg-white.p-3(x="4.3%" y="65.3%" numero="+")
                .h5.mb-2 Participativos
                p.mb-0 Involucran a las comunidades en la definición de indicadores y el análisis de resultados, fomentando su inclusión en el proceso de evaluación.
              .tarjeta.bg-white.p-3(x="37.7%" y="65.3%" numero="+")
                .h5.mb-2 Métodos mixtos
                p.mb-0 Combinan indicadores cuantitativos con evaluaciones cualitativas, para capturar tanto datos objetivos, como transformaciones sociales intangibles.
              .tarjeta.bg-white.p-3(x="71.5%" y="65.3%" numero="+")
                .h5.mb-2 Adaptaciones locales
                p.mb-0 Consideran la diversidad cultural y las necesidades específicas de cada territorio para garantizar la relevancia y efectividad de la evaluación.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/14.png', alt='')
      .col-sm-12.col-lg-8
        p.fw-bold Aplicaciones en Colombia
        p.mb-5 En tecnologías de inclusión social, se mide tanto el acceso y uso como el empoderamiento y transformaciones comunitarias. Esto permite una visión integral del impacto.
        .bg-color-1.p-4
          p.fw-bold Indicadores de desarrollo sostenible
          p.mb-0 Los indicadores de desarrollo sostenible miden cómo las innovaciones contribuyen a metas globales y locales de sostenibilidad, integrando dimensiones económicas, sociales y ambientales.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-3.mb-3
        .bg-color-10.p-4.br-15.h-100.text-center
          p.mb-0 #[b Eficiencia de recursos:] uso del agua, energía.
      .col-sm-12.col-lg-3.mb-3
        .bg-color-19.p-4.br-15.h-100.text-center
          p.mb-0 #[b Reducción de huella ambiental:] emisiones, conservación del suelo.
      .col-sm-12.col-lg-3.mb-3
        .bg-color-9.p-4.br-15.h-100.text-center
          p.mb-0 #[b Inclusión social:] acceso a oportunidades, equidad.
      .col-sm-12.col-lg-3.mb-3
        .bg-color-3.p-4.br-15.h-100.text-center
          p.mb-0 #[b Conservación de ecosistemas:] biodiversidad, impacto ambiental.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        p.fw-bold Aplicaciones en Colombia
        p.mb-4 En agroindustria, se evalúa productividad agrícola, uso eficiente del agua, reducción de agroquímicos y mejora en comunidades rurales.

        h2.mb-3 Responsabilidad social empresarial en innovación
        p.mb-0 La RSE en innovación busca integrar aspectos éticos, sociales y ambientales en el desarrollo de soluciones tecnológicas, asegurando beneficios tanto para la empresa, como para la sociedad.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/15.png', alt='')


    .row.justify-content-center.mb-0(data-aos="fade-up")
      .col-sm-12.col-lg-4.br-15.h-100.text-center
        .row.justify-content-center.mb-5
          .col
            .bg-color-24.p-4.mb-0
              p.fw-bold.mb-0 Diseño responsable
            .bg-color-25.p-4
              p.mb-0 Evaluar impactos sociales y ambientales desde el inicio.
      .col-sm-12.col-lg-4.br-15.h-100.text-center
        .row.justify-content-center.mb-5
          .col
            .bg-color-26.p-4.mb-0
              p.fw-bold.mb-0.text-white Participación activa
            .bg-color-27.p-4
              p.mb-0 Involucrar grupos de interés en el desarrollo de soluciones.
      .col-sm-12.col-lg-4.br-15.h-100.text-center
        .row.justify-content-center.mb-5
          .col
            .bg-color-28.p-4.mb-0
              p.fw-bold.mb-0 Evaluación continua
            .bg-color-29.p-4
              p.mb-0 Monitorear y ajustar impactos generados.

    .bg-full-width.bg-color-12.mb-5(data-aos="fade-up")
      .px-5.py-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t3/16.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0.fw-bold Ejemplo práctico en Colombia
              p.mb-0 En tecnologías limpias, las empresas combinan desarrollos sostenibles con programas de capacitación comunitaria, fortaleciendo el impacto social y ambiental.

    h2.mb-3(data-aos="fade-up") Medición de impacto en comunidades locales
    p.mb-5(data-aos="fade-up") La medición de impacto en comunidades locales requiere metodologías que reflejen transformaciones sociales y económicas.
    .bg-full-width.bg-fondo-11.mb-4(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/17.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Indicadores cuantitativos
                p.mb-0.text-center Acceso a servicios, empleo, desarrollo económico.
          .col-sm-12.col-lg-6.mb-lg-0.mb-3
            .custom-image-card.h-100.br-15
              img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/18.png' alt='')
              .custom-image-card__text.p-4
                h4.mb-2.text-center Indicadores cualitativos
                p.mb-0.text-center Empoderamiento, fortalecimiento comunitario.

    .bg-full-width.bg-color-9.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.fw-bold Aplicaciones en Colombia
        p.mb-0 En tecnologías rurales, se evalúan tanto indicadores de productividad como participación comunitaria y preservación de conocimientos tradicionales.

    .bg-full-width.bg-color-white.shadow-soft.mb-0(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-around.align-items-center
          .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-link.svg", style="width: 70px")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 La innovación y su importancia.
                p.mb-0 Para ampliar los conocimientos sobre emprendimiento tecnológico, se recomienda consultar los siguientes recursos:
              .col-sm-auto
                a.boton.color-acento-botones(href='https://revista.uisrael.edu.ec/index.php/rcui/article/view/67' target='_blank')
                  span Ir al sitio
                  i.fas.fa-arrow-right

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Impacto en el mercado
             p.mb-4 El documento destaca cómo la investigación e innovación impactan el mercado al atender necesidades, superar retos y aprovechar oportunidades. Aborda áreas claves como el análisis de mercado adaptado a contextos locales, la medición del retorno de inversión en innovación, y la adopción tecnológica, considerando factores sociales y culturales.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/impacto.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Impacto en el mercado
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/19.png', alt='')
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://doi.org/10.35290/rcui.v6n1.2019.67 ' target='_blank' rel='noopener noreferrer')  Rojo Gutiérrez, M. A., Padilla-Oviedo, A. & Riojas, R. M. (2019). La innovación y su importancia. Revista Científica UISRAEL, 6(1), pp. 9-22. 
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=B0FpdtpuSOI' target='_blank' rel='noopener noreferrer') Banco Interamericano de Desarrollo. (2021). Innovación para la Inclusión: el impacto multiplicador del Laboratorio de Innovación del Grupo BID

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/live/qqD9KOK5akY' target='_blank' rel='noopener noreferrer') CAF - banco de desarrollo de Latam y el Caribe. (2021). Webinar: Procesos de innovación en Pymes: Experiencias exitosas

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=jRQ-K08LYWE' target='_blank' rel='noopener noreferrer') Cidere biobio. (2020). Ciencia con impacto.

          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    cuestionario: {
      tema: '--',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la evaluación de proyectos de investigación e innovación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar los beneficios económicos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir el impacto técnico, económico y social',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir costos de implementación',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generar informes administrativos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! La evaluación de proyectos de I+D+i busca comprender el impacto integral de las innovaciones, más allá de lo puramente económico.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elementos caracterizan el ecosistema de emprendimiento tecnológico en Colombia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo instituciones gubernamentales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente universidades',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Interacción entre gobierno, universidades, inversionistas y empresas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solamente fondos de capital privado',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El ecosistema de emprendimiento tecnológico requiere la colaboración de múltiples actores para su éxito.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el principio fundamental de la metodología Lean Startup?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollar productos complejos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar estrategias a largo plazo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Construir-medir-aprender mediante experimentación rápida',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Invertir grandes cantidades de recursos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Perfecto! El ciclo de construcción, medición y aprendizaje es clave en Lean Startup.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué elementos incluye un análisis de mercado en innovación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo datos financieros',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente competidores directos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Tendencias de mercado, comportamiento del consumidor y propuesta de valor',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Publicidad del producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Un análisis de mercado completo considera múltiples aspectos del entorno competitivo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué aspectos son fundamentales en la evaluación de la transferencia tecnológica?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo número de patentes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente costos de transferencia',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desarrollo de capacidades, adaptación tecnológica y valor generado',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tamaño de la empresa receptora',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La transferencia tecnológica efectiva implica múltiples dimensiones más allá de los aspectos técnicos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        // ... continuar con las demás preguntas siguiendo el mismo patrón
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
