import * as React from 'react'

export interface ButtonProps {
  children: React.ReactNode
}

const Button = (props: ButtonProps) => {
  return <button className="text-heading-1 font-heading text-peach-500">{props.children}</button>
}

Button.displayName = 'Button'

export default Button
