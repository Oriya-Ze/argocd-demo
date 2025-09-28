import { useEffect, useState } from react

function App() {
  const [message, setMessage] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    fetch(/api/hello)
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(Request
