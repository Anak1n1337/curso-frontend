# curso-frontend
#### EBAC

# Git
## Conceitos de versionamento
 - Histórico
 - Controle da versão
 - Quem alterou 
 - O quê alterou
 - Quando alterou 
 - todos os arquivos
 - Evolução contínua

 Arquiva A | Versão 1 | Versão 2
 Arquivo B | Versão 1 | Versão 2

## Instalçao do Git

## Criar conta no Github

## Clonar o projeto
git clone https://github.com/Anak1n1337/curso-frontend.git

## Commits
 Informação de alteração
 - após ter testado todo o código
 - git add *
 - git commit -m "mensagem"
 - git push (para enviar alterações para o repositório)

## Gitflow
 - Fluxo do Git
 
### Branchs
são ramificações / versões pararelas

- main / master (vai para produção, quando o projeto é publicado )
- develop
- DOD Definition of Done: critérios de aceite
- versionamento 1.0.0

### Branchs
são ramificações / versões pararelas

- main / master (vai para produção, quando o projeto é publicado )
- develop
- DOD Definition of Done: critérios de aceite
- versionamento 1.0.0

git checkout -b dev (cria uma branch)
git checkout master (mudar de branch)


### Merge
Mescla de branchs
Você pode precisar resolver conflitos manualmente 

git merge main 


### Pull Request
Mescla de branchs no repositório
Permite code review
O repositório resolve os conflitos automaticamente


### Configura o GitFlow
git flow init
git flow feature start {nome-da-feature}