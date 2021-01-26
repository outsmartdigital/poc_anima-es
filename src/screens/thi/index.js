import React, { useContext } from 'react'
import { Template } from '../../components/template'
import { TemplateContext } from '../../components/template/context'

export const Thi = () => {
  const { isMobile } = useContext(TemplateContext)

  return (
    <Template>
      <p>Isso é do Thi</p>
      {isMobile && <p>Mobile</p>}
    </Template>
  )
}
