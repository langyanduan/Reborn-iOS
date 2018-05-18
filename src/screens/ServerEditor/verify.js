import ipRegex from "ip-regex";
import validator from "validator";
import { 
  TYPE_HTTP, 
  TYPE_HTTPS, 
  TYPE_SHADOWSOCKS, 
  TYPE_SHADOWSOCKSR, 
  TYPE_SOCKS5, 
  TYPE_SOCKS5_OVER_TLS, 
  ALL_SHADOWSOCKS_METHODS 
} from "./constant";

function isValidShadowsocks(values) {
  const { method, password } = values;

  if (!ALL_SHADOWSOCKS_METHODS.includes(method)) {
    return 'unknown method';
  }

  if (password.length == 0) {
    return 'please input password';
  }

  return null;
}

function isValidSocksOrHTTP(values) {
  return '';
}

export function isValidServer(values) {
  const { serverType, server, port } = values;

  if (!ipRegex({exact: true}).test(server) && !validator.isFQDN(server, {require_tld: true})) {
    return 'invalid server address';
  }

  const value = parseInt(port);
  if (isNaN(value) || value <= 0 || value > 65535) {
    return 'invalid port number';
  }

  switch (serverType) {
    case TYPE_HTTP:
    case TYPE_HTTPS:
    case TYPE_SOCKS5:
    case TYPE_SOCKS5_OVER_TLS:
      return isValidSocksOrHTTP(values);
    case TYPE_SHADOWSOCKS:
    case TYPE_SHADOWSOCKSR:
      return isValidShadowsocks(values);
    default:
      return 'unknown server type';
  }
}