export class Server {
    private id: number;
    private registration: boolean;
    private readonly: boolean;
    private map: string;
    private bingKey: string;
    private mapUrl: string;
    private distanceUnit: string;
    private speedUnit: string;
    private latitude: number;
    private longitude: number;
    private zoom: number;
    private twelveHourFormat: boolean;
    private forceSettings: boolean;
    private coordinateFormat: string;
    private attributes: any;


constructor(serverInfo){
    this.id = serverInfo.id;
    this.registration = serverInfo.registration;
    this.readonly = serverInfo.readonly;
    this.map = serverInfo.map;
    this.bingKey = serverInfo.bingKey;
    this.mapUrl = serverInfo.mapUrl;
    this.distanceUnit = serverInfo.distanceUnit;
    this.speedUnit = serverInfo.speedUnit;
    this.latitude = serverInfo.latitude;
    this.longitude = serverInfo.longitude;
    this.zoom = serverInfo.zoom;
    this.twelveHourFormat = serverInfo.twelveHourFormat;
    this.forceSettings = serverInfo.forceSettings;
    this.coordinateFormat = serverInfo.coordinateFormat;
    this.attributes = serverInfo.attributes;
    }
save() {
    // HTTP request would go here
    console.log(this.registration, this.id);
  }
}