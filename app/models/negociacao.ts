export class Negociacao{
    private _data; // Métodos mais modernos de se declarar uma variável privada em JS;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor){ // Construtor da classe negociação;
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(){ // Retorna a data da negociação;
        return this._data;
    }
    get quantidade(){ // Retorna a quantidade da negociação;
        return this._quantidade;
    }
    get valor(){ // Retorna o valor da negociação;
        return this._valor;
    }
    get volume(){ // Regra de negócio: volume = quantidade * valor da negociação;
        return this._quantidade * this._valor;
    }
}