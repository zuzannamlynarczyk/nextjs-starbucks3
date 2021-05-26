import classnames from 'classnames/bind'
//conditional styles

import styles from './row.module.scss'
//actual styles

let cx = classnames.bind(styles)

export default function Row({children, justifyContentCenter, justifyContentSpaceBetween, margin, propertyFontSize, border}) {

    const rowClasses = cx({
        row : true,
        ['justify-content-center'] : justifyContentCenter,
        ['justify-content-space-between'] :justifyContentSpaceBetween,
        ['margin'] : margin,
        ['font-size'] : propertyFontSize,
        ['border'] : border,
        //using square brackets cuz its more than one word and has hyphens
    })

    return (
        <div className={rowClasses}>
            {children}
        </div>
    )
}