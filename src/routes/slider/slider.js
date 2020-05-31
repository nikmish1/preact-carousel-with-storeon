import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";
import { Counter } from "../../components/counter/counter";

const Slider = (props) => {
  console.log(props);
  return (
    <div>
      <Counter />
      <div class={style.sliderContainer}>
        <div class={style.sliderContainerInner + " " + style.sliderPadding}>
          {props.properties.title && (
            <div class={style.title}>{props.properties.title}</div>
          )}
          {props.properties.images.map((image) => (
            <div class={style.sliderElementStyle}>
              <div class={style.sliderElementMargin}>
                <div class={style.imageContainer}>
                  <img
                    class={
                      style.imageContainerOpacity + " " + style.imageAnimation
                    }
                    width={props.properties.width}
                    height={props.properties.height}
                    src={image.url}
                  ></img>
                </div>
                <div
                  class={
                    props.properties.type === "large"
                      ? style.imageLargeText
                      : style.imageSmallText
                  }
                >
                  {image.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
