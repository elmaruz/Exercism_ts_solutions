export function hey(message: string): string {
  message = message.trim();
  
  if (message !== message.toUpperCase() && message.match(/(?:[^"']|^)(\w\.|!|'')()(?!["'])/g)) {
    return 'Whatever.';
  }
  if (message.match(/(?:[^"']|^)([a-z]\?|[0-9]\?)(?!["'])/g)) {
    return 'Sure.';
  }
  if (message.match(/(?:[^"']|^)([A-Z]\?)(?!["'])/g)) {
    return `Calm down, I know what I'm doing!`;
  }
  if (message === message.toUpperCase() && message.match(/(?:[^"']|^)(\w\!*)(?!["'])/g)) {
    return `Whoa, chill out!`;
  }
  if (!message) {
    return 'Fine. Be that way!';
  }

  throw new Error('dunno.')
}
