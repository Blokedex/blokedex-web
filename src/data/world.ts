import type { WikiArticle } from "./types";

export const worldArticles: WikiArticle[] = [
  {
    slug: "primeros-pasos",
    title: "Tu primera aventura",
    description:
      "Del primer vistazo al menú a tu primera base: empieza a encontrar tu sitio en Blokedex.",
    category: "aventura",
    icon: "compass",
    readingMinutes: 3,
    featured: true,
    tags: [
      "inicio",
      "principiantes",
      "bienvenida",
      "supervivencia",
      "kit inicial",
    ],
    sections: [
      {
        id: "bienvenida",
        title: "Revisa tu equipo de bienvenida",
        paragraphs: [
          "Al entrar por primera vez, recibes automáticamente un kit inicial. Incluye una tarjeta de entrenador, una Pokédex, Poké Balls y Super Balls, bayas, una mochila de hierro, una bolsa de bayas y pergaminos de teletransporte.",
          "Dedica un momento a ordenar estos objetos. La mochila te ayuda a llevar suministros, las bayas apoyan a tu equipo y las Poké Balls te permiten empezar a descubrir compañeros.",
        ],
        callout: {
          title: "Un regalo para comenzar",
          text: "El kit inicial se entrega una sola vez. Los kits de rango tienen su propio apartado y sus propios tiempos de espera.",
          type: "info",
        },
      },
      {
        id: "conoce-menu",
        title: "Haz del menú tu punto de partida",
        paragraphs: [
          "El menú principal reúne tu tarjeta de entrenador y los accesos a las grandes actividades del servidor: trabajos, protecciones, mercado, tienda, misiones, recompensas, medallas y guardería.",
          "Abre también Pendientes. Allí se agrupan entregas que todavía tienes que reclamar, como recompensas, operaciones del mercado o premios de misiones.",
        ],
      },
      {
        id: "primera-base",
        title: "Prepara una base en Survival",
        paragraphs: [
          "Survival es el mundo de tu aventura de construcción y exploración. Busca un lugar que te guste, reúne materiales y crea una protección antes de guardar tus objetos más valiosos.",
          "Los bloques de reclamación son tu presupuesto de terreno. Recibes una reserva inicial y puedes conseguir más mientras juegas de forma activa. El menú te muestra el coste de la zona antes de confirmar.",
        ],
        bullets: [
          "Reúne comida y herramientas para explorar.",
          "Protege la superficie de tu base y revisa los permisos de invitados.",
          "Guarda un punto de llegada dentro de la protección.",
          "Consulta tus trabajos y recompensas para ver cómo progresa tu aventura.",
        ],
      },
    ],
    related: ["menus", "protecciones", "exploracion", "kits"],
  },
  {
    slug: "menus",
    title: "Tu menú, todo a mano",
    description:
      "Conoce tu tarjeta de entrenador, los accesos a cada actividad y el centro de entregas pendientes.",
    category: "aventura",
    icon: "panels-top-left",
    readingMinutes: 2,
    tags: [
      "menú",
      "interfaz",
      "perfil",
      "estadísticas",
      "pendientes",
      "rangos",
    ],
    sections: [
      {
        id: "centro-aventura",
        title: "Un lugar para cada actividad",
        paragraphs: [
          "El menú principal es el centro de tu aventura. Desde él puedes consultar tus estadísticas y acceder a las actividades de Blokedex sin memorizar instrucciones de chat.",
        ],
        bullets: [
          "Recompensas y Misiones: objetivos y premios por recoger.",
          "Tienda y Mercado: comercio y operaciones de compra o venta.",
          "Protecciones: tus terrenos y las invitaciones que has recibido.",
          "Trabajos y Kits: progreso de oficios y suministros de tus rangos.",
          "Medallas y Guardería: colección de logros y gestión de la crianza.",
        ],
      },
      {
        id: "tarjeta",
        title: "Tu tarjeta de entrenador",
        paragraphs: [
          "Tu tarjeta reúne tu identidad y los datos de tu aventura. Las estadísticas se organizan por capturas, Pokédex, shinies, combate, progreso Pokémon, economía y actividad del servidor.",
          "En Rangos puedes consultar los que has desbloqueado, leer cómo se consiguen y elegir cuál quieres mostrar. Seleccionar un rango visible requiere haberlo obtenido previamente.",
        ],
      },
      {
        id: "pendientes",
        title: "Recoge lo que ya has ganado",
        paragraphs: [
          "Pendientes resume las recompensas, entregas del mercado y premios de misiones que esperan una acción tuya. Puedes entrar en su apartado para revisarlos o usar la opción de reclamar todo.",
          "Comprueba el resumen después de recoger tus entregas. Si falta espacio en el inventario, algunas pueden seguir pendientes.",
        ],
        callout: {
          title: "Una buena rutina",
          text: "Deja huecos libres y revisa Pendientes antes de salir de exploración. Así llevas contigo los suministros que ya tienes disponibles.",
          type: "tip",
        },
      },
    ],
    related: ["primeros-pasos", "recompensas", "kits", "economia"],
  },
  {
    slug: "protecciones",
    title: "Un hogar que es tuyo",
    description:
      "Reclama terreno, decide quién puede entrar y construir, y convierte tu base en un lugar seguro.",
    category: "aventura",
    icon: "shield-check",
    readingMinutes: 4,
    featured: true,
    tags: [
      "claims",
      "base",
      "terreno",
      "protecciones",
      "permisos",
      "bloques",
      "invitaciones",
    ],
    sections: [
      {
        id: "crear",
        title: "Dibuja y confirma tu terreno",
        paragraphs: [
          "Una protección, también llamada claim, reserva una zona y permite controlar qué ocurre en ella. Puedes crearla en Survival y en sus dimensiones del Nether y del End.",
          "En Protecciones, elige crear una zona. Activa la selección, marca dos esquinas con clic izquierdo y derecho, y revisa la superficie y el coste antes de confirmar. No puedes ocupar terreno que se solape con otra propiedad.",
        ],
        callout: {
          title: "Tu presupuesto de terreno",
          text: "Empiezas con 500 bloques de reclamación. La configuración concede 25 bloques cada 5 minutos de actividad y pausa esta ganancia tras 5 minutos de inactividad.",
          type: "info",
        },
      },
      {
        id: "permisos",
        title: "Invita con los permisos adecuados",
        paragraphs: [
          "Los grupos te permiten dar acceso a personas concretas. Revisa por separado construir, romper bloques, abrir contenedores, usar puertas, cultivar e interactuar con mecanismos.",
          "La entrada está permitida inicialmente, pero construir, romper y abrir contenedores están restringidos. Una visita no necesita tener todos los permisos de un compañero de base.",
        ],
        bullets: [
          "Configura el acceso de cada grupo e invita a sus miembros.",
          "Comprueba el listado de invitados cuando cambie tu grupo de juego.",
          "Ajusta las reglas de PvP, enemigos, cultivos, fuego y explosiones según el uso de la zona.",
        ],
      },
      {
        id: "gestionar",
        title: "Adapta la base a tu aventura",
        paragraphs: [
          "Puedes renombrar la protección, cambiar su color, visualizar sus límites y editar los mensajes de entrada y salida. También puedes ampliar o reducir la superficie desde su gestión.",
          "Guarda un punto de teletransporte dentro de tu terreno para volver con facilidad. Si activas la opción pública, la zona aparece en el listado de protecciones visitables.",
        ],
      },
      {
        id: "propiedad",
        title: "Antes de vender o liberar",
        paragraphs: [
          "Las protecciones y los bloques de reclamación pueden participar en operaciones del mercado y en intercambios. Una protección preparada como activo comercial puede quedar bloqueada para edición mientras la operación siga en curso.",
          "Al abandonar una protección se devuelve su superficie en bloques de reclamación, pero el terreno pierde esa protección. Al transferirla se limpian los miembros y grupos asignados según la configuración actual.",
        ],
        callout: {
          title: "Confirma la propiedad",
          text: "Una base personal y un territorio del clan son propiedades distintas. Entrar en un clan no le entrega tu casa.",
          type: "tip",
        },
      },
    ],
    related: ["clanes", "exploracion", "economia", "primeros-pasos"],
  },
  {
    slug: "clanes",
    title: "Construid algo juntos",
    description:
      "Comparte territorios, organiza a tus compañeros y haz crecer un clan con identidad propia.",
    category: "comunidad",
    icon: "users-round",
    readingMinutes: 5,
    featured: true,
    tags: [
      "clanes",
      "alianzas",
      "banco",
      "cofres",
      "territorios",
      "equipo",
      "entrenamiento",
    ],
    sections: [
      {
        id: "formar",
        title: "Encuentra a tu gente",
        paragraphs: [
          "Puedes crear un clan con nombre, etiqueta opcional, descripción, color y escudo. La creación muestra el coste y lo cobra al confirmar. También puedes explorar otros clanes y revisar tus invitaciones.",
          "Cada clan elige cómo admitir integrantes: entrada abierta, solicitudes que debe aprobar una persona autorizada o invitaciones directas. Puede exigir medallas, haber completado la Liga Pokémon o una victoria contra uno de sus objetivos de entrenamiento.",
        ],
        callout: {
          title: "Tu pertenencia",
          text: "Solo puedes pertenecer a un clan. Entrar conserva tus protecciones personales y no transfiere automáticamente dinero ni bloques.",
          type: "info",
        },
      },
      {
        id: "territorios",
        title: "Territorios y zonas con un propósito",
        paragraphs: [
          "El clan tiene su propia reserva de bloques y sus propios territorios. Dentro de un territorio se pueden crear zonas para viviendas, almacenes, cultivos, espacios comunes o arenas, con responsables y permisos específicos.",
          "El terreno compartido pertenece al clan. Una persona autorizada puede transferir una protección personal al clan, pero esa acción cambia su propiedad de forma definitiva.",
        ],
      },
      {
        id: "recursos",
        title: "Un banco y dos cofres compartidos",
        paragraphs: [
          "Puedes aportar dinero y bloques personales al banco del clan. Hay un cofre común y otro reservado a líderes; los permisos controlan quién puede usarlos y quién puede consultar sus movimientos.",
          "El banco financia mejoras de capacidad de miembros, viaje rápido, difusión del reclutamiento, espacio de los cofres, objetivos de entrenamiento y bonificaciones dentro del territorio. Revisa el efecto y el precio de la siguiente mejora antes de comprarla.",
        ],
        callout: {
          title: "Antes de aportar",
          text: "El dinero y los bloques que entregas al clan no se devuelven automáticamente cuando sales. Tus protecciones personales permanecen intactas.",
          type: "warning",
        },
      },
      {
        id: "organizacion",
        title: "Organización, alianzas y entrenamiento",
        paragraphs: [
          "Los rangos del clan organizan la autoridad sobre miembros, territorios, banco y ajustes. El liderazgo puede transferirse; hacerlo cambia quién dirige el clan, mientras el terreno continúa siendo del grupo.",
          "Las alianzas unen clanes mediante un chat compartido. Ser aliado no concede acceso automático a sus bloques, cofres o banco.",
          "Los objetivos de entrenamiento permiten practicar contra equipos Pokémon configurados por el clan. Estos combates no otorgan experiencia, recompensas, progreso general ni registros de Pokédex; una victoria sí puede servir como requisito de ingreso cuando el clan la exige.",
        ],
      },
    ],
    related: ["guerras-de-clanes", "protecciones", "economia"],
  },
  {
    slug: "guerras-de-clanes",
    title: "Una victoria de todo el clan",
    description:
      "Preparación, ataques declarados y estrellas: entiende cómo se decide una guerra de clanes.",
    category: "comunidad",
    icon: "swords",
    readingMinutes: 4,
    tags: ["guerra", "clanes", "PvP", "estrellas", "combate", "competición"],
    sections: [
      {
        id: "desafio",
        title: "Todo empieza con un desafío",
        paragraphs: [
          "Una persona con permiso para gestionar guerras puede desafiar a otro clan. El rival debe aceptar para que comience la preparación. No se puede desafiar a un clan con el que se comparte una alianza.",
          "Cada clan necesita al menos 2 miembros y solo puede mantener un desafío o guerra sin terminar. Al aceptar, se cobran 10.000 monedas de cada banco para formar el bote.",
        ],
        callout: {
          title: "Qué combate cuenta",
          text: "Las guerras usan PvP de Minecraft entre jugadores. El ataque debe declararse en la guerra para que el duelo forme parte del marcador.",
          type: "info",
        },
      },
      {
        id: "preparacion",
        title: "Una alineación y dos fases",
        paragraphs: [
          "Ambos clanes tienen alineaciones del mismo tamaño, con un máximo de 15 participantes por lado. La selección prioriza al líder y después a los miembros con actividad más reciente.",
          "La configuración actual da 24 horas de preparación y 24 horas de fase de ataques. Consulta el resumen de la guerra para ver sus participantes, el rival y el tiempo restante.",
        ],
      },
      {
        id: "ataques",
        title: "Elige bien cada ataque",
        paragraphs: [
          "Cada participante dispone de 2 ataques. Desde la guerra, selecciona un rival conectado de la alineación enemiga y confirma el duelo. El intento se consume cuando empieza y tiene un límite de 10 minutos.",
          "No puedes iniciar un ataque si alguno de los dos ya está en combate. Desconectarse durante el duelo se registra como abandono y afecta al resultado.",
        ],
        bullets: [
          "Derrotar al rival concede una estrella.",
          "Terminar la victoria con al menos el 50 % de vida añade otra estrella.",
          "Terminar con al menos el 80 % de vida permite conseguir la tercera.",
        ],
      },
      {
        id: "resultado",
        title: "Cómo se decide el ganador",
        paragraphs: [
          "El marcador conserva los mejores resultados contra cada objetivo. Primero se comparan las estrellas; si empatan, se compara el porcentaje de destrucción del marcador, calculado a partir del daño del duelo.",
          "El clan ganador recibe el bote en su banco. Si también empatan en el desempate, ambos recuperan su entrada. El historial permite revisar los ataques y el resultado final.",
        ],
        callout: {
          title: "Planifica con tus compañeros",
          text: "Revisa qué objetivos ya tienen un buen resultado y cuántos intentos os quedan antes de declarar tu siguiente ataque.",
          type: "tip",
        },
      },
    ],
    related: ["clanes", "economia", "tumbas"],
  },
  {
    slug: "economia",
    title: "Dale valor a tu aventura",
    description:
      "Aprende de dónde salen tus monedas y cómo organizar tus compras, entregas y aportaciones al clan.",
    category: "comunidad",
    icon: "coins",
    readingMinutes: 2,
    tags: [
      "economía",
      "monedas",
      "dinero",
      "saldo",
      "tienda",
      "mercado",
      "comercio",
    ],
    sections: [
      {
        id: "monedas",
        title: "La moneda de Blokedex",
        paragraphs: [
          "La economía del servidor utiliza Monedas. El saldo aparece en las interfaces de compra y gestión, y algunas pantallas lo presentan con el símbolo €. Es la moneda del juego.",
          "Antes de confirmar una operación, revisa su cantidad y el saldo que necesitas. El banco del clan y tu saldo personal se gestionan por separado.",
        ],
      },
      {
        id: "ganar",
        title: "Gana mientras juegas",
        paragraphs: [
          "Los trabajos recompensan actividades como extraer minerales, cultivar, capturar Pokémon, pescar y explorar. Sus pagos se acompañan de experiencia para el oficio correspondiente.",
          "También hay monedas en recompensas de conexión, hitos de progreso y determinados kits de rango. Revisa los premios concretos en cada menú: completar una actividad puede desbloquear una recompensa que todavía debes reclamar.",
        ],
      },
      {
        id: "comerciar",
        title: "Consulta la operación completa",
        paragraphs: [
          "El menú principal da acceso a la tienda del servidor y al mercado entre jugadores. El mercado reúne operaciones con Pokémon, objetos y kits; las protecciones y sus bloques también se pueden preparar para comerciar.",
          "Entra en Pendientes para revisar entregas relacionadas con tus operaciones. Si gestionas un clan, comprueba además los permisos de retirada y el presupuesto compartido antes de pagar mejoras o aceptar una guerra.",
        ],
        callout: {
          title: "Un presupuesto sencillo",
          text: "Reserva suministros para tu siguiente salida y revisa tus entregas pendientes antes de gastar en nuevos proyectos.",
          type: "tip",
        },
      },
    ],
    related: ["trabajos", "recompensas", "clanes", "menus"],
  },
  {
    slug: "trabajos",
    title: "Tu oficio también cuenta",
    description:
      "Nueve trabajos convierten la exploración, la construcción y las capturas en experiencia y monedas.",
    category: "aventura",
    icon: "pickaxe",
    readingMinutes: 3,
    tags: [
      "trabajos",
      "oficios",
      "niveles",
      "dinero",
      "minería",
      "pesca",
      "agricultura",
    ],
    sections: [
      {
        id: "progresion",
        title: "Experiencia por lo que haces",
        paragraphs: [
          "Los trabajos registran actividades concretas y conceden experiencia del oficio y monedas. Abre Trabajos para consultar el nivel, el rango y las recompensas de cada uno.",
          "La progresión pasa por Novato, Aprendiz, Experto, Maestro y Leyenda. La experiencia necesaria aumenta con el nivel, así que las primeras etapas avanzan con mayor facilidad.",
        ],
      },
      {
        id: "oficios",
        title: "Encuentra tu actividad favorita",
        paragraphs: [
          "Hay nueve oficios activos, cada uno con acciones que cuentan para su progreso.",
        ],
        bullets: [
          "Minero: extraer los minerales y vetas admitidos.",
          "Excavador: excavar materiales como tierra, arena, grava, arcilla o barro.",
          "Leñador: talar árboles, incluidos los de Cobblemon.",
          "Agricultor: cosechar cultivos maduros.",
          "Cazador Pokémon: capturar Pokémon salvajes.",
          "Pescador: pescar objetos y hacer aparecer Pokémon con la caña.",
          "Encantador: encantar objetos en una mesa de encantamientos.",
          "Fundidor: retirar productos de hornos, altos hornos o ahumadores.",
          "Explorador: entrar a pie en zonas del mundo que aún no habías explorado.",
        ],
      },
      {
        id: "acciones-validas",
        title: "Qué hace válida una acción",
        paragraphs: [
          "Los cultivos deben estar maduros. La cosecha con clic derecho también puede contar cuando recoge y replanta el cultivo. Para el trabajo de leñador se comprueba que haya hojas cerca de los troncos.",
          "Los bloques colocados por jugadores no generan recompensas de minería o tala al romperlos. La exploración registra las zonas nuevas para cada persona; volver a pasar por el mismo lugar no vuelve a convertirlo en un descubrimiento.",
        ],
        callout: {
          title: "Explora a pie",
          text: "La configuración actual no recompensa la exploración en vehículos o monturas. El progreso se concede por nuevas zonas recorridas de la forma admitida por el oficio.",
          type: "tip",
        },
      },
    ],
    related: ["economia", "exploracion", "recompensas"],
  },
  {
    slug: "recompensas",
    title: "Cada avance tiene premio",
    description:
      "Calendarios de conexión, rachas e hitos de progreso: descubre qué puedes reclamar y qué viene después.",
    category: "aventura",
    icon: "gift",
    readingMinutes: 3,
    tags: [
      "recompensas",
      "diarias",
      "racha",
      "calendario",
      "hitos",
      "logros",
      "pendientes",
    ],
    sections: [
      {
        id: "login",
        title: "Tu calendario de conexión",
        paragraphs: [
          "La conexión diaria añade una recompensa al calendario activo. Las rutas de Kanto, Johto, Hoenn y Sinnoh se suceden al completar sus calendarios y ofrecen suministros para continuar la aventura.",
          "Entrar varios días consecutivos aumenta la racha y puede desbloquear premios adicionales. Recibir el día y recoger su premio son pasos distintos: las entregas quedan en tu centro de recompensas hasta que las reclamas.",
        ],
        callout: {
          title: "Cuándo cambia el día",
          text: "El reinicio diario está configurado a las 00:00 de Europe/Madrid. El calendario muestra una estimación de esa hora para la región de tu cliente.",
          type: "info",
        },
      },
      {
        id: "hitos",
        title: "Objetivos que crecen contigo",
        paragraphs: [
          "Los hitos recompensan diferentes caminos de juego: investigar la Pokédex, conseguir shinies, combatir, criar, coleccionar objetos o desarrollar actividades de recolección.",
          "Entra en una categoría para ver tu progreso actual, el siguiente objetivo y los premios de cada hito. El desglose permite consultar los Pokémon, entrenadores, objetos o actividades que ya han quedado registrados.",
        ],
      },
      {
        id: "reclamar",
        title: "Reconoce lo que está listo",
        paragraphs: [
          "El calendario distingue recompensas disponibles, bloqueadas y reclamadas. Puedes recoger el siguiente día pendiente, todo el login disponible, los hitos listos de una categoría o todo lo disponible.",
          "Los avisos de recompensas incluyen un acceso para abrir el centro. También puedes llegar desde el menú principal o desde Pendientes.",
        ],
        bullets: [
          "Verde: listo para reclamar.",
          "Rojo: todavía no disponible.",
          "Gris: ya reclamado.",
        ],
        callout: {
          title: "Mira el siguiente hito",
          text: "Consultar el detalle de una categoría te ayuda a elegir una actividad que complete tu próximo objetivo.",
          type: "tip",
        },
      },
    ],
    related: ["menus", "trabajos", "kits", "economia"],
  },
  {
    slug: "cajas",
    title: "La emoción de abrir una caja",
    description:
      "Previsualiza los premios y revisa el coste antes de confirmar tu próxima apertura.",
    category: "aventura",
    icon: "package-open",
    readingMinutes: 2,
    tags: ["cajas", "premios", "llaves", "apertura", "recompensas", "azar"],
    sections: [
      {
        id: "vista-previa",
        title: "Primero, mira lo que contiene",
        paragraphs: [
          "Las cajas cuentan con una vista previa de recompensas y una animación de apertura. Al interactuar con una caja colocada, el clic izquierdo abre la vista previa y el clic derecho inicia el proceso de apertura.",
          "Usa la vista previa de esa caja para comprobar su oferta actual. El nombre de una caja por sí solo no basta para saber qué premio puede tocarte.",
        ],
      },
      {
        id: "coste",
        title: "Revisa antes de abrir",
        paragraphs: [
          "La confirmación muestra la caja, la cantidad de aperturas, el coste y el saldo que conservarás. Comprueba la opción de pago indicada: los requisitos pueden depender de la caja.",
          "Pulsa confirmar cuando estés de acuerdo, o cancela para volver sin iniciar la apertura. Si falta el requisito de pago, acceso o disponibilidad, el sistema avisa antes de poder continuar.",
        ],
        callout: {
          title: "Una apertura es una elección",
          text: "Lee el coste completo y la cantidad de cajas que vas a abrir, especialmente cuando prepares varias aperturas.",
          type: "tip",
        },
      },
      {
        id: "resultado",
        title: "Entiende la animación",
        paragraphs: [
          "La animación acompaña a la entrega del premio. Los objetos que pasan por ella son una presentación visual; su frecuencia en pantalla no indica la probabilidad real de obtenerlos.",
          "Consulta siempre la recompensa entregada al terminar y reserva espacio en el inventario antes de abrir cajas con premios físicos.",
        ],
      },
    ],
    related: ["recompensas", "economia", "menus"],
  },
  {
    slug: "tumbas",
    title: "Vuelve a por tus cosas",
    description:
      "Qué guarda una tumba, cuánto dura su protección privada y cómo recuperar tu inventario.",
    category: "aventura",
    icon: "skull",
    readingMinutes: 3,
    tags: [
      "tumbas",
      "muerte",
      "inventario",
      "experiencia",
      "recuperar",
      "objetos",
    ],
    sections: [
      {
        id: "al-morir",
        title: "Un punto para recuperar tu equipo",
        paragraphs: [
          "Cuando mueres y hay objetos o experiencia que guardar, se crea una tumba en la ubicación de la muerte o en un punto cercano donde pueda colocarse. El aviso indica su mundo y sus coordenadas.",
          "La tumba se representa con una cabeza y un holograma que informa de su contenido y del tiempo de acceso. Está protegida contra roturas normales y explosiones.",
        ],
      },
      {
        id: "proteccion",
        title: "La exclusividad tiene un límite",
        paragraphs: [
          "Durante los primeros 15 minutos, solo el propietario puede reclamar la tumba, salvo intervención autorizada del equipo del servidor. Después se vuelve pública y otra persona puede recogerla.",
          "Las tumbas no tienen caducidad automática en la configuración actual. Eso conserva el punto de recuperación, pero no prolonga su exclusividad.",
        ],
        callout: {
          title: "Vuelve cuanto antes",
          text: "Que la tumba siga existiendo no significa que siga siendo privada. Al terminar los 15 minutos iniciales, su contenido puede ser reclamado por otros jugadores.",
          type: "warning",
        },
      },
      {
        id: "recuperar",
        title: "Recupera con clic derecho",
        paragraphs: [
          "Haz clic derecho sobre la tumba para reclamar directamente los objetos y la experiencia guardados. Los objetos recuperados intentan volver a sus casillas originales; la tumba se elimina al completar la recogida.",
          "Si has ocupado una de esas casillas con un objeto nuevo, la configuración actual suelta ese objeto al suelo para restaurar el antiguo en su sitio. Revisa también el suelo después de recuperar.",
        ],
        callout: {
          title: "Prepara el inventario",
          text: "Lleva solo lo necesario para regresar y deja libres las casillas de tu equipo anterior. Facilita la recogida y evita dejar objetos nuevos en el suelo.",
          type: "tip",
        },
      },
    ],
    related: ["exploracion", "protecciones", "primeros-pasos"],
  },
  {
    slug: "exploracion",
    title: "Siempre hay algo más allá",
    description:
      "Muévete entre el lobby y Survival, prepara tus viajes y encuentra el camino de vuelta.",
    category: "aventura",
    icon: "map",
    readingMinutes: 4,
    tags: [
      "exploración",
      "mundo",
      "Survival",
      "lobby",
      "teletransporte",
      "Nether",
      "End",
      "ascensores",
      "noche",
      "votación",
    ],
    sections: [
      {
        id: "mundos",
        title: "Lobby y Survival",
        paragraphs: [
          "El lobby tiene movimiento especial: velocidad al caminar y doble salto. Estos efectos están limitados al lobby y se restauran los valores anteriores cuando sales de él.",
          "Survival dispone de sus propias dimensiones del Nether y del End. Los portales de esas dimensiones pertenecen al mundo de supervivencia; el lobby bloquea sus accesos dimensionales.",
        ],
      },
      {
        id: "viaje-aleatorio",
        title: "Encuentra un nuevo comienzo",
        paragraphs: [
          "El teletransporte aleatorio busca un destino seguro en Survival. Durante la preparación debes quedarte quieto: moverte o dejar de reunir las condiciones para viajar cancela la cuenta atrás.",
          "El viaje tiene un tiempo de espera entre usos. Si no se encuentra un destino seguro o ya hay otra búsqueda preparándose, aparece un aviso para que puedas volver a intentarlo.",
        ],
      },
      {
        id: "amigos",
        title: "Reúnete con tus compañeros",
        paragraphs: [
          "Las peticiones de teletransporte requieren que la otra persona acepte. El aviso permite aceptar o rechazar con un clic y explica si alguien quiere ir hasta ti o te invita a ir a su posición.",
          "Las peticiones caducan y se cancelan si la otra persona se desconecta. Comprueba el sentido del viaje antes de responder.",
        ],
      },
      {
        id: "volver",
        title: "Deja preparado el regreso",
        paragraphs: [
          "Tus protecciones pueden tener un punto de llegada, siempre dentro de sus límites. Los territorios del clan también cuentan con destinos, sujetos a sus permisos y a las restricciones de movimiento o combate.",
          "Si prefieres visitar construcciones de la comunidad, el listado de protecciones públicas reúne las zonas que sus propietarios han decidido hacer visitables.",
        ],
        callout: {
          title: "Camina y descubre",
          text: "El oficio de Explorador recompensa las zonas nuevas que descubres a pie. Lleva suministros y revisa tu equipo antes de alargar la ruta.",
          type: "tip",
        },
      },
      {
        id: "ascensores",
        title: "De una planta a otra",
        paragraphs: [
          "Los ascensores conectan plantas situadas en la misma columna. Para preparar una planta, ponte sobre su bloque y usa el apartado Ascensores del menú. La creación requiere una protección donde tengas permiso para colocar bloques.",
          "Sobre una planta de ascensor, salta para subir o agáchate para bajar. El destino necesita espacio libre. Desde la gestión puedes renombrar plantas y personalizar los efectos y hologramas.",
        ],
      },
      {
        id: "votar-dia",
        title: "Decidid cuándo amanece",
        paragraphs: [
          "Cuando empieza la noche, el aviso incluye un botón para votar por el amanecer. Cada jugador puede votar una vez por noche y el indicador muestra cuántos votos faltan.",
          "La votación actual requiere el 50 % de los jugadores conectados con permiso para votar. Al alcanzarlo, se hace de día y se despeja el tiempo.",
        ],
      },
    ],
    related: ["protecciones", "trabajos", "tumbas", "clanes"],
  },
  {
    slug: "kits",
    title: "Suministros para tu siguiente paso",
    description:
      "Consulta los kits de tus rangos, revisa sus premios y recoge los que ya estén disponibles.",
    category: "aventura",
    icon: "backpack",
    readingMinutes: 2,
    tags: [
      "kits",
      "rangos",
      "suministros",
      "bienvenida",
      "aspirante",
      "progreso",
    ],
    sections: [
      {
        id: "inicial",
        title: "El primer apoyo",
        paragraphs: [
          "El kit inicial se entrega automáticamente una sola vez y no aparece como un kit periódico. Reúne herramientas de entrenador, suministros de captura, almacenamiento y objetos de viaje para tus primeras horas.",
          "Si acabas de empezar, comprueba tu inventario antes de buscarlo en el catálogo: su entrega automática y los kits de rango son sistemas de acceso diferentes.",
        ],
      },
      {
        id: "rango",
        title: "Kits ligados a lo que has conseguido",
        paragraphs: [
          "Desde el apartado Kits del menú principal puedes consultar los suministros asociados a tus rangos. Cada entrada indica sus recompensas y si está disponible, en espera o sin acceso.",
          "El kit Aspirante ofrece apoyo periódico con monedas, suministros de captura y bayas. Otros rangos cuentan con sus propios premios; consulta la ficha concreta para saber qué recibirás.",
        ],
      },
      {
        id: "disponibilidad",
        title: "Recoge cuando esté disponible",
        paragraphs: [
          "Haz clic en un kit disponible para reclamarlo. La pantalla muestra el tiempo restante cuando todavía está en espera y distingue ese estado de un kit al que aún no tienes acceso.",
          "Tu tarjeta de entrenador permite consultar los rangos obtenidos y cuál muestras a los demás. El acceso a un kit depende de los rangos que realmente has conseguido.",
        ],
        callout: {
          title: "Prepara la próxima salida",
          text: "Revisa tus kits antes de una expedición larga. Sus fichas te permiten contar con los suministros disponibles y dejar espacio para recogerlos.",
          type: "tip",
        },
      },
    ],
    related: ["primeros-pasos", "menus", "recompensas", "exploracion"],
  },
];
