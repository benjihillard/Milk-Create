import React , {useState} from 'react'
import './SearchItem.css'
import { useDataLayerValue } from "./DataLayer";



function SearchItem({spotify, album, artist, image, id}) {

    const [{hasMod}, dispatch] = useDataLayerValue();

    const [hover , setHover] = useState(false);
    const showHover = () => setHover(!hover)

    const [remove , setRemove] = useState(false);

    const add = () => {
        spotify.addToMySavedAlbums([id])
        .then(function(data) {
            console.log('Added album!');
        }, function(err) {
            console.log('Something went wrong!', err);
        });
        dispatch({
            type: "SET_MOD",
            hasMod: true,
          });
        setRemove(true)

    }

    if(remove){
        return null;
    }

    return (
        <div className={"searchItem up-front"}>
            <img onMouseEnter={showHover} src={image}></img>
            <img onClick={add} onMouseLeave={showHover} className={hover ? 'show' : 'hide'}  src="https://raw.githubusercontent.com/benjihillard/spotify/master/public/img/plus.png"></img>
            <p className="albumName">{album}</p>
            <p>{artist}</p>
        </div>
    )
}

export default SearchItem
