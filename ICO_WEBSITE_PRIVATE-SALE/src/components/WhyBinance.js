import image from './../images/pngegg(1).png';

const WhyBinance = () => {
    return ( <section className = "section mask-c-blend-dark tc-light py-10 ov-h" >

        <div className = "container" >

        <div className = "nk-block nk-block-features-2" >
        <div className = "row align-items-center gutter-vr-30px justify-content-center justify-content-md-between" >
        <div className = "col-mb-9 col-sm-7 col-md-6 col-lg-5" >
        <div className = "gfx py-4 animated"
        data-animate = "fadeInUp"
        data-delay = ".1" >
        <img src = {
            image
        }
        alt = "gfx" />
        </div> </div> <div className = "col-sm-10 col-md-6 text-center text-md-left" >

        <div className = "nk-block-text" >
        <h4 className = "title title-lg animated text-yellow-500"
        data-animate = "fadeInUp"
        data-delay = ".2" > Why Binance Smartchain Token ? </h4> <p className = "lead animated"
        data-animate = "fadeInUp"
        data-delay = ".3" > ROG token is the next big thing in cryptocurrency as it will be the utility in all its gaming platforms.This can be use to buy avatars, collections, items and a universal currency within its ecosystem. </p>

        </div> </div> </div> </div> </div>


        </section>
    )
}

export default WhyBinance