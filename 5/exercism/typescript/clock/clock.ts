export class Clock {
  hour: number;
  minute: number;
  constructor(hour: number, minute?: number) {
    let m = !minute ? 0 : minute
    this.minute = (((m % 60) + 60) % 60);
    this.hour = ((((hour + Math.floor(m / 60)) % 24) + 24) % 24)
  }

  public toString(): string {
    let hrs: string;
    let mins: string;
    let hrsmins: string;

    this.minute < 10 ? (mins = `0${this.minute}`) : (mins = `${this.minute}`);
    this.hour < 10 ? (hrs = `0${this.hour}`) : (hrs = `${this.hour}`);

    hrsmins = `${hrs}:${mins}`;
    return hrsmins;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes);
  }

  public equals(other: Clock): boolean {
    return this.hour === other.hour && this.minute === other.minute ? true : false;
  }
}
