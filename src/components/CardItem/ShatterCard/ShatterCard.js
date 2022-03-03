import React, { useState } from 'react';
import card_template from "./card_template.png";
import card_template_face from "./card_template_face.png";
import blurred_shatter from "./blurred_shatter.png";

import BLUE_FACE from "../CardAssets/blue_face.png";
import PURPLE_FACE from "../CardAssets/purple_face.png";

import $ from "jquery";
import "./shatterstyle.scss";



const ShatterCard = () => {
    const [hover, setHover] = React.useState(false);

    var x;
    var $cards = $(".card_shatter");
    var $style = $(".hover");

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
      .card_shatter:hover:before { ${grad_pos} }  /* gradient */
      .card_shatter:hover:after { ${sprk_pos} ${opc} }   /* sparkles */
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

    return (
        <>
            <div className="card_shatter eevee animated" onMouseOver={() => setHover(true)}>
                <img src={PURPLE_FACE} alt="alt" style={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
            </div>
            <style className='hover'></style>
        </>
    )

}

export default ShatterCard;