docker build --no-cache -f SQL\Dockerfile.PostgreSql -t laboratornaya_rabota_stacionar_2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t laboratornaya_rabota_stacionar_2/app ../..
