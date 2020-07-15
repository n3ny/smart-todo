import React from 'react'
import { Text, Button } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { startGetPockemons } from '../redux/actions/pockemon';

export default DetailsScreen = () => {
    const dispatch = useDispatch();
    const pockemons = useSelector(store => store.pockemons);
    console.log('el store', pockemons)
    
    return (
        <>
            <Text style={{ color: 'black' }}>jghjh</Text>
            <Button title='obtener pokemones'
                onPress={() => dispatch(startGetPockemons())}>
            </Button>
            {
                pockemons.data.map(item => {
                return (<Text style={{ color: 'black' }} key={item.id}>{item.name}</Text>)
                })
            }
        </>
    );
};