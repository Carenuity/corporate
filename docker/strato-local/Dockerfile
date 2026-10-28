# Local stand-in for the Strato web host: same Apache version ("Apache/2.4.69 (Unix)"),
# .htaccess honoured, HTTPS on. Serves the exported out/ folder (mounted by compose.yaml).
FROM httpd:2.4.69

RUN sed -i \
      -e 's/^#\(LoadModule rewrite_module\)/\1/' \
      -e 's/^#\(LoadModule deflate_module\)/\1/' \
      -e 's/^#\(LoadModule ssl_module\)/\1/' \
      -e 's/^#\(LoadModule socache_shmcb_module\)/\1/' \
      -e 's/^#\(Include conf\/extra\/httpd-ssl.conf\)/\1/' \
      -e '/<Directory "\/usr\/local\/apache2\/htdocs">/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' \
      conf/httpd.conf \
 && openssl req -x509 -nodes -newkey rsa:2048 -days 3650 -subj "/CN=localhost" \
      -keyout conf/server.key -out conf/server.crt
