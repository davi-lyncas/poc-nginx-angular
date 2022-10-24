import { AES, enc } from "crypto-js";
import { environment } from "src/environments/environment";

function serialize(value: unknown)  {
  const ciphertext = AES.encrypt(JSON.stringify(value), environment.storage_encryption_key);
  return ciphertext.toString();
}

function deserialize(value: string) {
  let decrypted = '';

  try {
    const bytes = AES.decrypt(value, environment.storage_encryption_key);
    decrypted = JSON.parse(bytes.toString(enc.Utf8));
  } catch (e) {
    console.error(e);
  }

  return decrypted;
}

const storage = { getItem: localStorage.getItem, setItem: localStorage.setItem }

function rewritedSet(key: string, value: unknown) {
  const serializedValue = serialize(value);
  const prefixedKey = `${environment.storage_prefix}.${key}`;
  
  storage.setItem.call(localStorage, prefixedKey, serializedValue);
}

function rewritedGet<T>(key: string): T | null {
  const prefixedKey = `${environment.storage_prefix}.${key}`;
  const cryptedValue = storage.getItem.call(localStorage, prefixedKey);

  if (!cryptedValue) return null;

  const deserializedValue = deserialize(cryptedValue);
  let parsedValue: T|string|number|boolean = deserializedValue;

  try {
    if (/^\{(.|\s){0,}\}$/.test(deserializedValue)) parsedValue = JSON.parse(deserializedValue);
    else if (/^[\d|\.]*$/.test(deserializedValue)) parsedValue = Number.parseFloat(deserializedValue);
    else if (deserializedValue.toLowerCase() == 'true') parsedValue = true;
    else if (deserializedValue.toLowerCase() == 'false') parsedValue = false;
  } catch (_) { /* PODE SER IGNORADO */ }
  
  return parsedValue as T;
}

localStorage.setItem = rewritedSet;
localStorage.getItem = rewritedGet;
