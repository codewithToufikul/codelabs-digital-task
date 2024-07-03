import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa6';
import navLogo from '../../../../../assets/logo light.png';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
<div className=' mt-20 lg:mt-[160px] bg-[#070826]'>
<footer className="footer justify-between px-4 mx-auto pt-16 pb-10 rounded-2xl lg:px-64    text-base-content">
      <aside className=''> 
      <img className="w-[200px]" src={navLogo} alt="" />
        <div className=' lg:w-[400px]'>
        <p className=' text-lg mb-7 text-slate-300'>
        123 Main Street Anytown, 
        USA <br /> Postal Code: 12345
        </p>
        <p className='text-lg text-slate-300 '>
        Support: support@oyolloo.com <br />
        (Available : 10:00am to 07:00pm)
        </p>
        </div>
      </aside>
      <nav className=' pt-10'>
        <h6 className="footer-title text-lg text-slate-200">Home</h6>
        <a className="link link-hover text-lg text-slate-400">About Us</a>
        <a className=" text-lg text-slate-400">Success Page</a>
        <a className="link link-hover text-lg text-slate-400">Terms and condition</a>
      </nav>
      <nav className=' pt-10'>
        <h6 className="footer-title text-lg text-slate-200">Services</h6>
        <a className="link link-hover text-lg text-slate-400">Scheduling</a>
        <a className="link link-hover text-lg text-slate-400">Contact Us</a>
        <a className="link link-hover text-lg text-slate-400">Patient Portal</a>
      </nav>
      <nav className=' pt-10'>
        <h6 className="footer-title text-lg text-slate-200">Follow Us</h6>
        <div className=" justify-center md:justify-start  flex flex-row  gap-4 ">
            <a className=" text-3xl text-white cursor-pointer"><FaFacebook /></a>
            <a className=" text-3xl text-white cursor-pointer"><FaInstagramSquare /></a>
            <a className=" text-3xl text-white cursor-pointer"><FaTwitter /></a>
            <a className=" text-3xl text-white cursor-pointer"><FaGithub /></a>
        </div>
        <a className="link link-hover text-lg text-slate-400">Help Center</a>
      </nav>
    </footer>
</div>
  );
};

export default Footer;
