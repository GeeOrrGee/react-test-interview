import { PureComponent } from 'react';

import './progressBar.styles.scss';
/**
 @namespace Scandipwa/Component/ProgressBar/Component
 */
export class ProgressBarComponent extends PureComponent {
    render() {
        const { currStep, stepMap } = this.props;
        const stepsArr = Object.keys(stepMap);
        const currStepIndex = stepsArr.indexOf(currStep);

        return (
            <>
                <div className='progressBarContainer'>
                    <div className='progress-bar-wrapper'>
                        {stepsArr.map((name, index) => {
                            const currentStepName = name
                                .split('_')[0]
                                .toLocaleLowerCase();
                            const isActive = index <= currStepIndex;
                            return (
                                <>
                                    {' '}
                                    <div
                                        key={name}
                                        className={`filling-bar-container ${
                                            isActive && 'progress-bar-active'
                                        }`}
                                    ></div>
                                    {stepsArr.length === index + 1 ? null : (
                                        <div className={`step-info-container`}>
                                            <span
                                                className={`${
                                                    isActive &&
                                                    'active-progress-bar-span'
                                                }`}
                                            >
                                                {index + 1}
                                            </span>
                                            <p>{currentStepName}</p>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default ProgressBarComponent;
