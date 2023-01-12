import classNames from "classnames";

export default function DisclaimerDocument() {
    return (
        <div className={classNames(
            'space-y-2',
        )}>
            <p className={classNames(
                'text-xl font-bold'
            )}>
                DISCLAIMER
            </p>
            <ul className={classNames(
                'text-sm text-gray-700 dark:text-gray-400 space-y-1'
            )}>
                <li className={classNames(

                )}>
                    This site is not endorsed by or affiliated with the Cloud Imperium or Roberts Space Industries group of companies. Star Citizen®, Squadron 42®, Roberts Space Industries®, and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC. All rights reserved.
                </li>
                <li className={classNames(

                )}>
                    본 사이트는 Cloud Imperium 또는 Roberts Space Industries 그룹과 보증 및 제휴 관계가 아닙니다. Star Citizen®, Squadron 42®, Roberts Space Industries® 및 Cloud Imperium®은 Cloud Imperium Rights LLC의 등록 상표이며 모든 권리를 보유하고 있습니다.
                </li>
            </ul>
        </div>
    );
}
