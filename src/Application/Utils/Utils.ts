export class Mapper {
    static fromDTO<T, U>(dto: T, _entityType: U): U {
        const entity: U = {} as U;
        for (const key in dto) {
            if (dto.hasOwnProperty(key)) {
                (entity as any)[key] = (dto as any)[key];
            }
        }
        return entity;
    }
}