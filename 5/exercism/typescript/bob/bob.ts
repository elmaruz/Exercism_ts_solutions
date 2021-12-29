export function hey(message: string): string {
  if (message.trim().length === 0) return 'Fine. Be that way!';
  else if (/[A-Z]/.test(message) && message === message.toUpperCase())
    return message.trim().endsWith('?')
      ? "Calm down, I know what I'm doing!"
      : 'Whoa, chill out!';
  else if (message.trim().endsWith('?')) return 'Sure.';
  else return 'Whatever.';
}
