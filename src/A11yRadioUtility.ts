import A11yRadioGroup from "./A11yRadioGroup";

export default class A11yRadioUtility {
    a11yRadioGroups: A11yRadioGroup[] = [];

    constructor() {
        let groupNodes: NodeListOf<Element> = document.querySelectorAll('[role="radiogroup"]');

        for (const groupNode of groupNodes as any) {
            this.a11yRadioGroups.push(new A11yRadioGroup(groupNode));
        }
    }
}

declare global {
    interface Window { a11yRadioUtil: A11yRadioUtility; }
}

window.addEventListener("DOMContentLoaded", () => {
    window.a11yRadioUtil = window.a11yRadioUtil || new A11yRadioUtility();
})