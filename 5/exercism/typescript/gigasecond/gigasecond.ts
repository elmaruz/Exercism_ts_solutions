export class Gigasecond {
  fecha: Date;
  constructor(data: Date) {
    this.fecha = data
  }
  public date() {
    let nuDate = new Date(this.fecha.getTime() + (1000000000 * 1000));
    let convert = Date.UTC(nuDate.getUTCFullYear(), nuDate.getUTCMonth(), nuDate.getUTCDate(),
    nuDate.getUTCHours(), nuDate.getUTCMinutes(), nuDate.getUTCSeconds());

    return new Date(convert);
  }
}
