import React from "react";
import { HawaButton } from "../../elements";
import { HawaContainer } from "../../layout";

export const PayWithWallet = (props) => {
  return (
    <HawaContainer>
      <div className="text-center text-5xl font-extrabold">
        {props.walletBalance || "0"}
        <div className="text-sm font-normal">{props.currency || "SAR"}</div>
      </div>
      <HawaButton
        type="submit"
        width="full"
        onClick={props.handlePayWithWallet}
      >
        Pay Now
      </HawaButton>
    </HawaContainer>
  );
};
