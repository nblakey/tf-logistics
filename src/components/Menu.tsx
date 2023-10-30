import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showCategory, setShowCategory] = useState('products')

    useEffect(() => {
        window.addEventListener("message", (e) => {
            if (e.data.openMenu) {
                setShowMenu(true)
            }
        })
    })

    const closeMenu = () => {
        setShowMenu(false)
        setShowCategory('products')
        window.postMessage({
            closeMenu: true,
            openMenu: false
        }, window.origin);
    }

    return (
        <>
            {/* <div className="fixed top-0 left-0 z-[51]"></div> */}
            <div className={`fixed lg:hidden box-border top-0 left-0 h-full w-full overflow-scroll bg-white pt-4 lg:p-4 z-50 transition after:w-full after:h-4 after:bg-gradient-to-r after:from-accent-blue after:to-accent-green after:absolute after:top-0 ${showMenu ? 'opacity-1 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                <div className="absolute top-6 right-2 hover:cursor-pointer" onClick={() => closeMenu()}><CloseIcon className="w-10 h-10 hover:text-accent-blue" /></div>
                <div className="flex lg:hidden p-10">
                    {/** Mobile view */}
                    <div className="flex flex-col gap-10 font-light w-max">
                        <div className="flex flex-col gap-4 md:text-xl">
                            <div className="font-bold after:bg-gradient-to-r after:from-accent-blue after:to-accent-green after:h-[2px] after:flex after:w-[150px] md:after:w-[185px]">Products & Services</div>
                            <div>Marketplace Health Insurance</div>
                            <a href="/medicare">Medicare Information</a>
                            <ul className="!gap-4 !pl-4 !list-none text-sm md:text-base">
                                <li>Part A: Hospital Insurance</li>
                                <li>Part B: Medical Insurance</li>
                                <li>Part C: Medicare Advantage</li>
                                <li>Part D: Drug Coverage</li>
                                <li>Supplement: Medigap</li>
                            </ul>
                            <div>Long Term Care</div>
                            <div>Life Insurance</div>
                            <div>Annuities</div>
                        </div>
                        <div className="flex flex-col gap-4 md:text-xl">
                            <div className="font-bold after:bg-gradient-to-r after:from-accent-blue after:to-accent-green after:h-[2px] after:flex after:w-[63px] md:after:w-[78px]">Connect</div>
                            <div>About Us</div>
                            <div>FAQs</div>
                            <div>Contact Us</div>
                            <div>317-398-9321</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed hidden lg:block box-border top-0 left-0 h-full w-full overflow-scroll bg-gradient-to-r from-accent-blue to-accent-green pt-4 lg:p-4 z-50 transition ${showMenu ? 'opacity-1 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                <div className="relative w-full h-full bg-white">
                    <div className="absolute top-2 right-2 hover:cursor-pointer" onClick={() => closeMenu()}><CloseIcon className="w-10 h-10 hover:text-accent-blue" /></div>
                    <div className="hidden lg:flex items-center justify-center h-full">
                        {/** Desktop view */}
                        <div className="flex flex-col gap-8 text-2xl w-64">
                            <div className={`hover:cursor-pointer after:bg-gradient-to-r after:from-accent-blue after:to-accent-green after:h-[2px] after:flex after:transition-[width] after:w-[30px] ${showCategory == 'products' && 'font-bold after:!w-[222px] after:scale-y-[3]'}`} onClick={() => setShowCategory('products')}>Products & Services</div>
                            <div className={`hover:cursor-pointer after:bg-gradient-to-r after:from-accent-blue after:to-accent-green after:h-[2px] after:flex after:transition-[width] after:w-[30px] ${showCategory == 'connect' && 'font-bold after:!w-[94px] after:scale-y-[3]'}`} onClick={() => setShowCategory('connect')}>Connect</div>
                        </div>
                        <div className="flex flex-col justify-center w-72 h-96 border-l-2 pl-14 font-light">
                            {showCategory == 'products' && (
                                <div className="flex flex-col gap-5">
                                    <div>Marketplace Health Insurance</div>
                                    <ul className="!gap-2 !pl-8 !list-none text-base">
                                        <a href="/medicare" className="-ml-8">Medicare Information</a>
                                        <li>Part A: Hospital Insurance</li>
                                        <li>Part B: Medical Insurance</li>
                                        <li>Part C: Medicare Advantage</li>
                                        <li>Part D: Drug Coverage</li>
                                        <li>Supplement: Medigap</li>
                                    </ul>
                                    <div>Long Term Care</div>
                                    <div>Life Insurance</div>
                                    <div>Annuities</div>
                                </div>
                            )}
                            {showCategory == 'connect' && (
                                <div className="flex flex-col gap-5">
                                    <div>About Us</div>
                                    <div>FAQs</div>
                                    <div>Contact Us</div>
                                    <div>Call: 317-398-9321</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
