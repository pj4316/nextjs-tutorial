import React from "react";

type Props = { children: React.ReactNode }

export default function Layout(props: Props) {
  return (
      <div>
        <h2>Create</h2>
        {props.children}
      </div>
  )
}
