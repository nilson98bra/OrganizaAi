import { UserProps } from "./Types/UserProps";

export class User{

    private props: UserProps;

    private constructor(props: UserProps) {
        this.props = props;
    }

    public static create(props: UserProps): User {
        const user = new User({
            ...props,
            id: crypto.randomUUID().toString()
        });

        user.validate(); 
        return user;
    }

    public validate(): void {
        if (!this.props.nome || !this.props.email || !this.props.senha) 
            throw new Error('Todos os campos são obrigatórios');    
    
        if (!this.isValidEmail(this.props.email)) 
            throw new Error('Email inválido');          
    
        if (this.props.senha.length < 6) 
            throw new Error('A senha deve ter no mínimo 6 caracteres');
    
    }
    
    private isValidEmail(email: string): boolean {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    public get Nome(): string{
        return this.props.nome
    }

    public get Email(): string{
        return this.props.email
    }

    public get Senha(): string{
        return this.props.senha
    }

    public set Nome(nome: string) {
        this.props.nome = nome;
    }

    public set Email(email: string) {
        this.props.email = email;
    }

    public set Senha(senha: string) {
        this.props.senha = senha;
    }
       
      
}

