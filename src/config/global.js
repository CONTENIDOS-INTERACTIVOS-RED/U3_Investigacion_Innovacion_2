export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Mejora continua y retrospectivas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de retrospección efectiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Propósito y valor de las retrospectivas en Scrum',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura básica de una sesión de retrospectiva',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas dinámicas para retrospectivas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Buenas prácticas para facilitar retrospectivas eficaces',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Indicadores de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y utilidad de los indicadores ágiles',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métrica de velocidad del equipo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Indicadores de calidad: defectos y deuda técnica',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'KPIs ágiles: cómo medir el progreso y la mejora continua',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Implementación de feedback continuo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Cultura de retroalimentación en equipos ágiles',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de feedback',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas para brindar y recibir feedback eficaz',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Integración del feedback en la mejora del producto y del equipo',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Heras del Dedo, R. D. L. & Álvarez García, A. (2017). Métodos ágiles: Scrum, Kanban, Lean. Difusora Larousse - Anaya Multimedia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122933',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito. LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/270594',
    },
    {
      referencia:
        'Monte Galiano, J. (2016). Implantar scrum con éxito. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58575',
    },
    {
      referencia:
        'Brunetta, H. (2023). OKRs y métricas de negocios: metodologías ágiles para resultados exitosos. Pluma Digital Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231789',
    },
    {
      referencia:
        "Roncancio, G. (s.f.). Indicadores de Gestión (KPI's): Tipos y Ejemplos. Pensemos.",
      link:
        'https://gestion.pensemos.com/indicadores-de-gestion-tipos-y-ejemplos',
    },
    {
      referencia:
        'Castillo, A. (2010). Conceptualización del proceso de implementación de software: perspectivas ágil y disciplinada. Revista Ciencia e Ingeniería, 31(3).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/17741',
    },
    {
      referencia:
        'Serrano Junco, C. L. (2022). Metodologías ágiles en las pymes: un modelo integral de auditoría en la gestión interna. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231777',
    },
  ],
  glosario: [
    {
      termino: '4Ls (Liked, Learned, Lacked, Longed for)',
      significado:
        'Técnica de retrospectiva que permite explorar aspectos emocionales y cognitivos de la experiencia del Sprint.',
    },
    {
      termino: 'Cultura de retroalimentación',
      significado:
        'Ambiente organizacional que promueve la comunicación abierta, honesta y frecuente como base para el crecimiento del equipo.',
    },
    {
      termino: 'Defectos',
      significado:
        'Errores o fallos en el software que afectan su correcto funcionamiento y deben ser corregidos.',
    },
    {
      termino: 'Deuda técnica',
      significado:
        'Acumulación de decisiones subóptimas en el código o diseño que pueden afectar la calidad y el mantenimiento del producto.',
    },
    {
      termino: 'Facilitador',
      significado:
        'Persona que guía las retrospectivas para asegurar que sean productivas y colaborativas, sin influir en el contenido discutido.',
    },
    {
      termino: 'Feedback',
      significado:
        'Retroalimentación que permite mejorar procesos, relaciones o productos a través de la comunicación constructiva.',
    },
    {
      termino: 'Feedback diferido',
      significado:
        'Retroalimentación que se proporciona después de cierto tiempo, generalmente en sesiones estructuradas como retrospectivas.',
    },
    {
      termino: 'Feedback inmediato',
      significado:
        'Retroalimentación que se brinda en el momento en que ocurre una situación, útil para corregir o reforzar conductas rápidamente.',
    },
    {
      termino: 'Indicador ágil',
      significado:
        'Métrica que permite evaluar el rendimiento, la calidad y el avance del equipo en un proyecto ágil.',
    },
    {
      termino: 'KPI (Key Performance Indicator)',
      significado:
        'Indicador clave de rendimiento utilizado para medir el progreso y éxito de los objetivos estratégicos del equipo o proyecto.',
    },
    {
      termino: 'Mad-Sad-Glad',
      significado:
        'Técnica visual que permite al equipo expresar emociones relacionadas con lo ocurrido durante el Sprint.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Filosofía de trabajo centrada en revisar y ajustar procesos para aumentar la eficiencia y la calidad con el tiempo.',
    },
    {
      termino: 'Mejora del producto',
      significado:
        'Proceso de evolución continua del software entregado, basado en el análisis de métricas y feedback.',
    },
    {
      termino: 'Métrica de calidad',
      significado:
        'Indicador que mide aspectos como número de errores, cobertura de pruebas y estabilidad del software.',
    },
    {
      termino: 'Retrospectiva',
      significado:
        'Reunión periódica al final de cada Sprint donde el equipo reflexiona sobre lo que funcionó y lo que se debe mejorar.',
    },
    {
      termino: 'Scrum',
      significado:
        'Marco de trabajo ágil utilizado para gestionar proyectos complejos, enfocado en entregas incrementales y colaborativas.',
    },
    {
      termino: 'Scrum Master',
      significado:
        'Rol en Scrum responsable de eliminar impedimentos, facilitar eventos y promover la mejora continua del equipo.',
    },
    {
      termino: 'Sprint',
      significado:
        'Iteración de tiempo fija (generalmente de 1 a 4 semanas) en la que se desarrolla y entrega un incremento del producto.',
    },
    {
      termino: 'Start-Stop-Continue',
      significado:
        'Técnica de retrospectiva que ayuda a identificar prácticas que iniciar, detener o continuar en el próximo Sprint.',
    },
    {
      termino: 'Velocidad del equipo',
      significado:
        'Cantidad de trabajo (medido en puntos de historia) que un equipo Scrum puede completar durante un Sprint.',
    },
  ],
}
