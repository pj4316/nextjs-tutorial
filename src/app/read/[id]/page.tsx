interface ReadProps {
  params: {
    id: any
  }
}
export default async function Read(props: ReadProps) {
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`)
  const topic = await res.json()
  return (
      <>
        <h2>{topic.title}</h2>
        {topic.body}
      </>
  )
}