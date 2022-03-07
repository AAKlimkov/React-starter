import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count -{count}
      </button>
    </div>
  )
}
