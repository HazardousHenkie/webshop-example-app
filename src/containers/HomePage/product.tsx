import React from 'react'

import ROUTES from 'strings/routes'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InfoIcon from '@material-ui/icons/Info'

import { useTranslation } from 'react-i18next'

import { CardMediaStyled, IconButtonStyled } from './styledComponents'

interface ProductInterface {
  product: Record<string, any>
}

const Product: React.FC<ProductInterface> = ({ product }) => {
  const { t } = useTranslation(['homePage'])

  return (
    <Grid item={true} xs={4}>
      <Card>
        <CardHeader title={product.title} />
        {product.image && (
          <CardMediaStyled image={product.image} title={product.title} />
        )}
        <CardContent>
          <Typography variant="body2" component="p">
            {product.short_description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing={true}>
          <IconButtonStyled
            component={Link}
            to={{
              pathname: `${ROUTES.PRODUCT_LINK}${product.id}`,
              state: {
                product
              }
            }}
            aria-label={t('forgotPassword:moreInfo', 'more information')}
          >
            <InfoIcon />
          </IconButtonStyled>
          {/* <IconButton
            aria-label={t(
              'forgotPassword:addToShoppingCart',
              'add to shopping cart'
            )}
          >
            <ShoppingCartIcon />
          </IconButton> */}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Product
