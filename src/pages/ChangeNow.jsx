// src/pages/ChangeNow.jsx 
import React from 'react'; 
const ChangeNow = () => { 
    return ( 
        <div > 
            <h1>Change Now</h1> 
            <p>Changenow prides itself on being a fiat-friendly exchange, making it easy to convert your hard-earned fiat currencies into cryptocurrencies like Hoge and Bitcoin</p>
            <div style={{ height: '50vh', width: '100%' }}>
                <iframe 
                    id='iframe-widget' 
                    src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat=1500&backgroundColor=2B2B35&darkMode=true&from=btc&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=291aead12db5b3&locales=true&logo=true&primaryColor=e3d658&to=hoge&toFiat=eth&toTheMoon=true' 
                    style={{ height: '356px', width: '100%', border: 'none' }}
                    sandbox="allow-same-origin allow-scripts"
                ></iframe>
                <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
            </div>
        </div> 
    ); 
};
export default ChangeNow;
