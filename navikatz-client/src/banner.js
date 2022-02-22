import react from 'react';
import logo from './logo.svg';
import './App.css';
import image from './bg.jpg';
import nft from './nft.gif';
import CounterInput from "react-bootstrap-counter";
import { useState, useEffect } from "react";

const Banner = (props) => {
    const { preLoading, setPreLoading, account, metamaskConnected, connectToMetamask } = props;
    const [selectedCount, setSelectedCount] = useState(1);
    return (
        <div className="Banner">
            {/* <img src={image} alt="" /> */}
            <div className='nft'>
                <img src={nft} alt="" />
            </div>
            <div className='CounterInputPart'>
                <CounterInput
                    value={1}
                    min={1}
                    max={10}
                    onChange={(value) => {
                        setSelectedCount(value);
                    }}
                />
            </div>
            <div className='button'>
                {/* <button onClick={connectToMetamask}>Connect wallet</button> */}
                {
                    metamaskConnected ?
                        <button >MINT YOUR NAVIKATZ NFTS!</button>
                        :
                        <button onClick={connectToMetamask}>CONNECT WALLET</button>
                }
            </div>
        </div>
    )
}

export default Banner