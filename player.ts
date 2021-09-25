
abstract class Player {
    private name: string;
    set Name(v: string) {
        this.name = v;
    }
    get Name(): string {
        return this.name;
    }
    private mark: string;
    set Mark(v: string) {
        this.mark = v;
    }
    get Mark(): string {
        return this.mark;
    }
    private isWinner: boolean;
    set IsWinner(v: boolean) {
        this.isWinner = v;
    }
    get IsWinner(): boolean {
        return this.isWinner;
    }
    constructor(mk: string) {
        this.mark = mk;
  
    }

    abstract play(board: Board): void;
    
    


}