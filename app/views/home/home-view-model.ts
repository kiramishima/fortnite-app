import { Observable } from "tns-core-modules/data/observable";
import { TextField } from "tns-core-modules/ui/text-field";
import { getFrameById } from "tns-core-modules/ui/frame";

export class HomeViewModel extends Observable {
    private _txtSearch: string;
    private userID: string;
    constructor() {
        super();
        console.log('Home View Model');
    }

    public async onReturnPress(args) {
        console.log('Home View Model', 'onReturnPress');
        // returnPress event will be triggered when user submits a value
        const textField: TextField = <TextField>args.object;
        const player = await this.getUser()
        // console.log({player});
        setTimeout(() => {
            textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.

            const frame = getFrameById("main");
            frame.navigate({moduleName: "views/stats/stats-page", context: {player: player}, transition: { name: "fade"}});
        }, 1500);
    }

    async getUser() {
        let response = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${this._txtSearch}`).then((response) => response.json());
        console.log({response});
        return response["uid"];
    }

    public onFocus(args) {
        // focus event will be triggered when the users enters the TextField
        console.log("onFocus event");
        console.log('txtSearch', this.txtSearch);
    }

    public onBlur(args) {
        // blur event will be triggered when the user leaves the TextField
        const textField: TextField = <TextField>args.object;
        textField.dismissSoftInput();
        console.log("onBlur event");
    }

    get txtSearch(): string {
        return this._txtSearch;
    }

    set txtSearch(value: string) {
        if (this._txtSearch != value) {
            this._txtSearch = value;
            this.notifyPropertyChange("txtSearch", value);
        }

    }
}
