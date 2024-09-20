const wordList = [
    {
        word: "guitarra",
        hint: "Un instrumento musical con cuerdas."
    },
    {
        word: "oxigeno",
        hint: "Un gas incoloro e inodoro esencial para la vida."
    },
    {
        word: "montaña",
        hint: "Una gran elevacion natural de la superficie terrestre."
    },
    {
        word: "pintura",
        hint: "Una forma de arte que utiliza colores sobre una superficie para crear imagenes o expresiones."
    },
    {
        word: "astronomia",
        hint: "El estudio cientifico de objetos y fenomenos celestiales."
    },
    {
        word: "futbol",
        hint: "Un deporte popular jugado con un balon esferico."
    },
    {
        word: "chocolate",
        hint: "Un dulce hecho de granos de cacao."
    },
    {
        word: "mariposa",
        hint: "Un insecto con alas coloridas y un cuerpo delgado."
    },
    {
        word: "historia",
        hint: "El estudio de eventos pasados y la civilizacion humana."
    },
    {
        word: "pizza",
        hint: "Un plato salado que consiste en una base redonda y plana con coberturas."
    },
    {
        word: "jazz",
        hint: "Un genero de musica caracterizado por la improvisacion y la sincopa."
    },
    {
        word: "camara",
        hint: "Un dispositivo utilizado para capturar y grabar imagenes o videos."
    },
    {
        word: "diamante",
        hint: "Una piedra preciosa conocida por su brillo y dureza."
    },
    {
        word: "aventura",
        hint: "Una experiencia emocionante o arriesgada."
    },
    {
        word: "ciencia",
        hint: "El estudio sistematico de la estructura y el comportamiento del mundo fisico y natural."
    },
    {
        word: "bicicleta",
        hint: "Un vehiculo impulsado por humanos con dos ruedas."
    },
    {
        word: "atardecer",
        hint: "La desaparicion diaria del sol bajo el horizonte."
    },
    {
        word: "cafe",
        hint: "Una bebida popular con cafeina hecha de granos de cafe tostados."
    },
    {
        word: "danza",
        hint: "Un movimiento ritmico del cuerpo a menudo realizado con musica."
    },
    {
        word: "galaxia",
        hint: "Un vasto sistema de estrellas, gas y polvo mantenido unido por la gravedad."
    },
    {
        word: "orquesta",
        hint: "Un gran conjunto de musicos que tocan varios instrumentos."
    },
    {
        word: "volcan",
        hint: "Una montaña o colina con una abertura por la que se expulsan lava, fragmentos de roca, vapor caliente y gas."
    },
    {
        word: "novela",
        hint: "Una obra de ficcion extensa, tipicamente con una trama y personajes complejos."
    },
    {
        word: "escultura",
        hint: "Una forma de arte tridimensional creada al moldear o combinar materiales."
    },
    {
        word: "sinfonia",
        hint: "Una composicion musical larga para orquesta completa, tipicamente en varios movimientos."
    },
    {
        word: "arquitectura",
        hint: "El arte y la ciencia de diseñar y construir edificios."
    },
    {
        word: "ballet",
        hint: "Una forma de danza clasica caracterizada por movimientos precisos y graciles."
    },
    {
        word: "astronauta",
        hint: "Una persona entrenada para viajar y trabajar en el espacio."
    },
    {
        word: "cascada",
        hint: "Una caida de agua desde una altura."
    },
    {
        word: "tecnologia",
        hint: "La aplicacion del conocimiento cientifico para fines practicos."
    },
    {
        word: "arcoiris",
        hint: "Un fenomeno meteorologico causado por la reflexion, refraccion y dispersion de la luz."
    },
    {
        word: "universo",
        hint: "Toda la materia, espacio y tiempo existentes en su conjunto."
    },
    {
        word: "piano",
        hint: "Un instrumento musical tocado presionando teclas que hacen que martillos golpeen cuerdas."
    },
    {
        word: "vacaciones",
        hint: "Un periodo de tiempo dedicado al placer, descanso o relajacion."
    },
    {
        word: "selva tropical",
        hint: "Un bosque denso caracterizado por una alta precipitacion y biodiversidad."
    },
    {
        word: "teatro",
        hint: "Un edificio o area al aire libre en el que se representan obras, peliculas u otras actuaciones."
    },
    {
        word: "telefono",
        hint: "Un dispositivo utilizado para transmitir sonido a largas distancias."
    },
    {
        word: "idioma",
        hint: "Un sistema de comunicacion compuesto por words, gestos y sintaxis."
    },
    {
        word: "desierto",
        hint: "Una tierra arida o esteril con poca o ninguna precipitacion."
    },
    {
        word: "girasol",
        hint: "Una planta alta con una gran flor amarilla."
    },
    {
        word: "fantasia",
        hint: "Un genero de ficcion imaginativa que involucra magia y elementos sobrenaturales."
    },
    {
        word: "telescopio",
        hint: "Un instrumento optico utilizado para ver objetos distantes en el espacio."
    },
    {
        word: "brisa",
        hint: "Un viento suave."
    },
    {
        word: "oasis",
        hint: "Un lugar fertil en el desierto donde se encuentra agua."
    },
    {
        word: "fotografia",
        hint: "El arte, proceso o practica de crear imagenes al registrar la luz u otra radiacion electromagnetica."
    },
    {
        word: "safari",
        hint: "Una expedicion o viaje, tipicamente para observar la vida salvaje en su habitat natural."
    },
    {
        word: "planeta",
        hint: "Un cuerpo celeste que orbita una estrella y no produce luz propia."
    },
    {
        word: "rio",
        hint: "Un gran curso natural de agua que fluye en un canal hacia el mar, un lago o..."
    },
    {
        word: "tropical",
        hint: "Relacionado o situado en la region entre el Tropico de Cancer y el Tropico de Capricornio."
    },
    {
        word: "misterioso",
        hint: "Dificil o imposible de entender, explicar o identificar."
    },
    {
        word: "enigma",
        hint: "Algo que es misterioso, desconcertante o dificil de entender."
    },
    {
        word: "paradoja",
        hint: "Una declaracion o situacion que se contradice a si misma o desafia la intuicion."
    },
    {
        word: "rompecabezas",
        hint: "Un juego, juguete o problema diseñado para poner a prueba el ingenio o el conocimiento."
    },
    {
        word: "susurro",
        hint: "Hablar muy suavemente o en voz baja, a menudo de manera secreta."
    },
    {
        word: "sombra",
        hint: "Una area oscura o forma producida por un objeto que bloquea la luz."
    },
    {
        word: "secreto",
        hint: "Algo mantenido oculto o desconocido para los demas."
    },
    {
        word: "curiosidad",
        hint: "Un fuerte deseo de saber o aprender algo."
    },
    {
        word: "impredecible",
        hint: "No se puede prever o conocer de antemano; incierto."
    },
    {
        word: "obfuscar",
        hint: "Confundir o desconcertar a alguien; hacer algo poco claro o dificil de entender."
    },
    {
        word: "desvelar",
        hint: "Hacer conocido o revelar algo previamente secreto o desconocido."
    },
    {
        word: "ilusion",
        hint: "Una falsa percepcion o creencia; una apariencia o impresion engañosa."
    },
    {
        word: "luz de luna",
        hint: "La luz proveniente de la luna."
    },
    {
        word: "vibrante",
        hint: "Lleno de energia, brillo y vida."
    },
    {
        word: "nostalgia",
        hint: "Un anhelo sentimental o afectuoso por el pasado."
    },
    {
        word: "brillante",
        hint: "Excepcionalmente ingenioso, talentoso o impresionante."
    },
];
