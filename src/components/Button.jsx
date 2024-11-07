import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false, 
  disabled = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyle = "font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500",
    secondary: "bg-teal-100 text-teal-700 hover:bg-teal-200 focus:ring-teal-500",
    outline: "bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 focus:ring-emerald-500",
    ghost: "bg-transparent text-emerald-500 hover:bg-emerald-50 focus:ring-emerald-500"
  }

  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  }

  const buttonClasses = `
    ${baseStyle}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}
    ${className}
  `

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="flex items-center justify-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </div>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  className: PropTypes.string
}

export default Button