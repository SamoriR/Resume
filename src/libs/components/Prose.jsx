import classnames from 'classnames'

export function Prose({ children, className }) {
  return (
    <div className={classnames(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
