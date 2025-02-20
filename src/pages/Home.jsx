import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import Top20 from '../components/Ethplorer';
import { address } from '../components/info';
import { Link } from 'react-router-dom'


const Home = () => {
    const [show, setShow] = useState(false);
    const [paid, setPaid] = useState(false);
  return (
    <div className='container'>
      <h3>Project wallet and LP drained, LARP web3 dev stole over 100k so far</h3>
      <p id='intro'>
        What's new with HOGE? <br />
        Well not much, anyone that has an idea that doesn't conform to the marketing troll moonboys; expect a ban from socials.
        If you were hoping for a moon update, we'll have to wait years, if ever.
        The top20 has more than enough to keep draining new holders. 
        Sustainable 10x is imposible at this time. 
        Oh also, &nbsp; 
        <a href='https://etherscan.io/address/0x1920bd8C66ef7F5AC44846413B74CB05f5182B14' >HOGEDAO.ETH</a>
        &nbsp; wallet has lost the 200k in stables and most of the eth.
      </p>
      <div  id='paypal_button' hidden={paid}>
        Support A Project <br/>
        <a href='https://www.paypal.com/ncp/payment/ZLRCM2SAD2XFJ' target='_blank'><img src='./paypal_button.png' alt='paypal'></img></a>
      </div>
      <div id="getBent" hidden={paid}>
        <a href="https://www.paypal.com/invoice/p/#9KCEVKRNJBPJGWM4">Exit invoice (Unpaid)</a><br/>
      </div>
      <div id='MM' hidden={paid}>
        <a href="https://www.paypal.com/invoice/p/#CGCHUBYDU24WW52M">Unpaid Past Due MM invoices</a>
      </div>      
      <br />
      <div id="someId" hidden={paid}>
        <h3> Class Action Inquires &nbsp;&nbsp;
          <a href="mailto:email@hoge.team">email@hoge.team</a>  
        </h3>
      </div> 
      <div id='logos' hidden={paid}>
        Some site, better than no site.<br/>
        Build references for 'anyone' to build more.<br/>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div  className='hoge'>
        Eth Hoge Address<br/>
        <a href={'https://ethplorer.io/address/'+address.eth.hoge}
          target='_blank'>{address.eth.hoge}</a>
      </div>
      <br/>
      Powered By Ethplorer API<br/>
      {!show &&
        <button onClick={() => setShow(true)} >Show Top Holders</button>    
      }
      {show && <Top20 />}
      <p />
      Swap fiat and BTC for HOGE!
      <div>
        Check out the <Link to='/ChangeNow'>ChangeNow widget</Link>
      </div>

    </div>
    
  )
}

export default Home;