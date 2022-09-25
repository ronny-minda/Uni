import * as React from "react"

const Rss20 = (props) => (
  <svg width={80} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
    <style>{".white{fill:#fff}"}</style>
    <path fill="#666" d="M0 0v15h80V0z" />
    <path className="white" d="M1 1v13h78V1z" />
    <path fill="#F60" d="M2 2v11h24V2z" />
    <path fill="#898E79" d="M27 2v11h51V2z" />
    <path
      className="white"
      d="M5 5h3v1h1v1H8V6H6v1h2v2h1v1H8V9H7V8H6v2H5zM12 5h3v1h-3v1h2v1h1v1h-1v1h-3V9h3V8h-2V7h-1V6h1V5zM18 5h3v1h-3v1h2v1h1v1h-1v1h-3V9h3V8h-2V7h-1V6h1V5zM31 5h3v1h1v1h-1v1h-2v1h3v1h-4V8h1V7h2V6h-3V5zM36 9h1v1h-1zM39 6h1V5h2v1h-2v3h2V6h1v3h-1v1h-2V9h-1z"
    />
  </svg>
)

export default Rss20
