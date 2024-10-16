import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEye, FaHeart, FaStar } from 'react-icons/fa'

const Card = ({ movie, large = false }: { movie: number, large?: boolean }) => {
    return (
        <div className={`${large ? 'lg:w-[260px]  min-w-[200px] lg:h-[400px] md:w-[200px] md:h-[300px] sm:w-[230px] sm:h-[340px] w-[180px] h-[300px]' : 'lg:w-[200px] lg:h-[300px] md:w-[187px] md:h-[280px]  sm:h-[230px] sm:w-[150px] xs:h-[250px] xs:w-[170px] w-[150px] h-[230px]'}`}>
            <Link
                href={`/movies/${movie}`}
            >
                <div className='w-full hover:scale-[0.99]  hover:shadow-white hover:border-2 hover:border-red-500 relative h-[80%] rounded-[8px] overflow-hidden'>
                    <Image
                        src={'/abcd.jpg'}
                        alt={`${movie} poster`}
                        fill
                    />
                </div>
                <div className='w-full h-[15%] mt-[5px]'>
                    <h5 className='overflow-ellipsis text-nowrap font-bold overflow-hidden text-[14px]'>{movie}</h5>
                    <h6 className='flex items-center justify-between text-[13px] py-[2px]'>
                        <span className='text-[12px] text-neutral-400'>2014</span>
                        <div className='flex items-center'>
                            <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                <FaHeart />
                            </i>
                            <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                <FaEye />
                            </i>
                            <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                <FaStar />
                            </i>
                            <h6 className='text-[13px] text-yellow-500 mt-[3px] '>{5.50}</h6>
                        </div>
                    </h6>
                </div>
            </Link>
        </div>
    )
}

export default Card