export interface IAuthService{

    sign(id: string, email: string): Promise<{ access_token: string }>
}