import { v4 as uuidv4 } from 'uuid';
type UserProps = {
    name: string;
    email: string;
    password: string;
}

export class User{
    public readonly id: string;
    private props: Required<UserProps>;

    private constructor(props: UserProps, id?: string) {
        this.id = id || uuidv4();
        this.props = props;
    }

    public static create(props: UserProps, id?: string): User {
        const user = new User(props,id);
        user.validate(); 
        return user;
    }

    public validate(): void {
        if (!this.props.name || !this.props.email || !this.props.password) 
            throw new Error('Todos os campos são obrigatórios');    
    
        if (!this.isValidEmail(this.props.email)) 
            throw new Error('Email inválido');          
    
        if (this.props.password.length < 6) 
            throw new Error('A senha deve ter no mínimo 6 caracteres');
    
    }
    
    private isValidEmail(email: string): boolean {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    public get Name(): string{
        return this.props.name
    }

    public get Email(): string{
        return this.props.email
    }

    public get Password(): string{
        return this.props.password
    }

    public set Name(name: string) {
        this.props.name = name;
    }

    public set Email(email: string) {
        this.props.email = email;
    }

    public set Password(password: string) {
        this.props.password = password;
    }
       
      
}

