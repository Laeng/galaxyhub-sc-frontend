import classNames from "classnames";

export default function CopyrightDocument() {
    return (
        <p className={classNames(
            'mt-2 text-sm text-gray-700 dark:text-gray-400'
        )}>
            © 2020 스타 시티즌 유저 한국어 프로젝트 All rights reserved.
        </p>
    );
}
