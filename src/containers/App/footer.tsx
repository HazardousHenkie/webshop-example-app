import React from 'react'

import LocaleToggle from 'components/Molecules/LocaleToggle'

import { FooterStyled } from './styledComponents'

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <LocaleToggle />
    </FooterStyled>
  )
}

export default React.memo(Footer)
