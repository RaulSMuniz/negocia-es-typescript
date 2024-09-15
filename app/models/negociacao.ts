export class Negociacao{
    private _data: Date; // Métodos mais modernos de se declarar uma variável privada em JS;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number){ // Construtor da classe negociação;
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date{ // Retorna a data da negociação;
        return this._data;
    }
    get quantidade(): number{ // Retorna a quantidade da negociação;
        return this._quantidade;
    }
    get valor(): number{ // Retorna o valor da negociação;
        return this._valor;
    }
    get volume(): number{ // Regra de negócio: volume = quantidade * valor da negociação;
        return this._quantidade * this._valor;
    }
}