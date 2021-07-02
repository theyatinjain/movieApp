import React from 'react';
import "./NetworksArea.css";
import Row from './Row';

function NetworksArea(props) {
    return (
        <div className="networkDiv" id={props.name}>
            <img src={props.logo} alt={props.name} />
            <Row title="Originals" networkId={props.networkId} type="tv" />
            <Row title="Top Rated" networkId={props.networkId} type="movies" />
        </div>
    )
}

export default NetworksArea;