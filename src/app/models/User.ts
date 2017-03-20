export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  readonly: boolean;
  admin: boolean;
  map: string;
  distanceUnit: string;
  speedUnit: string;
  latitude: number;
  longitude: number;
  zoom: number;
  twelveHourFormat: boolean;
  coordinateFormat: string;
  disabled: boolean;
  expirationTime: Date;
  deviceLimit: number;
  userLimit: number;
  deviceReadonly: boolean;
  token: string;
  attributes: any;

constructor(userInfo: any) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.email = userInfo.email;
    this.password = userInfo.password;
    this.readonly = userInfo.readonly;
    this.admin = userInfo.admin;
    this.map = userInfo.map;
    this.distanceUnit = userInfo.distanceUnit;
    this.speedUnit = userInfo.speedUnit;
    this.latitude = userInfo.latitude;
    this.longitude = userInfo.longitude;
    this.zoom = userInfo.zoom;
    this.twelveHourFormat = userInfo.twelveHourFormat;
    this.coordinateFormat = userInfo.coordinateFormat;
    this.disabled = userInfo.disabled;
    this.expirationTime = userInfo.expirationTime;
    this.deviceLimit = userInfo.deviceLimit;
    this.userLimit = userInfo.userLimit;
    this.deviceReadonly = userInfo.deviceReadonly;
    this.token = userInfo.token;
    this.attributes = userInfo.attributes;
}
 save() {
    // HTTP request would go here
    console.log(this.name, this.email, this.id);
  }

}