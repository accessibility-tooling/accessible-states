import NavigationKeys from "./A11yNavigationKeys";

export default class A11yRadioGroup {
    constructor(node?: HTMLDivElement) {
        this.node = node;

        let radioNodes: NodeListOf<HTMLDivElement> = this.node.querySelectorAll('[role="radio"]');

        for (const radioNode of radioNodes as any) {
            let radio = (<HTMLDivElement>radioNode);

            // Ensure only the currently focused radio button is accessible through the tab index.
            radio.tabIndex = -1;

            // Bootstrap the focus events to handle properly flagging the aria-checked attribute.
            radio.addEventListener('focusin', this.focusIn);
            radio.addEventListener('focusout', this.focusOut);

            // Bootstrap key press events for trapping radio navigation properly.
            radio.addEventListener('keydown', this.handleKeyboardPress);

            // Push the DOM element to class radio array.
            this.radios.push(radio);
        }

        // Ensure the first tab is focusable using the keyboard.
        if (this.radios.length > 0) {
            this.radios[0].tabIndex = 0;
        }
    }

    focusIn = (event: FocusEvent) => {
        this.selectedNode = <HTMLDivElement>event.target;

        // If we tab off the radios key the tabindex so we can tab back into this group.
        if (this.node.contains(document.activeElement)) {
            
        }

        this.selectedNode.tabIndex = 0;
        this.selectedNode.setAttribute('aria-checked', 'true');

        this.selectedNode.focus();
    }

    focusOut = (event: FocusEvent) => {
        this.previousNode = <HTMLDivElement>event.target;
        this.previousNode.tabIndex = -1;
        this.selectedNode.setAttribute('aria-checked', 'false');
    }

    handleKeyboardPress = (event: KeyboardEvent) => {
        console.log(event);

        let radio: HTMLDivElement = <HTMLDivElement>event.target;

        switch (event.keyCode) {
            case NavigationKeys.Left:
            case NavigationKeys.Up:
                if(!radio.previousElementSibling || radio.previousElementSibling.getAttribute('role') !== 'radio') {
                    let radios: NodeListOf<HTMLDivElement> = radio.parentNode.querySelectorAll('[role="radio"]');
                    (<HTMLDivElement>radios[radios.length - 1]).focus();
                }
                else {
                    (<HTMLDivElement>radio.previousElementSibling).focus();
                }
                break;
            case NavigationKeys.Right:
            case NavigationKeys.Down:
                if(!radio.nextElementSibling) {
                    (<HTMLDivElement>radio.parentNode.querySelector('[role="radio"]')).focus();
                }
                else {
                    (<HTMLDivElement>radio.nextElementSibling).focus();
                }
                break;
        }
    }

    node: HTMLDivElement;
    radios: Array<HTMLDivElement> = [];
    selectedNode: HTMLDivElement;
    previousNode: HTMLDivElement;
}