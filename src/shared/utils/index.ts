export const formattedMoney = (
  value: number | string,
  options?: Intl.NumberFormatOptions,
): string => {
  const defaultOptions = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  } as Intl.NumberFormatOptions;

  const formatter = Intl.NumberFormat('pt-BR', {
    ...defaultOptions,
    ...(options ?? {}),
  });

  return formatter.format(value as number);
};

export function normalizeMoney(money: string): number {
  return Number(money.replace(/[^0-9-]/g, '')) / 100;
}

export function formattedDate(
  date: number | Date | string | undefined,
  options?: Intl.DateTimeFormatOptions,
): string {
  const defaultOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'America/Sao_Paulo',
  } as Intl.DateTimeFormatOptions;

  const formatter = Intl.DateTimeFormat('pr-BR', {
    ...defaultOptions,
    ...(options ?? {}),
  });

  if (typeof date === 'string') {
    date = new Date(date);
  }

  return formatter.format(date);
}

export const bytesToSize = (bytes: number, decimals = 2): string => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

export const fetchData = async (
  input: RequestInfo,
  init?: RequestInit,
): Promise<unknown> =>
  new Promise(async (resolve, reject) => {
    const response = await fetch(input, init);
    const json = await response.json();

    json['statusCode'] = response.status;
    json['statusText'] = response.statusText;

    if (!response.ok || response.status >= 400) {
      reject(json);
    } else {
      resolve(json);
    }
  });

export const parseJSON = (json: string | null) => {
  if (typeof json !== 'string') {
    json = JSON.stringify(json);
  }

  try {
    json = JSON.parse(json);
  } catch (e) {
    return false;
  }

  if (typeof json === 'object' && json !== null) {
    return json;
  }

  return false;
};

export const sleep = (ms = 0): Promise<unknown> =>
  new Promise(resolve => setTimeout(() => resolve, ms));

type ClipboardCallback = (text: string) => void;

export const clipboard = (text: string, callback?: ClipboardCallback): void => {
  const textArea = document.createElement('textarea');

  textArea.innerText = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();

  if (typeof callback === 'function') {
    callback(text);
  }
};

export const formatMask = (value: string, mask: string): string => {
  let maskedValue = '';
  let maskedIndex = 0;

  const unmasked = value.replace(/[\-\|\(\)\/\.\: ]/gm, '');
  const valueLength = unmasked.length;
  const maskLength = mask.replace(/[^#]/gm, '').length;

  if (valueLength > maskLength || maskLength > valueLength) {
    return value || '';
  }

  for (let i = 0; i < String(mask).length; i += 1) {
    if (mask[i] === '#' && typeof unmasked[maskedIndex] !== 'undefined') {
      maskedValue += unmasked[maskedIndex];
      maskedIndex += 1;
    } else if (typeof mask[i] !== 'undefined') {
      maskedValue += mask[i];
    }
  }

  return maskedValue;
};

export const formatCpf = (value: string): string =>
  formatMask(value, '###.###.###-##');
