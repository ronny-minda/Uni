import * as React from "react"

const Atom = (props) => (
  <svg width={80} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
    <style>{".white{fill:#fff}"}</style>
    <path fill="#666" d="M0 0v15h80V0z" />
    <path className="white" d="M1 1v13h78V1z" />
    <path fill="#F60" d="M2 2v11h38V2z" />
    <path fill="#898E79" d="M41 2v11h37V2z" />
    <path
      className="white"
      d="M6 6h2V5H6v2h2V6h1v4H8V8H6v2H5V6h1V5zM11 5h3v1h-1v4h-1V6h-1zM16 6h1V5h2v1h-2v3h2V6h1v3h-1v1h-2V9h-1zM22 5h1v1h1v1h1V6h1V5h1v5h-1V7h-1v1h-1V7h-1v3h-1V5zM51 5h2v4h1v1h-3V9h1V6h-1zM56 9h1v1h-1zM58 6h1V5h2v1h-2v3h2V6h1v3h-1v1h-2V9h-1z"
    />
  </svg>
)

export default Atom
