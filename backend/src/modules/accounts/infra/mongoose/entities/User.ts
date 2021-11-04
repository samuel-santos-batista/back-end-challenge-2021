import { prop, index } from '@typegoose/typegoose';

class Name {
  @prop({ type: String })
  public title: string;

  @prop({ type: String })
  public first: string;

  @prop({ type: String })
  public last: string;
}

class Login {
  @prop({ type: String })
  public uuid: string;

  @prop({ type: String })
  public username: string;

  @prop({ type: String })
  public password: string;

  @prop({ type: String })
  public salt: string;

  @prop({ type: String })
  public sha1: string;

  @prop({ type: String })
  public md5: string;

  @prop({ type: String })
  public sha256: string;
}

class DateBase {
  @prop({ type: Date })
  public date: Date;

  @prop({ type: String })
  public age: number;
}

class Picture {
  @prop({ type: String })
  public large: string;

  @prop({ type: String })
  public medium: string;

  @prop({ type: String })
  public thumbnail: string;
}

class Coordinates {
  @prop({ type: Number })
  public latitude: number;

  @prop({ type: Number })
  public longitude: number;
}

class Timezone {
  @prop({ type: String })
  public offset: string;

  @prop({ type: String })
  public description: string;
}

class Location {
  @prop({ type: String })
  public street: string;

  @prop({ type: String })
  public city: string;

  @prop({ type: String })
  public state: string;

  @prop({ type: String })
  public postcode: string;

  @prop({ type: Coordinates, _id: false })
  public coordinates: Coordinates;

  @prop({ type: Timezone, _id: false })
  public timezone: Timezone;
}

class User {
  @prop({ type: String })
  public gender: string;

  @prop({ type: Name, _id: false })
  public name: Name;

  @prop({ type: String })
  public email: string;

  @prop({ type: Login, _id: false })
  public login: Login;

  @prop({ type: DateBase, _id: false })
  public dob: DateBase;

  @prop({ type: DateBase, _id: false })
  public registered: DateBase;

  @prop({ type: String })
  public phone: string;

  @prop({ type: String })
  public cell: string;

  @prop({ type: Picture, _id: false })
  public picture: Picture;

  @prop({ type: Object })
  public id: string;

  @prop({ type: Location, _id: false })
  public address: Location;

  @prop({ type: String })
  public nat: string;

  @prop({ type: String })
  public imported_t: Date;

  @prop({ type: String })
  public status: string;
}

export { User };
