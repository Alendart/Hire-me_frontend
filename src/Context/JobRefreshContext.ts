import {createContext} from "react";
import {JobRefreshContextType} from "../types/job.context.types";


export const JobRefreshContext = createContext<JobRefreshContextType>({
    jobRefresh: false,
    updateJobRefresh: () => {
    },
})
