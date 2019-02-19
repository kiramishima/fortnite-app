import { Observable } from "tns-core-modules/data/observable";
import { IStatResults } from "~/interfaces/IStatsResults";

export class StatsViewModel extends Observable {
    private _player: string;
    private _bgclass: string;
    private _userStats: IStatResults;
    private _classes = ["stats_page_tomato", "stats_page_burguer"];
    constructor(player: string) {
        super();
        this._player = player;
    }

    setBackgroundClass() {
        this._bgclass = this._classes[Math.floor(Math.random()*this._classes.length)];
        console.log(this._bgclass);
    }

    get bgclass(): string {
        return this._bgclass;
    }

    set bgclass(value: string) {
        if (this._bgclass != value) {
            this._bgclass = value;
            this.notifyPropertyChange("bgclass", value);
        }

    }

    get userStats(): IStatResults {
        return this._userStats;
    }

    set userStats(value: IStatResults) {
        if (this._userStats != value) {
            this._userStats = value;
            this.notifyPropertyChange("userStats", value);
        }

    }

    async getUserStats() {
        let response: IStatResults = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${this._player}&platform=pc&window=current`)
        .then((response) => response.json())
        .catch((err) => {
            console.log({err})
            return {};
        });
        this._userStats = response;
    }
}
