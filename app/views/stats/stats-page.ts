import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { EventData } from "tns-core-modules/data/observable";
import { StatsViewModel } from "./stats-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.actionBarHidden = true;
    const { player } = page.navigationContext;
    console.log({player});
    if (player == "") {
        // return 
    } else {
        const ctx = new StatsViewModel(player);
        ctx.getUserStats();
        page.bindingContext = ctx;
    }
}

export function onPageLoaded(args: EventData) {
    console.log("Page loaded");
    const page = args.object as Page;
    console.log("Page reference from loaded event: ", page);
}
