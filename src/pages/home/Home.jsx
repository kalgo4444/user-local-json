import Card from '@/components/card/Card'
import Form from '@/components/form/form'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Home = () => {
  const { data } = useFetch('/students')
  return (
    <section className="my-10">
      <Form />
      <Card data={data} />
    </section>
  )
}

export default React.memo(Home)
