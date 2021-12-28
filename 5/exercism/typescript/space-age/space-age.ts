export function age(planet: string, seconds: number): number {

  let earthYears: number = parseFloat(((seconds) / 31557600).toFixed(2));

  switch (planet) {
    case 'earth':
      return earthYears;
    case 'mercury':
      return parseFloat((earthYears / 0.2408467).toFixed(2));
    case 'venus':
      return parseFloat((earthYears / 0.61569726).toFixed(2));
    case 'mars':
      return parseFloat((earthYears / 1.8808158).toFixed(2));
    case 'jupiter':
      return parseFloat((earthYears / 11.862615).toFixed(2));
    case 'saturn': 
      return parseFloat((earthYears / 29.447498).toFixed(2));
    case 'uranus':
      return parseFloat((earthYears / 84.016846 ).toFixed(2));
    case 'neptune':
      return parseFloat((earthYears / 164.79132).toFixed(2));
    default:
      throw new Error;
  }

}
