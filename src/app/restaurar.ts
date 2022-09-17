import {
  Edu,
  Idioma,
  Persona,
  Proyecto,
  Trabajo,
  Skill,
} from './portfolio-interface';

export class Restaurar {

  public static skills: Skill[] = [ 
    {
      id: 0,
      nombre: 'HTML 5',
      valor: 95,
      logo: 'https://i.postimg.cc/0NypvvkL/h1.png',
    },
    {
      id: 0,
      nombre: 'CSS',
      valor: 85,
      logo: 'https://i.postimg.cc/cH2xHRQQ/CSS3-logo-svg.png',
    },
    {
      id: 0,
      nombre: 'Bootstrap',
      valor: 80,
      logo: 'https://i.postimg.cc/Dft2qPRD/Bootstrap-logo-svg.png',
    },
    
    {
      id: 0,
      nombre: 'JavaScript',
      valor: 85,
      logo: 'https://i.postimg.cc/MHR2HyGj/js1.jpg',
    },
    {
      id: 0,
      nombre: 'Angular',
      valor: 80,
      logo: 'https://i.postimg.cc/g0vygLDp/Angular-full-color-logo.png',
    },
    {
      id: 0,
      nombre: 'Java',
      valor: 80,
      logo: 'https://i.postimg.cc/pLstrQvp/226777.png',
    },
    {
      id: 0,
      nombre: 'SQL',
      valor: 80,
      logo: 'https://i.postimg.cc/QNfg6Hjc/sql.png',
    },
    {
      id: 0,
      nombre: 'Spring',
      valor: 70,
      logo: 'https://i.postimg.cc/bw74smMY/spring-logo-9-A2-BC78-AAF-seeklogo-com.png',
    },
    {
      id: 0,
      nombre: 'Comunicación clara',
      valor: 95,
      logo: 'https://i.postimg.cc/tgnTQRZS/speech-balloon.png',
    },
    {
      id: 0,
      nombre: 'Trabajo en equipo',
      valor: 90,
      logo: 'https://i.postimg.cc/4xdyPQJT/handshake.png',
    },
    {
      id: 0,
      nombre: 'Adaptación al cambio',
      valor: 85,
      logo: 'https://i.postimg.cc/g2TJTLJL/tornado.png',
    },
    {
      id: 0,
      nombre: 'Gestión del tiempo',
      valor: 90,
      logo: 'https://i.postimg.cc/WbshFPCz/hourglass.png',
    },
    {
      id: 0,
      nombre: 'Responsabilidad',
      valor: 95,
      logo: 'https://i.postimg.cc/MHmHPsMz/female-teacher.png',
    },
    {
      id: 0,
      nombre: 'Resolución de problemas',
      valor: 90,
      logo: 'https://i.postimg.cc/wTF3DGYV/hammer-and-wrench.png',
    },
    {
      id: 0,
      nombre: 'Escucha activa',
      valor: 95,
      logo: 'https://i.postimg.cc/tJj7z0gr/ear.png',
    },
    {
      id: 0,
      nombre: 'Empatía',
      valor: 90,
      logo: 'https://i.postimg.cc/8kR7zCyx/green-heart.png',
    },
  ]

  public static persona: Persona = {
    id: 0,
    nombre: 'Federico Holc',
    titulo: 'Full Stack Web Developer',
    mail: 'federico.holc@gmail.com',
    descripcion: 'Soy Fede, programador frontend y backend. Me gusta que las webs sean accesibles, bellas, fáciles de usar, y que funcionen bien. En mis ratos libres me dedico a aprender cosas nuevas y a la fotografía. Si querés que hablemos mandame un mail.',
    foto: 'https://i.postimg.cc/dVsDpjXq/FH-06723-v0-01.jpg',  
    ubicacion: 'Buenos Aires - Argentina',
    banner: 'https://i.postimg.cc/vZ01TfNT/b1a.jpg'  
  };
 

  public static proyectos: Proyecto[] = [
 
    {
      id: 0,
      nombre: 'Mi portfolio',
      descripcion: 'Portfolio web desarrollado como trabajo final para #YoProgramo - Argentina Programa.',
      enlace: 'httP://localhost:4200',
      logo: 'https://i.postimg.cc/xTnQFzZ6/ap.jpg',
    },
  ];

 

  public static trabajos: Trabajo[] = [
    {
      id: 0,
      lugar: 'Ministerio de Educación del GCABA',
      periodo: '2010 - 2022',
      puesto: 'Profesor de enseñanza media',
      descripcion: 'Docente de las asignaturas: Introducción a las Ciencias Sociales y a las Humanidades, Formación Ética y Ciudadana, Sociología, e Historia, en escuelas secundarias de la ciudad de Buenos Aires.',
      logo: 'https://i.postimg.cc/nVgZXQjN/Escudo-de-la-Ciudad-de-Buenos-Aires.png'
     },
     {
      id: 0,
      lugar: 'Universidad de Buenos Aires - Facultad de Ciencias Sociales',
      periodo: '2009 - 2015',
      puesto: 'Profesor y tutor universitario',
      descripcion: 'Docente y tutor en la asignatura “Práctica de la enseñanza”. Universidad de Buenos Aires, Facultad de Ciencias Sociales, Profesorado de Sociología, cátedra Pipkin.',
      logo: 'https://i.postimg.cc/7ZT6rJdy/fsoc2.jpg'
     },
     {
      id: 0,
      lugar: 'Ministerio de Salud del GCABA - Departamento de Salud Ambiental',
      periodo: '2008 - 2012',
      puesto: 'Sociólogo',
      descripcion: 'Desarrollo e implementación de instrumentos para el relevamiento de problemáticas socio-ambientales. Capacitación del personal para su utilización. \nAnálisis de datos socio-ambientales utilizando Epi Info, bases de datos, y SPSS.',
      logo: 'https://i.postimg.cc/hjsSfSQv/dsa.png'
     },
     {
      id: 0,
      lugar: 'Universidad de Buenos Aires - Ciclo Básico Común',
      periodo: '2007 - 2011',
      puesto: 'Profesor universitario',
      descripcion: 'Docente de la asignatura “Introducción al Pensamiento Científico”. Universidad de Buenos Aires, Ciclo Básico Común, cátedra Marqués.',
      logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp'
     },
  
    {
      id: 0,
      lugar: 'CompuHotel S.A.',
      periodo: '1998 - 2002',
      puesto: 'Programador',
      descripcion: 'Principales tareas realizadas:'+
      '- Desarrollo de software de administración hotelera utilizando Visual Basic, Visual Fox Pro, y bases de datos SQL.'+
      '- Diseño y desarrollo de páginas web utilizando HTML, CSS y Javascript.',
      logo: 'https://i.postimg.cc/gk71gCSM/service-custom-software-development.png' 
    },
  ];
  
    
  

  public static idiomas: Idioma[] = [
    {
      id: 0,
      nombre: 'Español',
      descripcion: 'Nativo',
      logo: 'https://i.postimg.cc/wBDVC0rZ/Flag-of-Spain-Civil.png',
    },
    {
      id: 0,
      nombre: 'Inglés',
      descripcion: 'First Certificate Exam, Cambridge University. Calificación: B',
      logo: 'https://i.postimg.cc/9QdtgwqQ/Flag-of-the-United-Kingdom.png',
    },
  ];

  public static educacion: Edu[] = [
     
    {
      id: 0,
      titulo: 'Desarrollador Web Full Stack',
      institucion: 'Argentina Programa. Ministerio de Desarrollo Productivo de la Nación.',
      periodo: '2022 - 2023',
      logo: 'https://i.postimg.cc/xTnQFzZ6/ap.jpg',
    },
    {
      id: 0,
      titulo: 'Especialista Docente de Nivel Superior en Educación Sexual Integral',
      institucion: 'Instituto Superior del Profesorado “Dr. Joaquín V. González.',
      periodo: '2017 - 2019',
      logo: 'https://i.postimg.cc/g2hqQCRq/jvg.jpg',
    },
    {
      id: 0,
      titulo: 'Profesor de Enseñanza Secundaria, Normal y Especial en Sociología',
      institucion: 'Universidad de Buenos Aires, Facultad de Ciencias Sociales.',
      periodo: '2008 - 2009',
      logo: 'https://i.postimg.cc/7ZT6rJdy/fsoc2.jpg',
    },
    {
      id: 0,
      titulo: 'Licenciado en Sociología',
      institucion: 'Universidad de Buenos Aires, Facultad de Ciencias Sociales.',
      periodo: '2002 - 2007',
      logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
    },
    {
      id: 0,
      titulo: 'Técnico en Computación',
      institucion: 'Escuela Técnica Nº 3 D.E. 9 María Sanchez de Thompson.',
      periodo: '1992 - 1998',
      logo: 'https://i.postimg.cc/DysTvNy0/et3.jpg',
    },
  ];
}
