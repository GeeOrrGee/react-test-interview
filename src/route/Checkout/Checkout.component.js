import ProgressBarComponent from 'Component/progressBar/progressBar.component';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component.js';
import './Checkout.override.styles.scss';
export class Checkout extends SourceCheckout {
    constructor(props) {
        super(props);
        console.log(this.props.checkoutStep);
    }

    renderProgressBar() {
        return (
            <ProgressBarComponent
                currStep={this.props.checkoutStep}
                stepMap={this.stepMap}
            />
        );
    }
}

export default Checkout;

export * from 'SourceRoute/Checkout/Checkout.component.js';
