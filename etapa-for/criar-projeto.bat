REM esse é no nosso script para criar Pasta e arquivos
@echo off
 cls

REM Pergunta ao usuário o nome da pasta

set /p foldername=Digite o nome da pasta a ser criada:

 REM Verifica se a pasta já existe
 if not exist "%foldername%" (
 mkdir "%foldername%"
 REM Cria os arquivos no diretório recém-criado
 echo Criando arquivos...
 type nul > "%foldername%\style.css"
 REM Estrutura básica do HTML
 echo ^<!DOCTYPE html^> > "%foldername%\index.html"
 echo ^<html^> >> "%foldername%\index.html"
 echo ^<head^> >> "%foldername%\index.html"
 echo ^<meta charset="utf8"^>
 echo ^<title^>Título da Página^</title^> >> "%foldername%\index.html"
 echo ^<link rel="stylesheet" type="text/css" href="style.css"^> >> "%foldername%\index.html"
 echo ^</head^> >> "%foldername%\index.html"
 echo ^<body^> >> "%foldername%\index.html"
 echo ^<h1^>Meu Título^</h1^> >> "%foldername%\index.html"
 echo ^<script src="script.js"^>^</script^> >> "%foldername%\index.html"
 echo ^</body^> >> "%foldername%\index.html"
 echo ^</html^> >> "%foldername%\index.html"
 echo Arquivos criados com sucesso!
 pause
 ) else (
 echo Essa pasta já existe.
 pause
 )
 REM Adiciona o código do alerta ao script.js
 echo alert("Bem-vindo!"); > "%foldername%\script.js"