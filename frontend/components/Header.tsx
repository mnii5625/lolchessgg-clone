import Image from "next/image";
import logo2x from '../public/images/lolchessgg-logo-bkbg@2x.png'
import Link from "next/link";

const Header = () => {
    const navList : String[] = ["가이드", "추천 메타", "천상계 덱", "아이템 통계", "", "순위표", "즐겨찾기", "", "시즌6.5", "증강", "챔피언", "시너지", "아이템", "족보", "", "배치툴", "시뮬레이터", "", "커뮤니티"];

    return (
        <header>
            <div className="header_main">
                <div>
                    <Link href="/">
                        <a className="header_logo_box">
                            <Image 
                                src={logo2x} 
                                width = {210}
                                height = {44}
                                alt='Logo2x'
                            />
                            <h1>
                                롤체지지
                            </h1>
                        </a>
                    </Link>
                    
                </div>
                
            </div>
            <div className="header_nav_box">
                <div className="header_nav">
                    <ul>
                        {navList.map((nav, index) => (
                            nav === "" ? <li className="nav_bar" key={index}><span></span></li> 
                                : index === 8 ? <li className="nav_season" key ={index}><Link href="/">{nav}</Link></li> : <li key ={index}><Link href="/">{nav}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </header>
    )
}

export default Header;