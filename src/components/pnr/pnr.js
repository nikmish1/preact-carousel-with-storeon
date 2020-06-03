import { h } from "preact";
import { useState } from "preact/hooks";
import { useStoreon } from "storeon/preact";
import style from "./style";
import * as commonStyle from "../common";
import { Button } from "../button/button";
import { route } from "preact-router";

const PNR = () => {
  const [pnr, setPnr] = useState(0);
  const { dispatch, pnrNumber } = useStoreon("pnrNumber");

  const onPnrSubmit = () => {
    dispatch("pnrSubmit", pnr);
    route("/station");
  };
  return (
    <div class={style.container}>
      <div class={style.branding + " " + commonStyle.textPrimary}>
        <div class={style.brandLogo + " " + commonStyle.backgroundColorPrimary}>
          <i class="fas fa-utensils fa-2x"></i>
        </div>
        <div class={commonStyle.textPrimary}>
          <div class={style.brandTitle}>e-catering</div>
          <div class={style.brandSubtitle}>
            <span class={style.byIRCTC}>by</span> IRCTC
          </div>
        </div>
        <div class={style.pnrContainer}>
          <input
            type="text"
            class={style.pnrInput}
            placeholder="Enter 10 digit PNR"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
          ></input>
          <Button
            style={{
              position: "absolute",
              right: "18px",
            }}
            onClick={() => onPnrSubmit()}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PNR;
