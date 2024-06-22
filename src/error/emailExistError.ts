export class UserAllradyExistError extends Error {
    constructor(){
        super('E-mail já cadastrado no evento!')
    }
}