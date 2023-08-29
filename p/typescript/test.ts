class Create {
    private _nameRobot: string;

    constructor() {
        this._nameRobot = this.createFinally();
    }

    public getName(): string {
        return this._nameRobot;
    }

    private createFinally(): string {
        const result: string = this.createChar() + this.createChar() + this.createNum().toString();
        return result;
    }

    private createChar(): string {
        const num: number = Math.floor(Math.random() * 26) + 65;
        const char: string = String.fromCharCode(num);
        return char;
    }

    private createNum(): number {
        const num: number = Math.floor(Math.random() * 900) + 100;
        return num;
    }
}


let arr:string[] =[];

function test():void{
    const clas = new Create();
    const name:string = clas.getName()
    const search = arr.map((ele:string) => ele == name);
    if(search != undefined){
        console.log("create : " + name);
    }else{
        test();
    }
}

test();

