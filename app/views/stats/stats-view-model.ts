import { Observable } from "tns-core-modules/data/observable";

export class StatsViewModel extends Observable {
    private _player: string;
    constructor(player: string) {
        super();
        this._player = player;
        // this.getUser()
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
