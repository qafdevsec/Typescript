import * as https from 'https';
import * as fs from 'fs';

const options = {
  key: fs.readFileSync('insecure-key.pem'),  // WARNING: This key should be kept secret!
  cert: fs.readFileSync('insecure-cert.pem'), // WARNING: This certificate is self-signed and not trusted!
  ciphers: 'LOW', // WARNING: Allowing low-strength ciphers is insecure!
  honorCipherOrder: false, // WARNING: Disabling cipher order may expose the connection to downgrade attacks!
  secureProtocol: 'TLSv1_method', // WARNING: Using outdated and insecure TLS version!
  // Other insecure configurations might include weak key exchange algorithms, lack of Perfect Forward Secrecy (PFS), etc.
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Insecure TLS Configuration Example\n');
});

const port = 8443;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
