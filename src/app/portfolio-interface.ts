export interface Edu {
    id: number,
    titulo: string,
    institucion: string,
    logo: string,
    periodo: string
}

export interface Trabajo {
    id: number,
    lugar: string,
    periodo: string,
    puesto: string,
    descripcion: string,
    logo: string
}

export interface Idioma {
    id: number,
    nombre: string,
    descripcion: string,
    logo: string,
}

export interface Proyecto {
    id: number,
    nombre: string,
    descripcion: string,
    enlace: string,
    logo: string
}

export interface Skill {
    id: number,
    nombre: string,
    valor: number,
    logo: string
}

export interface Persona {
    id: number,
    nombre: string,
    titulo: string,
    mail: string,
    descripcion: string,
    foto: string,
    ubicacion: string,
    banner: string
}
 

 