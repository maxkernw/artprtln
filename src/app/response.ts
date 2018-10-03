export interface Response<T> {
    paper: {
        offset: number,
        limit: number,
        totalCount: number,
        sortField: string,
        sortOrder: string
    }
    data: T
}
