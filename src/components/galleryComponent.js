import React, { useState } from 'react'
import { SRLWrapper } from "simple-react-lightbox"
import Image from '../images/swiperPage1.jpg'
import ImageOne from '../images/swiperPage2.jpg'
import ImageTwo from '../images/swiperPage3.jpg'
import ImageThree from '../images/swiperPage4.jpg'

const GalleryComponent = ({ showFirst, showSecond, showThird }) => {

    const [click, setClicked] = useState()

    return (
        <div>
            <div className={showFirst ? 'block' : 'hidden'}>
                <SRLWrapper>
                    <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                    </div>
                </SRLWrapper>
            </div>
            <div className={showSecond ? 'block' : 'hidden'}>
                <SRLWrapper>
                    <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                    </div>
                </SRLWrapper>
            </div>
            <div className={showThird ? 'block' : 'hidden'}>
                <SRLWrapper>
                    <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                    </div>
                </SRLWrapper>
            </div>
            <div className={!showFirst ? !showSecond ? !showThird ? 'block' : 'hidden' : 'hidden' : 'hidden'}>
                <SRLWrapper>
                    <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={Image} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageOne} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageTwo} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                        <div>
                            <img src={ImageThree} alt='' />
                        </div>
                    </div>
                </SRLWrapper>
            </div>
        </div>
    )
}

export default GalleryComponent