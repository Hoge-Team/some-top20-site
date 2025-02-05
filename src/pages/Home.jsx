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
      <p>
      <div  id='paypal_button'>
        Support A Project <br/>
        <a href='https://www.paypal.com/ncp/payment/ZLRCM2SAD2XFJ' target='_blank'><img src='./paypal_button.png' alt='paypal'></img></a>
      </div>
      <div id="getBent" hidden='true'>
        <a href="https://www.paypal.com/invoice/p/#9KCEVKRNJBPJGWM4">Exit invoice (Unpaid)</a><br/>
      </div>
      <div id='MM' hidden={paid}>
        <a href="https://www.paypal.com/invoice/p/#CGCHUBYDU24WW52M">Unpaid Past Due MM invoices</a>
      </div>      
      </p>
      <div id="someId" hidden='true'>
        Some site, better than no site.
        <p> Inquires &nbsp;&nbsp;
          <a href="mailto:email@hoge.team">email@hoge.team</a>  
        </p>
      </div> 
      <div id='logos' hidden='true'>
        Build references to build it out more.<br/>
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
        <Link to='/ChangeNow'><img src='./changenow.png' alt='changenow' /></Link>
      </div>

    </div>
    
  )
}

export default Home;