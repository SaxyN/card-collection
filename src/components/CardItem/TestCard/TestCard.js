import react, { Fragment } from 'react';
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import card_template_face from "./card_template_face.png";
import blurred_shatter from "./blurred_shatter.png";

import $ from "jquery";

import "./script";

const useStyles = makeStyles((theme) => ({
    // --color1: #f32a6d; red
    // --color2: #e7ac3e; yellow/gold
    // --color3: #45e692; green
    // --color4: #5ac4e4; blue
    // --color5: #b153dd; purple
    main: {
        background: "linear-gradient(45deg, transparent 15%, #f32a6d 36%, #e7ac3e 43%, #45e692 50%, #5ac4e4 57%, #b153dd 64%, transparent 100%)",
        "&:before": {
            backgroundPosition: "50% 50%",
            backgroundSize: "300% 300%",
        }
    },
    card: {
        width: "420px",
        height: "590px",
        position: "relative",
        overflow: "hidden",
        margin: "20px",
        // perspective: 1000,
        touchAction: "none",
        borderRadius: "5% / 3.5%",
        boxShadow: "-7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent, 0 0 5px 0px rgba(255,255,255,0), 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        transition: "transform 0.5s ease, box-shadow 0.5s ease",
        willChange: "transform, filter",
        backgroundColor: "black",
        backgroundImage: `url(${card_template_face})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        transformOrigin: "center",
        "&:hover": {
            boxShadow: "0 0 13px 4px rgba(255,255,255,0.3), 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
            transform: "scale(1.05)",
        },
        "&:before, &:after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            opacity: .5,
            mixBlendMode: "color-dodge",
            transition: "all 0.33s ease",
        },
        "&:before": {
            backgroundPosition: "50% 50%",
            backgroundSize: "300% 300%",
            // backgroundImage: 'linear-gradient(to right bottom, #430089, #82ffa1)',
            backgroundImage: "linear-gradient(45deg, transparent 15%, #f32a6d 36%, #e7ac3e 43%, #45e692 50%, #5ac4e4 57%, #b153dd 64%, transparent 100%)",
            clipPath: "polygon(8% 10.5%, 8% 59.5%, 92.5% 59.5%, 92.5% 10.5%)",
            opacity: .5,
            filter: "brightness(0.3) contrast(1)",
            zIndex: 1
        },
        "&:hover:before, &:active:before": {
            backgroundImage: "linear-gradient( 45deg, transparent 15%, #f32a6d 36%, #e7ac3e 43%, #45e692 50%, #5ac4e4 57%, #b153dd 64%, transparent 100%)",
            clipPath: "polygon(8% 10.5%, 8% 59.5%, 92.5% 59.5%, 92.5% 10.5%)", // Just Picture
            // clipPath: "polygon(0% 0%, 0% 100%, 8% 100%, 8% 10.5%, 92.5% 10.5%, 92.5% 60%, 8% 60%, 8% 100%, 100% 100%, 100% 0%)", // Exluding Picture
        },
        "&:after": {
            opacity: 1,
            // backgroundImage: `url(https://assets.codepen.io/13471/holo.png), url(${blurred_shatter}), linear-gradient(125deg, #e02d1650 15%, #fbff0a40 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%)`,
            background: "linear-gradient(45deg, #e02d1650 15%, #fbff0a40 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%)",
            // clipPath: "polygon(8% 10.5%, 8% 59.5%, 92.5% 59.5%, 92.5% 10.5%)", // Just Picture
            clipPath: "polygon(0% 0%, 0% 100%, 8% 100%, 8% 10.5%, 92.5% 10.5%, 92.5% 60%, 8% 60%, 8% 100%, 100% 100%, 100% 0%)", // Exluding Picture
            backgroundPosition: "50% 50%",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            filter: "brightness(1.0) contrast(0.65)",
            transition: "all .33s ease",
            mixBlendMode: "color-dodge",
            // opacity: 0.6,
        },
        "&:active:after, &:hover:after": {
            filter: "brightness(1.6) contrast(1.0)",
            opacity: 1,
        },
        "&:active, &:hover": {
            animation: "none",
            transition: "box-shadow 0.1s ease-out",
        },
        "&:active:before. &:hover:before": {
            animation: "none",
            backgroundPosition: "50% 50%",
            backgroundSize: "250% 250%",
            opacity: 0.88,
            filter: "brightness(.66) contrast(1.33)",
            transition: "none",
        },
    }
}))

const TestCard = () => {
    const classes = useStyles();

    // var x;
    // var $cards = $(".card");
    // var $style = $(".hover");

    // $cards
    //     .on("mousemove", function (e) {
    //         // normalise touch/mouse
    //         var pos = [e.offsetX, e.offsetY];
    //         e.preventDefault();
    //         // if (e.type === "touchmove") {
    //         //     pos = [e.touches[0].clientX, e.touches[0].clientY];
    //         // }
    //         var $card = $(this);
    //         // math for mouse position
    //         var l = pos[0];
    //         var t = pos[1];
    //         var h = $card.height();
    //         var w = $card.width();
    //         var px = Math.abs(Math.floor(100 / w * l) - 100);
    //         var py = Math.abs(Math.floor(100 / h * t) - 100);
    //         var pa = (50 - px) + (50 - py);
    //         // math for gradient / background positions
    //         var lp = (50 + (px - 50) / 1.5);
    //         var tp = (50 + (py - 50) / 1.5);
    //         var px_spark = (50 + (px - 50) / 7);
    //         var py_spark = (50 + (py - 50) / 7);
    //         var p_opc = 20 + (Math.abs(pa) * 1.5);
    //         var ty = ((tp - 50) / 3.0) * -1;
    //         var tx = ((lp - 50) / 2.5) * .5;
    //         // css to apply for active card
    //         var grad_pos = `background-position: ${lp}% ${tp}%;`
    //         var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
    //         var opc = `opacity: ${p_opc / 100};`
    //         var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
    //         // need to use a <style> tag for psuedo elements
    //         var style = `
    //       .card:hover:before { ${grad_pos} }  /* gradient */
    //       .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    //     `
    //         // set / apply css class and style
    //         $cards.removeClass("active");
    //         $card.removeClass("animated");
    //         $card.attr("style", tf);
    //         $style.html(style);
    //         if (e.type === "touchmove") {
    //             return false;
    //         }
    //         clearTimeout(x);
    //     }).on("mouseout touchend touchcancel", function () {
    //         // remove css, apply custom animation on end
    //         var $card = $(this);
    //         $style.html("");
    //         $card.removeAttr("style");
    //         x = setTimeout(function () {
    //             $card.addClass("animated");
    //         }, 2500);
    //     });

    const renderCard = () => {
        return (
            <Card className={classes.main}>
                <div className={["card", classes.card].join(" ")}></div>
                <style className="hover"></style>
                <div className={[classes.card, "card"].join(" ")}></div>
                <style className="hover"></style>
                <div className={[classes.card, "card"].join(" ")}></div>
                <style className="hover"></style>
                <div className={[classes.card, "card"].join(" ")}></div>
                <style className="hover"></style>
                <div className={[classes.card, "card"].join(" ")}></div>
                <style className="hover"></style>
            </Card>
        )
    }

    return <Fragment>{renderCard()}</Fragment>;

}

export default TestCard;