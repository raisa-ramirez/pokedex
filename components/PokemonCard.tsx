'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { AppContext, transformArray, moveChips } from '@/utils';
import { Moves, PokemonProps } from '@/interfaces';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';

const PokemonCard = () => {
  const context = useContext(AppContext);
  const [pokemon, setPokemon] = useState<PokemonProps | null>(null);
  const data = context?.pokemon;

  useEffect(() => {
    if (data) {
      let info = {
        name: data.name,
        types: data.types.map((types: any) => types.type.name),
        moves: moveChips(data.moves.map((moves: any) => moves.move.name)),
        image: data.sprites.other.dream_world.front_default,
        stats: transformArray(
          data.stats.map((item: any) => ({
            name: item.stat.name,
            value: item.base_stat
          }))
        )
      };
      setPokemon(info);
    }
  }, [data]);

  return (
    <div className="flex justify-center p-10">
      {pokemon !== null && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Card sx={{ maxWidth: 400, padding: '1rem', height: 440 }}>
              <CardMedia
                component="img"
                sx={{
                  width: '50%',
                  margin: 'auto',
                  marginY: '1.2rem',
                  maxHeight: '45%',
                  objectFit: 'contain'
                }}
                title="pokemon image"
                image={pokemon.image || '/pokemon.svg'}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Pokemon Type(s): {pokemon.types.join(', ')}
                </Typography>
              </CardContent>
              <CardActions>
                <div className="grid grid-cols-3 gap-2">
                  {pokemon.moves.map((item) => item)}
                </div>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 400, height: 440 }}>
              <CardContent>
                <List>
                  {pokemon.stats.map((stat: any) => (
                    <ListItem key={stat.name}>
                      <ListItemIcon>
                        <Image
                          src={`/${stat.image}`}
                          width={20}
                          height={20}
                          alt="icon"
                        />
                      </ListItemIcon>
                      <ListItemText
                        className="text-secondary"
                        primary={`${stat.name}: ${stat.value}`}
                        secondary={
                          <LinearProgress
                            variant="determinate"
                            value={stat.value}
                            sx={{ height: '10px', borderRadius: '20px' }}
                            color="info"
                          />
                        }
                      ></ListItemText>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
