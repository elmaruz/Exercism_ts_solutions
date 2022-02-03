export const answer = (quest: string): number | string => {
  let dict = ['plus', 'minus', 'dividedby', 'multipliedby'];

  let sum = 0;

  if (!quest.startsWith('What is')) {
    throw new Error('Unknown operation');
  }

  if (!quest.match(/[0-9]\?/g)) {
    if (quest.match(/cubed\?$/)) {
      throw new Error('Unknown operation');
    } else {
      throw new Error('Syntax error');
    }
  }

  if (quest.match(/[0-9]\s+[0-9]\?$/g)) {
    throw new Error('Syntax error');
  }

  let op = quest.split(' ').join('').slice(6, -1);

  function rep(str: string, par: string, sign: string) {
    let nuStr = str;
    for (let i = 0; i < str.length; i++) {
      if (nuStr.includes(par)) {
        nuStr = nuStr.replace(par, sign);
      }
    }
    return nuStr;
  }

  if (op.length === 1 && parseInt(op)) {
    sum = parseInt(op);
  } else if (op.length > 1) {
    if (op.match(/-?[0-9]\plus|minus|dividedby|multipliedby\-?[0-9]/g)) {
      if (op.includes(dict[0])) {
        op = rep(op, dict[0], '+');
      }
      if (op.includes(dict[1])) {
        if (op.includes(dict[1]) && !op.includes('-')) {
          op = rep(op, dict[1], '-');
        } else {
          op = op.replace(dict[1], '+');
          op = op.replace('-', '');
        }
      }
      if (op.includes(dict[2])) {
        op = rep(op, dict[2], '/');
      }
      if (op.includes(dict[3])) {
        op = rep(op, dict[3], '*');
      }
    }
    try {
      sum = eval(op);
    } catch {
      throw new Error('Syntax error');
    }
  }

  if (op.includes('*')) {
    let first = op.slice(0, op.indexOf('*'));
    let second = op.slice(op.indexOf('*') + 1, op.length);
    sum = eval(first) * eval(second);
  }

  return sum;
};
