// Stream ciphers
export const METHOD_AES_128_CTR = 'aes-128-ctr';
export const METHOD_AES_192_CTR = 'aes-192-ctr';
export const METHOD_AES_256_CTR = 'aes-256-ctr';
export const METHOD_AES_128_CFB = 'aes-128-cfb';
export const METHOD_AES_192_CFB = 'aes-192-cfb';
export const METHOD_AES_256_CFB = 'aes-256-cfb';
export const METHOD_CAMELLIA_128_CFB = 'camellia-128-cfb';
export const METHOD_CAMELLIA_192_CFB = 'camellia-192-cfb';
export const METHOD_CAMELLIA_256_CFB = 'camellia-256-cfb';
export const METHOD_BF_CFB   = 'bf-cfb';
export const METHOD_RC4_MD5  = 'rc4-md5';
export const METHOD_SALSA20  = 'salsa20';
export const METHOD_CHACHA20 = 'chacha20';
export const METHOD_CHACHA20_IETF = 'chacha20-ietf';
// AEAD ciphers
export const METHOD_AES_128_GCM = 'aes-128-gcm';
export const METHOD_AES_192_GCM = 'aes-192-gcm';
export const METHOD_AES_256_GCM = 'aes-256-gcm';
export const METHOD_CHACHA20_IETF_POLY1305 = 'chacha20-ietf-poly1305';

export const ALL_SHADOWSOCKS_METHODS = [ 
  METHOD_AES_128_CTR, 
  METHOD_AES_192_CTR, 
  METHOD_AES_256_CTR, 
  METHOD_AES_128_CFB, 
  METHOD_AES_192_CFB, 
  METHOD_AES_256_CFB, 
  METHOD_CAMELLIA_128_CFB, 
  METHOD_CAMELLIA_192_CFB, 
  METHOD_CAMELLIA_256_CFB, 
  METHOD_BF_CFB, 
  METHOD_RC4_MD5, 
  METHOD_SALSA20, 
  METHOD_CHACHA20, 
  METHOD_CHACHA20_IETF, 
  METHOD_AES_128_GCM, 
  METHOD_AES_192_GCM, 
  METHOD_AES_256_GCM, 
  METHOD_CHACHA20_IETF_POLY1305 
];

// Server types
export const TYPE_SHADOWSOCKS      = 'Shadowsocks';
export const TYPE_SHADOWSOCKSR     = 'ShadowsocksR';
export const TYPE_SOCKS5           = 'Socks5';
export const TYPE_SOCKS5_OVER_TLS  = 'Socks5 over TLS';
export const TYPE_HTTP             = 'HTTP';
export const TYPE_HTTPS            = 'HTTPS';

export const ALL_SERVER_TYPES = [ 
  TYPE_SHADOWSOCKS, 
  TYPE_SHADOWSOCKSR, 
  TYPE_HTTP, 
  TYPE_HTTPS, 
  TYPE_SOCKS5, 
  TYPE_SOCKS5_OVER_TLS 
];
