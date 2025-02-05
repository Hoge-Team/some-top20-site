import { useState, useEffect } from 'react';
import { address } from './info'

const Top20 = (show) => {
    const [topHolders, setTopHolders] = useState()

    const getData = () => {
        const getTopTokenHolders = 
            'https://api.ethplorer.io/getTopTokenHolders/' 
            + address.eth.hoge 
            + '?apiKey='
            + import.meta.env.VITE_ETHPLORER_API_KEY
            + '&limit=21'
        
            fetch(getTopTokenHolders, { method: "GET" })
            .then(response => response.json())
            .then(data => { setTopHolders(data); console.log('found ', data)
            })
            .catch(error => console.error(error));        
    }

    useEffect(() => {
       if (show) getData()
    },[])
    
    if (topHolders !== undefined ) {
        const holders = topHolders.holders

        return ( <div id="top20div" className="top20">
            <div className="card">
                {holders.map(holder => 
                    <h4 className='holders' key={holder.address}>
                        <a href={"https://ethplorer.io/address/" + holder.address } 
                            target="_blank"
                        >
                            {holder.address}
                        </a><br/>
                        {(holder.balance * 0.000000001).toLocaleString()}
                    </h4>
                )}
            </div>
        </div>)
    } else return <>loading...</>
}

export default Top20
