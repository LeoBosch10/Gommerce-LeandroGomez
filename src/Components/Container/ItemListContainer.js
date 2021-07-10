import React from 'react'
import ImgMediaCard from './CardComponent'
import Grid from '@material-ui/core/Grid';

const ItemListContainer = () => {
    return (
        <div> 
            <Grid container spacing={12} direction="row" justifyContent="center" alignItems="center" >
               <Grid item xs={3}><ImgMediaCard/></Grid>
               <Grid item xs={3}><ImgMediaCard/></Grid>
               <Grid item xs={3}><ImgMediaCard/></Grid>
               <Grid item xs={3}><ImgMediaCard/></Grid>
               </Grid>
             </div>
    )

}
export default ItemListContainer ;