import { AppBarMovil } from "./AppBarMovil"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div style={{
        maxWidth: '100%',
        margin: '0 auto',
      }}>
      <AppBarMovil /> 
        <Outlet />
      </div>
  )
}
