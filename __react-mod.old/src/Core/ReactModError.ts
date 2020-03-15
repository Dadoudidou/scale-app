export class RMError extends Error { 

}

export class RMRuntimeError extends RMError {
    message: string
    lineno?: number
    colno?: number
    error?: Error
    source?: string
    constructor(message: string, lineno?: number, colno?: number, error?: Error, source?: string){
        super(message);
        this.lineno = lineno;
        this.colno = colno;
        this.error = error;
        this.source = source;
    }
}