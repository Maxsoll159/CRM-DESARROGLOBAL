import Link from 'next/link';
import { DatosNav } from '../../helpers/DatosMenu';

export const BarraMenu = () => {

    return (
        <div className="w-full">
            <div className="p-5">
                <img
                    src="/img/LogoDesarrollo.webp"
                    alt="Desarrollo Global"
                    className="mx-auto "
                />
            </div>
            <div className="mb-10 px-7">

                {DatosNav.map((menu) => (
                    <Link key={menu.nombre} href={menu.href}>

                        <div className='text-white flex items-center gap-10 mt-14 w-full '>
                            <span className='text-[32px]'><i className={menu.icon}></i></span>
                            <p className='text-[16px] capitalize Montserrat'>{menu.nombre}</p>
                        </div>

                    </Link>
                ))}


            </div>
        </div>
    );
};
