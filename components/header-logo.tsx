import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
    return (
        <Link href='/'>
            <div className="items-center hidden lg:flex">
                <Image src='/logo.svg' alt='logo' height={40} width={40} />
                <p className='font-semibold text-white text-2xl ml-2.5'>
                    CashTrack
                </p>
            </div>
        </Link>
    )
}