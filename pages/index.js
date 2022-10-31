import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/hello', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  return <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">hello {data.name}!</div>
}
