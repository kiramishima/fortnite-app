import { IStat } from "./IStat";
import { ITotals } from "./ITotals";

export interface IStatResults {
    uid: string;
    username: string;
    platform: string;
    window: string;
    stats: IStat;
    totals: ITotals;
}