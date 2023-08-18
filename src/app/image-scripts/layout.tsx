import React from "react";
import Menu from "@/components/Menu";

type Props = { children: React.ReactNode }

export default function Layout(props: Props) {
  return (
    <div>
      <h2>Create</h2>
      <Menu />
      {props.children}
    </div>
  )
}
