import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

const Header = () => {

    const iconOne = <FontAwesomeIcon icon={faDiscord} />;
    const iconTwo = <FontAwesomeIcon icon={faGithub} />;
    const iconThree = <FontAwesomeIcon icon={faLinkedin} />;

    return(
        <div className="text-center border-b border-slate-300 p-4">
            <div className="text-3xl font-bold"><a href="https://siddpanchal.website/" className="hover:underline">Siddharth (Sidd) Panchal</a></div>
            <div className="text-gray-500">Software Developer / Pipeline Technical Director</div>
            <Link href="https://discordapp.com/users/sidthree16#2863">
            <a className='text-3xl text-indigo-500 hover:text-slate-500 p-2'>
                {iconOne}
            </a>
            </Link>
            <Link href="https://github.com/sidthree6">
            <a className='text-3xl text-slate-800 hover:text-slate-500 p-2'>
                {iconTwo}
            </a>
            </Link>
            <Link href="https://www.linkedin.com/in/siddharth-panchal-23405923/">
            <a className='text-3xl text-blue-700 hover:text-slate-500 p-2'>
                {iconThree}
            </a>
            </Link>
        </div>
    );
}

export default Header;