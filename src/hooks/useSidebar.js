import React from "react"


const useSidebar = () => {
  const [openSidebar, setOpenSidebar]= React.useState(false)

  return {openSidebar, setOpenSidebar}
}

export default useSidebar
