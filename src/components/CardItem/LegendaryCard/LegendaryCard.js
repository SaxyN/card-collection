import React from 'react';
import ImageHandler from '../../ImageHandler/ImageHandler';
import $ from 'jquery'

import "./legendarystyle.scss";

const LegendaryCard = ({ imageFace, imageStyle, sizeTag }) => {
    const [hover, setHover] = React.useState(false);


    var x;
    var $cards = $(".card_legendary");
    var $style = $(".legendary_hover");

    $cards
        .on("mousemove", function (e) {
            // normalise touch/mouse
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
            // math for gradient / background positions
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
            // need to use a <style> tag for psuedo elements
            var style = `
      .card_legendary:hover:before { ${grad_pos} }  /* gradient */
      .card_legendary:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `
            // set / apply css class and style
            $cards.removeClass("active");
            $card.removeClass("animated");
            $card.attr("style", tf);
            $style.html(style);
            if (e.type === "touchmove") {
                return false;
            }
            clearTimeout(x);
        }).on("mouseout touchend touchcancel", function () {
            // remove css, apply custom animation on end
            var $card = $(this);
            $style.html("");
            $card.removeAttr("style");
            // x = setTimeout(function () {
            //     $card.addClass("animated");
            // }, 2500);
        });

    switch (sizeTag) {
        case 0:
            return (
                <>
                    <div className="card_legendary normal_size eevee" onMouseOver={() => setHover(true)}>
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='legendary_hover'></style>
                </>
            )
        case 1:
            return (
                <>
                    <div className="card_legendary medium_size eevee" onMouseOver={() => setHover(true)}>
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='legendary_hover'></style>
                </>
            )
        case 2:
            return (
                <>
                    <div className="card_legendary large_size eevee" onMouseOver={() => setHover(true)}>
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='legendary_hover'></style>
                </>
            )
        default:
            return (
                <>
                    <div className="card_legendary normal_size eevee" onMouseOver={() => setHover(true)}>
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='legendary_hover'></style>
                </>
            )
    }

}

export default LegendaryCard;