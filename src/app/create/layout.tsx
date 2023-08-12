interface Props { children: React.ReactNode }

export default function Layout(props: Props) {
  return (
    <form>
      <h2>Create</h2>
      {props.children}
    </form>
  )
}
