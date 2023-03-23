import {TableJobEntity} from "types";

export interface JobList {
    list: TableJobEntity[],
    lastArchived: TableJobEntity
}