AULA 1

USANDO O TERMINAL DO VS CDE:

O terminal do vscode é semelhante ao cmd ou power shell.
Isso quer disser que os comandos do cmd e power shell, rodam também no terminal do vscode.

COMANDOS BÁSICOS :

NAVEGAR ATÉ UMA DETERMINADA PASTA : cd
VOLTAR A PASTA ANTERIOR : acrescenta-se dois pontos: cd..
TAMBÉM É POSSÍVEL PASSAR UM CAMINHO COMPLETO : cd pasta1/arquivos/imagens


CAMINHO RELATIVO E CAMINHO ABSOLUTO :
---------------------------------------------------------------------

1- CAMINHO RELATIVO: 

É o caminho que depende de outras pastas para se localizar.

Imagine o seguinte Diretório

pasta raiz : main

dentro da pasta raiz tenho as seguintes pastas : 

imagens - minhaimagens(pasta dentro de imagens)
vídeos - meusvídeos(pasta dentro de vídeos)
audios - meusaudios(pasta dentro de audios)


imagine que você queira entrar na pasta minhasimagens dentro da pasta imagens, então o comando seria : 


" cd imagens/minhasimagens "

A idéia do caminho relativo é que você possa ir e voltatr a partir de qualquer ponto, desde que passe o caminho correto.

---------------------------------------------------------------------

2 - CAMINHO ABSOLUTO : 

o caminho absoluto, segue as pastas do sistema desde a raiz. Exemplo :



C:/Usuários/Desktop/aulas_yes/main

A principal diferença é a referência absoluta, ou seja, o caminho precisa existir em todos os sistemas que estivwer rodando a aplicação


-----------------------------------------------------------------

CRIANDO PASTAS :

PARA CRIAR UMA NOVA PASTA : "mkdir" 