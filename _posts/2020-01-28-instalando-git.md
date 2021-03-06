---
layout: post
title: "Instalando o Git"
date: 2020-01-29 20:11:18
categories: git
description: "Durante o desenvolvimento de software o que fazemos é escrever arquivos, e a cada modificação adição ou remoção geramos uma nova versão do arquivo. Com a ajuda do Git você ganha o super poder de controlar o tempo de produção do seu arquivo. Tornando possível voltar em versões anteriores, remover partes de uma verão e trabalhar em versões simultâneas."
thumbnail: "https://img.icons8.com/color/48/000000/git.png"
---

## Introdução a versionamento de código e Git

Durante o desenvolvimento de software o que fazemos é escrever arquivos, e a cada modificação adição ou remoção geramos uma nova versão do arquivo.
Com a ajuda do Git você ganha o super poder de controlar o tempo de produção do seu arquivo. Tornando possível voltar em versões anteriores, remover partes de uma verão e trabalhar em versões simultâneas.
O que é Git
O Git é um software de linha de comando. Ele é instalado em nosso sistema operacional e fica disponível para utilizarmos via terminal ou prompt (Tela preta).
Existem ferramentas gráficas que podemos utilizar para gerenciar projetos versionados com Git, mas vamos focar aqui em entender como ele funciona antes de aprender essas ferramentas.

## Instalando o Git

#### Windows

Utilizando o instalador [x64](https://github.com/git-for-windows/git/releases/download/v2.25.0.windows.1/Git-2.25.0-64-bit.exe) [x86](https://github.com/git-for-windows/git/releases/download/v2.25.0.windows.1/Git-2.25.0-32-bit.exe)

Execute como administrador e siga os passos da instalação.

#### Linux

No terminal execute o seguinte comando

`sudo apt install git -y`

## Configurando o Git

Depois de instalar o Git, você pode rodar o comando git --version para verificar se está tudo OK.
foto

Para que o Git consiga carimbar cada versão que fecharmos com nossas credenciais (nome e email), precisamos configurar isso.
Então vamos rodar os seguintes comandos em nossa máquina:

### Primeiro seu nome.

`git config --global user.name "SEU NOME"`

### Agora seu email.

`git config --global user.email "seu.email@provedor.com"`

Com isso feito, o Git está configurado e pronto para ser utilizado em sua máquina.
