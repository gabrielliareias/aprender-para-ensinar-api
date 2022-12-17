# APRENDER PARA ENSINAR

## introdução

Esssa é a documentação do meu projeto final para o curso de desenvolvimento backend da {Reprograma}. Trata-se de uma aplicação que serve para armazenar informações de psicólogas, com foco na educação infantil, acolhimento e educação sexual, que visa disponibilizar as informações de contato dessas profissionais, aos pais e escolas, como forma de apoio a criação de qualidade de nossas crianças.

A APRENDER PARA ENSINAR é uma iniciativa que acontece com essa finalidade de quebrar o clico das gerações que receberam educação com base apenas nos conhcecimentos passados pelas gerações anteriores, que pouco possuia informações com embasamento profissional adequado.

    Sem desmerecer os ensinamentos dos nossos antecessores, apenas uma proposta para fazer diferente e melhorar aquilo que precisa de mais atenção e cuidado, além de dar mais visibilidade as profissionais da área, bem como assuntos que não eram pautas a 30 anos atrás, como por exemplo as questões de genero.

## informações: Aprender para ensinar

Através dessa API, podem ser cadastrados o dados da sequinte forma:

> {<br>
> "nome": "Maria",<br>
> "cidade": "São Paulo,<br>
> "Estado": "São Paulo",<br>
> "contato": "123456789",<br>
> "email": "maria@gmail.com"<br>
> }

## rotas

A partir das requisições para a API, é possível:

<table>
<tr>
  <td>Verbo</td>
  <td>Rota</td>
  <td>Função</td>
</tr>
<tr>
  <td>get</td>
  <td>"/estados"</td>
  <td>acessar por estados</td>
</tr>
<tr>
  <td>get</td>
  <td>"/cidade"</td>
  <td>acessar acessar por cidade</td>
</tr>
<tr>
  <td>get</td>
  <td>"/id"</td>
  <td>acessar por id</td>
</tr>
<tr>
  <td>post</td>
  <td>"/memory"</td>
  <td>cria uma nova memória</td>
</tr>
<tr>
  <td>post</td>
  <td>"/timeline"</td>
  <td>cria uma nova timeline</td>
</tr>
<tr>
  <td>post</td>
  <td>"/add"</td>
  <td>cria uma nova psicóloga</td>
</tr>
<tr>
  <td>patch</td>
  <td>"/;id"</td>
  <td>atualiza os dados de um psicóloga por id</td>
</tr>
<tr>
  <td>delete</td>
  <td>"/:id"</td>
  <td>deleta uma psicóloga por ID</td>
</tr>
<tr>
</table>

## banco de dados

Para esta aplicação, utilizei o MongoAtlas DB em conjunto com a dependência mongoose.

## Agradecimentos

Eternamente grata a minha amiga Rosana Emidio, que me apresentou a {reprograma} e mudou minha perspectiva de futuro profissional. A todas as professoras e monitoras, em especial a Camis, que não soltou minha á mão até que eu conseguisse caminhar sozinha na reta final.
As minhas colegas de sala, cheias de bom humor e carinho, em especial a Laura, que não excitou em compartilhar seus conhecimentos comigo.
E por fim, agradeço à mim, que não desistiu e lutou contra seus demônios até o final.

"Você é o unico representante do seu sonho na face da terra"

Com amor, Gabi.
