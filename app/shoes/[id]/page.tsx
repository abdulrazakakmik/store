import React from 'react'

interface Props{
    params: Promise<{id: string}>
}

const page = async ({params}: Props) => {
    const { id } = await params;
  return (
    <div>page {id}</div>
  )
}

export default page