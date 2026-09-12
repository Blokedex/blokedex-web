import type { WikiArticle } from "./types";

export const pokemonArticles: WikiArticle[] = [
  {
    slug: "tu-equipo",
    title: "Tu equipo Pokémon",
    description:
      "Organiza tus compañeros, prepara los combates y encuentra tu siguiente objetivo.",
    category: "pokemon",
    icon: "paw-print",
    readingMinutes: 3,
    featured: true,
    tags: ["equipo", "captura", "PC", "entrenamiento", "Pokémon"],
    sections: [
      {
        id: "un-equipo-con-proposito",
        title: "Cada compañero tiene su lugar",
        paragraphs: [
          "Tu equipo activo reúne hasta seis Pokémon. El PC guarda el resto de tu colección y también está disponible en los selectores de funciones como la crianza, la fusión y el comercio.",
          "Antes de preparar una actividad, revisa qué Pokémon necesitas llevar contigo y cuáles quieres reservar. Un progenitor depositado en la Guardería o un Pokémon dentro de la Cámara de Fusión deja de estar disponible para otras tareas mientras permanece allí.",
        ],
      },
      {
        id: "capturar-y-entrenar",
        title: "Captura, entrena y avanza",
        paragraphs: [
          "Las capturas, las evoluciones y los combates forman parte de tu progreso y pueden coincidir con los objetivos de tus misiones. Consulta primero las misiones activas: algunas piden una especie concreta y otras un tipo de Pokémon o una acción determinada.",
          "La subida de nivel está ligada a las medallas de Blokedex. Empiezas con un límite de nivel 17 y cada gimnasio de la ruta abre el siguiente tramo. Si tu equipo ha alcanzado el límite, el siguiente paso es avanzar en los gimnasios.",
        ],
        callout: {
          title: "Entrenamiento con límite",
          text: "Las salas de experiencia respetan el límite de tus medallas. Sus combates no proporcionan todas las recompensas ni todos los progresos de un entrenador normal.",
          type: "info",
        },
      },
      {
        id: "leer-la-ficha",
        title: "Mira más allá del nivel",
        paragraphs: [
          "En la ficha de un Pokémon puedes consultar sus características y preparar su papel en el equipo. El nivel por sí solo no describe sus posibilidades: también cuentan sus tipos, movimientos, habilidad, naturaleza y estadísticas.",
          "Si vas a comprar o intercambiar un Pokémon, revisa el ejemplar concreto. En el mercado puedes inspeccionar sus estadísticas, IV y EV antes de decidir. Para criar, añade otra comprobación: su fertilidad disponible.",
        ],
        bullets: [
          "Diversifica los tipos y los movimientos de tu equipo.",
          "Comprueba el siguiente gimnasio antes de invertir en entrenamiento.",
          "Deja espacio en el equipo o el PC para recibir huevos, compras y fusiones.",
        ],
      },
    ],
    related: ["medallas", "crianza", "misiones"],
  },
  {
    slug: "crianza",
    title: "La Guardería Pokémon",
    description:
      "De una pareja compatible a un nuevo compañero: prepara la crianza y organiza tu Nido.",
    category: "pokemon",
    icon: "egg",
    readingMinutes: 4,
    featured: true,
    tags: ["crianza", "huevos", "guardería", "nido", "Ditto"],
    sections: [
      {
        id: "preparar-la-pareja",
        title: "Prepara tu primera pareja",
        paragraphs: [
          "Abre la Guardería y elige un criadero. Selecciona dos Pokémon distintos desde tu equipo o PC; el filtro de compatibilidad te ayuda a encontrar una pareja válida. Ambos deben poder criar y tener fertilidad disponible.",
          "En una pareja sin Ditto, los dos deben compartir un grupo huevo y ser macho y hembra. La cría pertenece a la línea evolutiva de la madre. Con Ditto, pertenece a la del otro progenitor. Dos Ditto no pueden criar entre sí y el grupo huevo Desconocido no admite crianza.",
        ],
        bullets: [
          "Selecciona los dos progenitores.",
          "Coloca los objetos de crianza que quieras utilizar.",
          "Añade una Poké Ball y revisa la vista previa.",
          "Comprueba los requisitos pendientes e inicia el ciclo.",
        ],
      },
      {
        id: "ciclo-y-nido",
        title: "Del criadero al Nido",
        paragraphs: [
          "Cada huevo consume una Poké Ball y un punto de fertilidad de cada progenitor. El ciclo dura entre 6 minutos y 40 segundos y 11 minutos y 40 segundos. Al terminar, envía el huevo al Nido y eclosiónalo desde allí para recibir al Pokémon.",
          "El Nido es un espacio propio: almacenar un huevo y eclosionarlo son pasos distintos. Para recibir las crías necesitas huecos libres en el equipo o el PC. También puedes usar la opción de eclosionar todos los huevos pendientes.",
        ],
        callout: {
          title: "Una cría, un nuevo comienzo",
          text: "Los Pokémon nacidos en la Guardería se entregan a nivel 1. Sus características se preparan con las reglas de genética de Blokedex.",
          type: "tip",
        },
      },
      {
        id: "automatizar",
        title: "Automatiza sin perder el control",
        paragraphs: [
          "Puedes activar la recogida automática para enviar los huevos al Nido y el suministro automático de Poké Balls desde su almacén. Con ambas opciones preparadas, las parejas pueden continuar sus ciclos aunque estés desconectado.",
          "La automatización se pausa si falta fertilidad, no quedan Poké Balls o el Nido está lleno. La Guardería muestra el motivo para que puedas resolverlo. Parar un ciclo mantiene a los progenitores en la Guardería; retirarlos es una acción aparte.",
        ],
      },
      {
        id: "ampliar",
        title: "Más espacio para tu proyecto",
        paragraphs: [
          "Las cuentas nuevas empiezan con 3 criaderos y 9 espacios de Nido. Los objetos de ampliación permiten llegar a 9 criaderos y 36 espacios de Nido. Cada ampliación desbloquea un espacio adicional.",
          "Las ampliaciones de criadero y de Nido cumplen funciones diferentes: una permite mantener más parejas y la otra guardar más huevos.",
        ],
      },
    ],
    related: ["fertilidad", "genetica", "fusiones"],
  },
  {
    slug: "fertilidad",
    title: "Fertilidad y cuidados",
    description:
      "Entiende los puntos de crianza, su recuperación y los objetos que amplían tus posibilidades.",
    category: "pokemon",
    icon: "heart",
    readingMinutes: 3,
    tags: ["fertilidad", "crianza", "esencia", "expansor", "castración"],
    sections: [
      {
        id: "puntos-de-fertilidad",
        title: "La energía de cada progenitor",
        paragraphs: [
          "La fertilidad se muestra como puntos disponibles sobre puntos máximos. Cada ciclo de crianza utiliza un punto de cada progenitor, así que necesitas comprobar a los dos antes de empezar.",
          "La capacidad inicial general es de 5 puntos. Ditto empieza con 3. Los Pokémon del grupo huevo Desconocido no pueden criar. Estas reglas describen la capacidad base; un ejemplar puede tener ampliaciones aplicadas o puntos gastados.",
        ],
      },
      {
        id: "recuperacion",
        title: "La fertilidad vuelve con el tiempo",
        paragraphs: [
          "Un Pokémon que ha gastado fertilidad recupera un punto cada 24 horas hasta llenar su capacidad. La recuperación también tiene en cuenta el tiempo que pasa mientras estás desconectado.",
          "Si una pareja se queda sin fertilidad, la Guardería muestra ese motivo y no inicia otro ciclo. Puedes esperar a la recuperación o utilizar el objeto correspondiente.",
        ],
        callout: {
          title: "Recuperación gradual",
          text: "Las 24 horas recuperan un punto, no toda la barra de fertilidad de una sola vez.",
          type: "info",
        },
      },
      {
        id: "objetos",
        title: "Esencia y Expansor",
        paragraphs: [
          "La Esencia de Fertilidad devuelve un punto gastado al Pokémon seleccionado. Mantén el objeto en la mano mientras eliges al destinatario. Si ya tiene todos sus puntos, no necesita una recarga.",
          "El Expansor de Fertilidad aumenta la capacidad máxima en un punto, hasta un máximo de 10. Ese nuevo espacio se añade vacío: se llena mediante recuperación o con una Esencia. Ampliar la capacidad no recarga al Pokémon.",
        ],
      },
      {
        id: "castracion",
        title: "Antes de cambiar su capacidad de criar",
        paragraphs: [
          "La castración impide que un Pokémon vuelva a criar y requiere confirmación. No se soluciona con una Esencia ni con un Expansor: solo el personal puede revertirla.",
          "Comprueba este estado antes de elegir un progenitor o adquirir un ejemplar destinado a la crianza.",
        ],
        callout: {
          title: "Una decisión importante",
          text: "Lee la confirmación completa antes de castrar. La acción desactiva la crianza de ese Pokémon.",
          type: "warning",
        },
      },
    ],
    related: ["crianza", "genetica", "intercambios"],
  },
  {
    slug: "genetica",
    title: "Genética de la crianza",
    description:
      "Cómo se heredan IV, naturaleza, movimientos y habilidad en la Guardería.",
    category: "pokemon",
    icon: "dna",
    readingMinutes: 4,
    tags: [
      "genética",
      "IV",
      "naturaleza",
      "Lazo Destino",
      "Piedra Eterna",
      "shiny",
    ],
    sections: [
      {
        id: "vista-previa",
        title: "Empieza por la vista previa",
        paragraphs: [
          "La Guardería muestra una vista previa del resultado al seleccionar una pareja compatible. Cambiar los objetos de crianza actualiza esa información, así que revísala antes de iniciar el ciclo.",
          "La cría nace a nivel 1. Elige primero una pareja compatible y después decide qué características quieres conservar; los objetos de crianza ayudan a orientar la herencia.",
        ],
      },
      {
        id: "ivs",
        title: "La herencia de los IV",
        paragraphs: [
          "Sin Lazo Destino se heredan 3 estadísticas de IV de los progenitores. Con un Lazo Destino en cualquiera de los dos, se heredan 5. Cada estadística heredada procede de uno de los padres; los IV restantes se generan para la cría.",
          "Los objetos recios de entrenamiento fijan la herencia del IV correspondiente de su portador. Si ambos padres llevan uno, se elige uno de esos dos efectos: no se garantizan ambos a la vez.",
        ],
        callout: {
          title: "Heredar no significa mejorar",
          text: "El Lazo Destino transmite más IV de los padres. Elige buenos progenitores: el objeto no convierte automáticamente esos valores en perfectos.",
          type: "tip",
        },
      },
      {
        id: "naturaleza-y-habilidad",
        title: "Naturaleza y habilidad",
        paragraphs: [
          "La Piedra Eterna transmite la naturaleza de su portador. Si ambos progenitores llevan una, se elige entre sus naturalezas. Sin ella, la naturaleza se determina al generar la cría.",
          "La habilidad toma como referencia a la madre o, en una pareja con Ditto, al otro progenitor. Debe ser una habilidad válida para la especie de la cría y su herencia no está garantizada.",
        ],
      },
      {
        id: "movimientos-y-shiny",
        title: "Movimientos huevo y variocolor",
        paragraphs: [
          "La cría puede heredar movimientos que sus padres conocen o tienen disponibles, siempre que estén incluidos en su lista de movimientos huevo. Se transmiten como máximo cuatro.",
          "La probabilidad configurada de variocolor en la crianza es de 1 entre 8.192. Tener un progenitor variocolor no garantiza una cría variocolor. La Poké Ball utilizada en el ciclo será la de la cría.",
        ],
      },
    ],
    related: ["crianza", "fertilidad", "tu-equipo"],
  },
  /*
   * Apartado temporalmente desactivado para que no aparezca en la wiki.
   * Se conserva el contenido completo para poder reactivarlo más adelante.
   *
  {
    slug: "fusiones",
    title: "Fusiones: descubre a Volcadevoir",
    description:
      "Combina a Gardevoir y Volcarona en una especie exclusiva de Blokedex.",
    category: "pokemon",
    icon: "sparkles",
    readingMinutes: 4,
    featured: true,
    tags: ["fusión", "Volcadevoir", "Gardevoir", "Volcarona", "exclusivo"],
    sections: [
      {
        id: "volcadevoir",
        title: "Dos compañeros. Una nueva especie.",
        paragraphs: [
          "La receta disponible combina a Gardevoir y Volcarona para crear a Volcadevoir, un Pokémon de tipo Psíquico y Fuego. El orden de los dos progenitores no importa.",
          "Volcadevoir se obtiene mediante esta fusión: no tiene una aparición salvaje ni una evolución alternativa configuradas. Pertenece al grupo huevo Desconocido, por lo que no puede criar. También cuenta con montura terrestre y aérea.",
        ],
      },
      {
        id: "preparar-camara",
        title: "Prepara la Cámara de Fusión",
        paragraphs: [
          "Selecciona a Gardevoir y Volcarona desde tu equipo o PC. Añade la Poké Ball que contendrá al resultado, revisa la receta y confirma el inicio.",
          "Puedes mantener una sola operación activa. Los dos Pokémon permanecen dentro de la cámara mientras avanza el proceso, así que organiza tu equipo antes de empezar.",
        ],
        callout: {
          title: "La fusión consume a los progenitores",
          text: "Al recoger la fusión, los dos Pokémon originales se sustituyen por Volcadevoir. Comprueba que quieres utilizar esos ejemplares antes de confirmar.",
          type: "warning",
        },
      },
      {
        id: "espera-y-recogida",
        title: "Dos horas para la transformación",
        paragraphs: [
          "La fusión de Volcadevoir dura 2 horas y el tiempo sigue avanzando aunque te desconectes. Consulta la cámara para ver el estado y el tiempo restante.",
          "Cuando esté lista, recógela desde la cámara. Necesitas espacio en el equipo o el PC. Mientras la operación está en curso, puedes cancelarla mediante confirmación para recuperar los dos Pokémon y la Poké Ball.",
        ],
      },
      {
        id: "resultado",
        title: "Cómo se forma el resultado",
        paragraphs: [
          "El resultado toma el nivel del progenitor de mayor nivel. Hereda 3 estadísticas de IV entre los dos padres y genera el resto. Su naturaleza se elige al crear la fusión; la cámara no utiliza los objetos de herencia de la Guardería.",
          "La probabilidad de variocolor configurada es de 1 entre 8.192. Las características de los progenitores no convierten por sí solas el resultado en un variocolor garantizado.",
        ],
      },
    ],
    related: ["crianza", "genetica", "tu-equipo"],
  },
  */
  {
    slug: "legendarios",
    title: "Legendarios y singulares",
    description:
      "Conoce las restricciones de obtención antes de salir a buscar una especie excepcional.",
    category: "pokemon",
    icon: "flame",
    readingMinutes: 2,
    tags: ["legendarios", "singulares", "míticos", "captura", "restricciones"],
    sections: [
      {
        id: "regla-del-servidor",
        title: "Su obtención normal está bloqueada",
        paragraphs: [
          "Blokedex bloquea la aparición y captura normales de los Pokémon legendarios y singulares. También impide obtener las especies restringidas mediante evolución, huevos y acciones especiales de aparición.",
          "Esto significa que no debes planificar una búsqueda de estas especies como si fueran encuentros salvajes habituales. Que una especie exista en el catálogo de Pokémon no implica que se pueda conseguir explorando.",
        ],
      },
      {
        id: "especies-incluidas",
        title: "La restricción también cubre casos especiales",
        paragraphs: [
          "Además de las especies clasificadas como legendarias o singulares, la lista del servidor incluye expresamente a Ondulagua, Ferroverdor, Flamariete, Electrofuria, Ferromole y Ferrotesta.",
          "La regla no significa que todos los Pokémon paradoja estén bloqueados: se aplica a las categorías y especies incluidas por el servidor.",
        ],
      },
      {
        id: "recompensas-especiales",
        title: "Consulta cada recompensa especial",
        paragraphs: [
          "Si una actividad o recompensa especial ofrece un Pokémon, comprueba su descripción y condiciones dentro del juego. Esta wiki no presupone una vía alternativa de obtención para cada legendario.",
          "Para tus objetivos habituales, trabaja con las especies disponibles por captura, crianza, tienda y comercio, y reserva las expectativas de premios excepcionales a lo que anuncie cada actividad.",
        ],
      },
    ],
    related: ["tu-equipo", "misiones", "tienda-pokemon"],
  },
  {
    slug: "medallas",
    title: "La ruta de las ocho medallas",
    description:
      "Supera los gimnasios en orden y desbloquea nuevos límites de nivel para tu equipo.",
    category: "aventura",
    icon: "trophy",
    readingMinutes: 4,
    featured: true,
    tags: ["medallas", "gimnasios", "líderes", "nivel", "progresión"],
    sections: [
      {
        id: "como-avanzar",
        title: "Un reto que crece contigo",
        paragraphs: [
          "La ruta de Blokedex tiene ocho gimnasios y se completa en orden. Empiezas con un límite de nivel 17. Vencer al líder correspondiente otorga su medalla y desbloquea el siguiente límite.",
          "El menú de Medallas te permite revisar tu progreso y las recompensas asociadas. Cada medalla de esta ruta tiene recompensas configuradas para reclamarse una vez; volver a combatir no equivale a cobrar de nuevo ese premio.",
        ],
      },
      {
        id: "ruta",
        title: "Los líderes y sus límites",
        paragraphs: [
          "Este es el orden de la ruta. El nivel indicado es el límite que desbloqueas después de obtener esa medalla.",
        ],
        bullets: [
          "1. Astria · Psíquico → nivel 23.",
          "2. Ferran · Acero → nivel 29.",
          "3. Terrax · Roca → nivel 36.",
          "4. Elian · Normal → nivel 41.",
          "5. Marel · Agua → nivel 48.",
          "6. Ignar · Fuego → nivel 55.",
          "7. Sylva · Planta → nivel 62.",
          "8. Draven · Dragón → nivel 85.",
        ],
      },
      {
        id: "entrenamiento",
        title: "Prepara el siguiente enfrentamiento",
        paragraphs: [
          "Adapta los movimientos y los tipos de tu equipo al líder que te toca. El progreso no depende solo de subir niveles: el límite existe para que la preparación del combate importe.",
          "Las salas de experiencia pueden ayudar a entrenar, pero respetan el límite de medallas. Los combates de gimnasios y las salas especiales tienen reglas propias de recompensas; no cuentan automáticamente para todas las misiones y estadísticas de entrenadores.",
        ],
      },
      {
        id: "siguiente-reto",
        title: "Después de la octava medalla",
        paragraphs: [
          "Con las ocho medallas reúnes el requisito de entrada de la Liga Pokémon. Allí te espera una prueba independiente: cuatro Altos Mandos y un campeón dentro del mismo intento.",
          "Completar la Liga mantiene el límite de nivel 85. No se desbloquea automáticamente un límite de 100 al conseguir la medalla de campeón.",
        ],
        callout: {
          title: "Dos tipos de gimnasio",
          text: "Esta ruta corresponde a los líderes de la aventura. Los gimnasios gestionados por jugadores tienen sus propios desafíos y reglas.",
          type: "info",
        },
      },
    ],
    related: ["liga-pokemon", "tu-equipo", "misiones"],
  },
  {
    slug: "liga-pokemon",
    title: "La Liga Pokémon",
    description:
      "Cuatro Altos Mandos, un campeón y una hora para culminar tu aventura.",
    category: "aventura",
    icon: "crown",
    readingMinutes: 4,
    tags: ["liga", "Alto Mando", "campeón", "Antonio", "PokeJavieff"],
    sections: [
      {
        id: "entrar",
        title: "Tu siguiente gran desafío",
        paragraphs: [
          "Para iniciar la Liga necesitas las ocho medallas de gimnasios de Blokedex. Habla con Antonio, el recepcionista, para comenzar tu intento.",
          "Cada jugador mantiene su propio progreso dentro del reto. Puedes consultar los miembros superados y el tiempo restante durante la prueba. Prepara tu equipo antes de empezar: el intento dura como máximo 1 hora.",
        ],
      },
      {
        id: "alto-mando",
        title: "Elige el orden del Alto Mando",
        paragraphs: [
          "Debes derrotar a Cynthia, Lionel, Ash y Red. Puedes enfrentarte a los cuatro en el orden que prefieras. El campeón solo queda disponible cuando has vencido a todos ellos dentro del intento actual.",
          "El combate final es contra PokeJavieff. Hay varias versiones configuradas de los equipos de la Liga, de modo que no conviene basar toda tu preparación en una única composición rival.",
        ],
        bullets: [
          "Cynthia · Alto Mando.",
          "Lionel · Alto Mando.",
          "Ash · Alto Mando.",
          "Red · Alto Mando.",
          "PokeJavieff · Campeón final.",
        ],
      },
      {
        id: "mantener-intento",
        title: "Llega hasta el final del intento",
        paragraphs: [
          "El intento se reinicia si pierdes o huyes, sales de la sala de la Liga, cambias de mundo, te desconectas o agotas el tiempo. El progreso de los Altos Mandos pertenece a ese intento.",
          "Tras una derrota hay una espera de 5 minutos antes de poder volver a intentarlo. Los combates de la Liga no entregan las recompensas normales de entrenadores ni añaden progreso a sus misiones.",
        ],
        callout: {
          title: "Prepara tiempo para completar la prueba",
          text: "Una desconexión o salir de la zona pone fin al intento. Entra cuando puedas dedicarte a la Liga hasta terminar.",
          type: "warning",
        },
      },
      {
        id: "victoria",
        title: "Hazte un sitio entre las leyendas",
        paragraphs: [
          "Completar la Liga concede la medalla de campeón, el rango Leyenda y un trofeo Pokémon. El límite de nivel continúa en 85.",
          "La Liga está planteada como una culminación de la ruta: quien ya la ha completado no puede iniciar otro recorrido para repetir sus recompensas.",
        ],
      },
    ],
    related: ["medallas", "tu-equipo", "genetica"],
  },
  {
    slug: "misiones",
    title: "Misiones y objetivos",
    description:
      "Convierte tus capturas, combates y actividades cotidianas en un plan de progreso.",
    category: "aventura",
    icon: "scroll-text",
    readingMinutes: 3,
    tags: ["misiones", "diarias", "semanales", "mensuales", "recompensas"],
    sections: [
      {
        id: "periodos",
        title: "Un objetivo para cada ritmo",
        paragraphs: [
          "Las misiones se organizan en diarias, semanales y mensuales. La configuración asigna hasta 3 diarias, 3 semanales y 2 mensuales. También hay misiones de evento cuando se habilita y asigna una actividad especial.",
          "Revisa las que tienes activas antes de salir: puedes combinar varios objetivos en una misma sesión. Sus requisitos y recompensas aparecen en el menú de Misiones.",
        ],
      },
      {
        id: "objetivos",
        title: "Lee la acción y el objetivo exactos",
        paragraphs: [
          "El catálogo incluye capturas generales, especies concretas, tipos de Pokémon, evoluciones, niveles ganados, combates, fabricación de Poké Balls, recolección de bonguris, eclosiones e intercambios.",
          "No basta con que dos acciones se parezcan: capturar un Pokémon no equivale a recibirlo de un intercambio. Sigue el contador de la misión para comprobar que la actividad que realizas corresponde a su objetivo.",
        ],
        callout: {
          title: "Los combates especiales tienen sus reglas",
          text: "Los entrenadores de gimnasios, la Liga y determinadas salas de entrenamiento están excluidos del progreso normal de misiones de entrenadores.",
          type: "info",
        },
      },
      {
        id: "reclamar",
        title: "Completar y reclamar",
        paragraphs: [
          "Cuando alcanzas todos los objetivos, la misión queda lista para reclamar. Abre su recompensa o utiliza el acceso a las reclamaciones pendientes para recibirla.",
          "Las recompensas varían entre misiones y pueden incluir dinero, objetos y experiencia de misiones. Este último progreso tiene sus propios niveles y premios; es distinto del nivel de tus Pokémon.",
        ],
      },
      {
        id: "renovar",
        title: "Renovaciones y cambios de misión",
        paragraphs: [
          "Las diarias se renuevan a medianoche del servidor, las semanales los lunes y las mensuales el día 1. Mira el tiempo restante del menú para organizar los objetivos más largos.",
          "Si una misión no encaja con tus planes, puedes cambiarla mediante el sistema de renovación. Primero se usan fichas disponibles y después puede haber un coste en dinero; comprueba el coste y el límite antes de confirmar.",
        ],
      },
    ],
    related: ["tu-equipo", "crianza", "intercambios"],
  },
  {
    slug: "intercambios",
    title: "Intercambios entre jugadores",
    description:
      "Acuerda una oferta, revisa ambos lados y completa el intercambio con confirmación mutua.",
    category: "comunidad",
    icon: "arrow-left-right",
    readingMinutes: 3,
    tags: ["intercambios", "comercio", "Pokémon", "objetos", "dinero"],
    sections: [
      {
        id: "solicitud",
        title: "Empieza con una solicitud",
        paragraphs: [
          "El intercambio directo conecta a dos jugadores mediante una solicitud que el destinatario puede aceptar o rechazar. Tras aceptarla, se abre una sesión con las ofertas de ambos.",
          "Puedes combinar Pokémon, objetos y dinero en la misma operación. Los selectores permiten escoger Pokémon del equipo o PC y preparar la cantidad de dinero desde el formulario del menú.",
        ],
      },
      {
        id: "revisar",
        title: "Revisa las dos ofertas",
        paragraphs: [
          "Comprueba qué entregas y qué recibirás antes de marcar tu oferta como lista. Revisa cada Pokémon y cada cantidad; el dinero mostrado es una transferencia del saldo del juego.",
          "Si cualquiera cambia la oferta, las confirmaciones se reinician. Esto permite revisar de nuevo los términos después de cada modificación.",
        ],
        bullets: [
          "Añade tus Pokémon, objetos o dinero.",
          "Inspecciona la oferta del otro jugador.",
          "Confirma tu oferta cuando todo esté acordado.",
          "Con ambas ofertas confirmadas, completa la confirmación final.",
        ],
      },
      {
        id: "entrega",
        title: "Deja espacio para recibir",
        paragraphs: [
          "Los participantes necesitan espacio para los objetos que van a recibir y capacidad para los Pokémon. Si falta espacio, el intercambio no puede completarse.",
          "Cerrar la sesión o que uno de los jugadores se desconecte puede cancelar el intercambio. Espera al mensaje de finalización antes de darlo por completado.",
        ],
        callout: {
          title: "La última revisión importa",
          text: "Vuelve a leer ambos lados si las confirmaciones se reinician: significa que la oferta ha cambiado.",
          type: "tip",
        },
      },
    ],
    related: ["gts", "fertilidad", "tu-equipo"],
  },
  {
    slug: "gts",
    title: "GTS: el mercado de jugadores",
    description:
      "Publica ventas, compara Pokémon, negocia ofertas y recoge lo que te corresponde.",
    category: "comunidad",
    icon: "store",
    readingMinutes: 4,
    featured: true,
    tags: ["GTS", "mercado", "ventas", "subastas", "ofertas", "reclamaciones"],
    sections: [
      {
        id: "explorar",
        title: "Encuentra lo que buscas",
        paragraphs: [
          "El GTS reúne las publicaciones de otros jugadores. Puedes buscar, ordenar y filtrar los resultados para encontrar Pokémon, objetos y productos relacionados con terrenos.",
          "Abre el detalle antes de comprar. En los Pokémon puedes revisar su información, estadísticas, IV y EV. El nombre de la especie no describe por sí solo al ejemplar que se vende.",
        ],
      },
      {
        id: "publicar",
        title: "Pon tu oferta en el mercado",
        paragraphs: [
          "En Crear oferta, elige el producto y establece el precio y la duración. Para los Pokémon puedes utilizar el selector de equipo y PC. Revisa la publicación antes de confirmarla.",
          "Según las opciones de la venta, puedes admitir ofertas o usar una subasta. Mantén el control de tus publicaciones desde el apartado de tus ventas y consulta su estado antes de retirarlas.",
        ],
      },
      {
        id: "negociar",
        title: "Compra, negocia o puja",
        paragraphs: [
          "Una compra directa acepta el precio anunciado. Una oferta permite proponer otra cantidad, que el vendedor puede aceptar, rechazar o responder con una contraoferta.",
          "Las subastas utilizan pujas y muestran el mínimo necesario para la siguiente. Revisa el importe y el tiempo restante antes de participar. Si una puja anterior se reembolsa, el dinero pasa al apartado de reclamaciones.",
        ],
      },
      {
        id: "reclamaciones",
        title: "No olvides tus reclamaciones",
        paragraphs: [
          "El GTS utiliza un apartado de Reclamaciones para entregar productos, ingresos y devoluciones. Una venta terminada o una publicación caducada puede dejar algo pendiente allí.",
          "Puedes reclamar una entrada concreta o todas las disponibles. Si falta espacio en el inventario, equipo o PC, libera huecos y vuelve a intentarlo.",
        ],
        callout: {
          title: "Una visita útil después de comerciar",
          text: "Revisa Reclamaciones después de vender, comprar, retirar una publicación o participar en una subasta.",
          type: "tip",
        },
      },
    ],
    related: ["intercambios", "tienda-pokemon", "genetica"],
  },
  {
    slug: "tienda-pokemon",
    title: "Pokémon y suministros de la Tienda",
    description:
      "Consulta el catálogo oficial, sus existencias y las condiciones de compra y venta.",
    category: "pokemon",
    icon: "shopping-bag",
    readingMinutes: 3,
    tags: ["tienda", "Pokémon", "Poké Balls", "precios", "suministros"],
    sections: [
      {
        id: "catalogo",
        title: "Prepara tu próxima salida",
        paragraphs: [
          "La Tienda del servidor tiene categorías de Poké Balls, medicina, bayas, entrenamiento, evolución, objetos equipados y Pokémon, además de materiales y otros suministros.",
          "Usa las categorías y el buscador para localizar un producto. Su ficha muestra la operación disponible y las condiciones que se aplican. Las compras de la Tienda y las publicaciones de jugadores del GTS son espacios distintos.",
        ],
      },
      {
        id: "pokemon",
        title: "Compra y vende ejemplares compatibles",
        paragraphs: [
          "El catálogo configurado incluye ofertas de Pikachu, Eevee, Bulbasaur, Charmander y Squirtle. Cada ficha define el Pokémon entregado y, cuando admite venta al servidor, los ejemplares que acepta.",
          "Las ofertas de estas especies no aceptan ejemplares variocolor. No des por hecho que cualquier Pokémon de tu colección se puede vender a la Tienda: primero comprueba las condiciones del producto y el selector de Pokémon compatibles.",
        ],
      },
      {
        id: "precio-y-stock",
        title: "El precio puede cambiar",
        paragraphs: [
          "Algunos productos tienen precios dinámicos que responden a compras y ventas y se recuperan gradualmente hacia su valor base. También pueden tener existencias y límites diarios por jugador.",
          "Por eso, la ficha y la confirmación del momento son la referencia para el precio final. Revisa la cantidad, el coste, el saldo y el stock antes de completar una operación.",
        ],
        callout: {
          title: "Compara el total",
          text: "Una compra de varias unidades puede verse afectada por las reglas de precio y los límites del producto. Utiliza el total de la confirmación para decidir.",
          type: "tip",
        },
      },
      {
        id: "organizar-compras",
        title: "Compra con un objetivo",
        paragraphs: [
          "Antes de reponer suministros, revisa si vas a capturar, criar o preparar un gimnasio. La crianza necesita una Poké Ball por huevo; una salida larga requiere espacio para capturas y recursos.",
          "Reserva los Pokémon con valor para tu equipo o tus proyectos de crianza. Si buscas una negociación sobre un ejemplar concreto, consulta también el GTS y los intercambios directos.",
        ],
      },
    ],
    related: ["gts", "intercambios", "crianza"],
  },
];
