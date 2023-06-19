Atenção ao desafio:
Você foi contratado para desenvolver uma aplicação de lista de livros. A aplicação deve permitir aos usuários adicionar novos livros à lista, visualizar os detalhes de cada livro e removê-los da lista.

Requisitos:
A aplicação deve exibir uma lista de livros na página inicial, mostrando o título de cada livro e seu autor.
Os usuários devem poder adicionar um novo livro à lista, informando o título e o autor do livro.
Os usuários devem poder visualizar os detalhes de cada livro, como título, autor e uma descrição.
Os usuários devem poder remover um livro da lista.
Ao adicionar ou remover um livro, a página deve ser atualizada automaticamente para refletir as alterações.
Você pode estilizar a aplicação de acordo com sua preferência ou usar alguma bibliotecas de componentes como chakra ou tailwindui, etc. 
------------------------------------------
Sugestões de implementação:
Crie uma estrutura básica de componentes, como App, BookList, BookItem e BookDetails.
Utilize o estado (state) para armazenar a lista de livros e gerenciar as alterações.
Utilize eventos (onClick, onChange, etc.) para lidar com as interações dos usuários.
Se preferir, você pode armazenar os dados dos livros em um array dentro do componente App ou utilizar um gerenciamento de estado externo como o Redux.
Considere a utilização de props para passar informações entre os componentes.