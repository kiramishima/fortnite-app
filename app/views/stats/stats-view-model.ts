import { Observable } from "tns-core-modules/data/observable";

export class StatsViewModel extends Observable {
    private _player: string;
    private _bgclass: string;
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
            this.notifyPropertyChange("txtSearch", value);
        }

    }
    getUserStats() {
        fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${this._player}&platform=pc`)
        .then((response) => response.json())
        .then((r) => {
            console.log({r});
        }).catch((err) => {
        });
    }
}
