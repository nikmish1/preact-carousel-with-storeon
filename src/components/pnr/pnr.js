import style from "./style";
import * as commonStyle from "../common";

const PNR = () => (
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
    </div>
  </div>
);

export default PNR;
