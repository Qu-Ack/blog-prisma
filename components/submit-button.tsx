'use client'
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" disabled={pending} className={pending ? 'px-4 py-2 bg-green-300 text-white rounded-md focus:outline-none focus:bg-green-300' : 'px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-900 focus:outline-none focus:bg-green-700'}>
      Publish
    </button>
  )
}