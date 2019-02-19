import { NavigatedData, Page } from "tns-core-modules/ui/page";
// import { Visibility } from "tns-core-modules/ui/enums";
import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.actionBarHidden = true;
    // page.actionBar.navigationButton.visibility = Visibility.collapse;
    page.bindingContext = new HomeViewModel();
}
