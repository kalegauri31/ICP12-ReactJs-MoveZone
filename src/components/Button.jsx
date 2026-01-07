import React from 'react'
const VARIANTS={
    primary:"bg-[#456882] text-[#E3E3E3]  font-semiBold cursor-pointer hover:shadow-lg "
}
const SIZE={
    sm:"text-sm px-4 m-1 rounded-sm",
    md:"text-md px-5 py-2 rounded-sm",
    lg:"text-lg px-6 py-3 rounded-md"
}

function Button({title, onClick, variant="primary", size="md"}) {
  return (
    <button className={`${VARIANTS[variant]} ${SIZE[size]}`} onClick={onClick}>{title}</button>
  )
}

export default Button