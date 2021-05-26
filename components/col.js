import classnames from 'classnames/bind'

import styles from './col.module.scss'

let cx = classnames.bind(styles)

export default function Col({children, xs, sm, md, lg, margin}) {
    //accepting the children and small prop

    //col col--sm--6

    const colClasses = cx({
       col : true,
        [`col--xs--${xs}`] : xs,
        [`col--sm--${sm}`] : sm,
        [`col--md--${md}`] : md,
        [`col--lg--${lg}`] : lg,
        [`margin`] : margin,
        //use this [] if sm is true/present
    })

    return (
        <div className={colClasses}>
            {children}
        </div>
    )
}