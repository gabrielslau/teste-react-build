# Teste de build e deploy cloudfront

## validações

Após fazer uma build, publicar no bucket e acessar 1 vez.

- [x] Os bundles principais são carregados e armazenados em cache no navegador. Carregamentos subsequentes retornam 304 e servem a versão em cache (sem realizar tráfego para o bucket).
- [x] Navegar para uma página não cacheada após fazer nova build, carrega o asset corretamente e gera cache (novas requisições também reaproveitam o cache)
- [x] Requisições em lote para um mesmo arquivo reaproveita o cache
- [x] Remover um arquivo do s3 e acessar via url do cloudfront retorna a versão cache (até expirar)
- [x] Builds só geram um novo arquivo se o conteúdo mudar.

### OBS.:

- Muitos acessos em paralelo (2000+) esgotam a capacidade do browser e causam falha. Isso é um comportamento do browser e não é responsabilidade da aplicação.
