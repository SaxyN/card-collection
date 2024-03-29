import React from 'react';
import $ from "jquery";
import "./shatterstyle.scss";
import ImageHandler from '../../ImageHandler/ImageHandler';

const ShatterCard = ({ imageFace, imageStyle, sizeTag }) => {
    const [hover, setHover] = React.useState(false);

    var x;
    var $cards = $(".card_shatter");
    var $style = $(".hover");

    $cards
        .on("mousemove", function (e) {
            var pos = [e.offsetX, e.offsetY];
            e.preventDefault();
            if (e.type === "touchmove") {
                pos = [e.touches[0].clientX, e.touches[0].clientY];
            }
            var $card = $(this);
            // math for mouse position
            var l = pos[0];
            var t = pos[1];
            var h = $card.height();
            var w = $card.width();
            var px = Math.abs(Math.floor(100 / w * l) - 100);
            var py = Math.abs(Math.floor(100 / h * t) - 100);
            var pa = (50 - px) + (50 - py);
            var lp = (50 + (px - 50) / 1.5);
            var tp = (50 + (py - 50) / 1.5);
            var px_spark = (50 + (px - 50) / 7);
            var py_spark = (50 + (py - 50) / 7);
            var p_opc = 20 + (Math.abs(pa) * 1.5);
            var ty = ((tp - 50) / 3.0) * -1;
            var tx = ((lp - 50) / 2.5) * .5;
            // css to apply for active card
            var grad_pos = `background-position: ${lp}% ${tp}%;`
            var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
            var opc = `opacity: ${p_opc / 100};`
            var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg) scale(1.1)`
            var style = `
      .card_shatter:hover:before { ${grad_pos} }  /* gradient */
      .card_shatter:hover:after { ${sprk_pos} ${opc} }   /* sparkles */
    `
            $cards.removeClass("active");
            $card.removeClass("animated");
            $card.attr("style", tf);
            $style.html(style);
            if (e.type === "touchmove") {
                return false;
            }
            clearTimeout(x);
        }).on("mouseout touchend touchcancel", function () {
            var $card = $(this);
            $style.html("");
            $card.removeAttr("style");
        });


    switch (sizeTag) {
        case 0: {
            return (
                <>
                    <div className="card_shatter normal_size eevee" onMouseOver={() => setHover(true)}>
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='hover'></style>
                </>
            )
        }
        case 1: {
            return (
                <>
                    <div className="card_shatter medium_size eevee" onMouseOver={() => setHover(true)}>
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='hover'></style>
                </>
            )
        }
        case 2: {
            return (
                <>
                    <div className="card_shatter large_size eevee" onMouseOver={() => setHover(true)}>
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='hover'></style>
                </>
            )
        }
        default: {
            return (
                <>
                    <div className="card_shatter normal_size eevee" onMouseOver={() => setHover(true)}>
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='hover'></style>
                </>
            )
        }
    }


    // return (
    //     <>
    //         <div className="card_shatter eevee" onMouseOver={() => setHover(true)}>
    //             {/* <img src={BURLEY_FACE} alt="alt" style={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> */}
    //             <ImageHandler name={imageFace} imageStyle={imageStyle} />
    //         </div>
    //         <style className='hover'></style>
    //     </>
    // )

}

export default ShatterCard;