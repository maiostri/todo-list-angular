export class Task {
    id: string = '';
    name: string = '';
    text: string = '';

    constructor(id: string, name: string, text: string) {
        this.id = id;
        this.name = name;
        this.text = text;
    }
}
// Exemplo de tarefa
// Id: UUI -> Id unico, como um "hash", combinaçao de letras e numeros.
// name: 'Trocar o nome dos servicos do nosso projeto.
// text: 'O arquivo de persistence service poderia ter um nome melhor. Deveriamos mudar-lo para
// localStorage service.'

// Id: 2
// name: 'Limpar arquivos de teste.'
// text: 'Apagar todos os arquivos que não estão sendo utilizados bla bla bla'