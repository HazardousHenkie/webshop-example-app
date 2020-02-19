import React from 'react'

import { productLink } from 'utils/routes'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InfoIcon from '@material-ui/icons/Info'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { CardMediaStyled, IconButtonStyled } from './styledComponents'

interface ProductInterface {
  product: Record<string, any>
}

const Product: React.FC<ProductInterface> = ({ product }) => {
  return (
    <Grid item={true} xs={4}>
      <Card>
        <CardHeader title={product.title} />
        {product.image && (
          <CardMediaStyled image={product.image} title={product.title} />
        )}
        <CardContent>
          <Typography variant="body2" component="p">
            {/* constrain description and title */}
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing={true}>
          <IconButtonStyled
            component={Link}
            to={{
              pathname: `${productLink}${product.id}`,
              state: {
                product
              }
            }}
            aria-label="more information"
          >
            <InfoIcon />
          </IconButtonStyled>
          <IconButton aria-label="add to shopping cart">
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Product
