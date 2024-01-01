import * as tls from 'tls';

function insecureMinMaxTlsVersion() {
  {
    const config: tls.ConnectionOptions = {};
    config.minVersion = 'TLSv1'; // BAD: Choosing the lowest supported version (i.e., SSL3.0 or TLSv1.0)
  }
  {
    const config: tls.ConnectionOptions = {};
    config.minVersion = 'SSLv3'; // BAD: SSL 3.0 is a non-secure version of the protocol; it's not safe to use it as MinVersion.
  }
  {
    const config: tls.ConnectionOptions = {};
    config.maxVersion = 'SSLv3'; // BAD: SSL 3.0 is a non-secure version of the protocol; it's not safe to use it as MaxVersion.
  }
}

function insecureCipherSuites() {
  const config: tls.ConnectionOptions = {
    ciphers: ['TLS_RSA_WITH_RC4_128_SHA'], // BAD: Non-secure cipher suite TLS_RSA_WITH_RC4_128_SHA
  };
  // Do something with the config
}

// Example usage
insecureMinMaxTlsVersion();
insecureCipherSuites();
