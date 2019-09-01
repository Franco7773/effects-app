export class Usuario {
  // tslint:disable: variable-name
  public id: number;
  public first_name: string;
  public last_name: string;
  public avatar: string;

  constructor( id: number, firts_name: string, last_name: string, avatar: string ) {
    this.id = id;
    this.first_name = firts_name;
    this.last_name = last_name;
    this.avatar = avatar;
  }
}
