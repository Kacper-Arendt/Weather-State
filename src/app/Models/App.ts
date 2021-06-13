export interface IApp {
    status: Status,
}

export enum Status {
    Idle = "IDLE",
    Fetching = "FETCHING",
}


