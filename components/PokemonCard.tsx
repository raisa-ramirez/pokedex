import { Card, CardActions, CardContent, CardMedia, Chip, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const PokemonCard = () => {
    return <div className="flex justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Card sx={{ maxWidth: 345, padding: '1rem'}}>
                    <CardMedia
                      component="img"
                        sx={{ width: '50%', margin: 'auto', marginY: '2rem'}}
                        title="pokemon image"
                        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pidgeotto
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Pokemon Type: Normal
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Chip label="razor-wind" variant="outlined" color="primary"/>
                        <Chip label="gust" variant="outlined" color="primary"/>
                        <Chip label="wing-attack" variant="outlined" color="primary"/>
                    </CardActions>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Image src="/hp.png" width={20} height={20} alt="icon"/>
                            </ListItemIcon>
                            <ListItemText 
                            className="text-secondary"
                            primary={`Hp: ${20}`}
                            secondary={
                                <LinearProgress variant="determinate" value={20} sx={{height: '10px', borderRadius: '20px'}}/>
                            }>
                            </ListItemText>
                        </ListItem>
                    </List>
                    </CardContent>
                </Card>
            </div>
        </div>
        
    </div>
}

export default PokemonCard;