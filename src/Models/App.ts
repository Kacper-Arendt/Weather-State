export interface IApp {
    status?: Status,
    message?: string,
    favoritesCities: Array<string>
}

export enum Status {
    Idle = "IDLE",
    Fetching = "FETCHING",
}


