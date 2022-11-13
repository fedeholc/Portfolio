export class ApiEndPoint {
//public static apiURL = 'http://localhost:8088/';
// public static apiURL = 'https://test-portfolio-fh.herokuapp.com/';
  public static apiURL = 'https://portfolio-federicoholc.koyeb.app/'


public static getPersona = this.apiURL + 'ver/persona/'
public static putPersona = this.apiURL + 'modificar/persona/'
public static postPersona = this.apiURL + 'new/persona/'
public static delPersona = this.apiURL + 'delete/persona/'

public static getEducacion = this.apiURL + 'ver/educa/'
public static delEducacion = this.apiURL + 'delete/educa/'
public static putEducacion = this.apiURL + 'modificar/educa/'
public static postEducacion = this.apiURL + 'new/educa/'

public static getTrabajo = this.apiURL + 'ver/trabajo/'
public static delTrabajo = this.apiURL + 'delete/trabajo/'
public static putTrabajo = this.apiURL + 'modificar/trabajo/'
public static postTrabajo = this.apiURL + 'new/trabajo/'

public static getSkill = this.apiURL + 'ver/skill/'
public static delSkill = this.apiURL + 'delete/skill/'
public static putSkill = this.apiURL + 'modificar/skill/'
public static postSkill = this.apiURL + 'new/skill/'

public static getIdioma = this.apiURL + 'ver/idioma/'
public static delIdioma = this.apiURL + 'delete/idioma/'
public static putIdioma = this.apiURL + 'modificar/idioma/'
public static postIdioma = this.apiURL + 'new/idioma/'

public static getProyecto = this.apiURL + 'ver/proyecto/'
public static delProyecto = this.apiURL + 'delete/proyecto/'
public static putProyecto = this.apiURL + 'modificar/proyecto/'
public static postProyecto = this.apiURL + 'new/proyecto/'
}
