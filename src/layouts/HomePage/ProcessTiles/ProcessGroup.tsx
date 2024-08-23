import React from "react";
import { Wrapper } from "./styles";
import ProcessTile from "./ProcessTile";

const ProcessGroup = () => {
  return (
    <Wrapper>
      <ProcessTile
        image={
          "https://images.ctfassets.net/vm35rz92ipmx/1KrRKYAIJxvH5kKsZIwI2V/9b9d92b126d1004463f14df09fe1a199/b8f6ec4819b1c2af93948dcf4b7b67d2.png?fm=avif"
        }
        header={"High-Touch Approach"}
        description={
          "Our hands-on process ensures we’re invested in your results.  We meticulously track performance data and improvements, providing project updates monthly, quarterly, and as-requested."
        }
        position={"01"}
        reverse={false}
        alt={"Man sitting at computer"}
      />
      <ProcessTile
        image={
          "https://images.ctfassets.net/vm35rz92ipmx/598lnCqmCdEbVinKeYmqVj/a6299e33181f01754e9af5d4b518807c/PRODUCTLAUNCH16x9.png?fm=avif"
        }
        header={"Multi-Industry Familiarity"}
        description={
          "With projects spanning e-commerce, retail, finance, social, healthcare, livestreaming, and more, we’ve seen a lot.  No subject is too niche. "
        }
        position={"02"}
        reverse={true}
        alt={"rocket leaving a computer"}
      />
      <ProcessTile
        image={
          "https://images.ctfassets.net/vm35rz92ipmx/2dRdyt3CkbGLJK62YQnSp7/ff225ec283fe692eeeb69a03fb14ef13/1d58f29291922ef5fab84913bdc230d0.png?fm=avif"
        }
        header={"First-Hand Experience"}
        description={
          "As founders and entrepreneurs, we’ve been in your shoes.  Many times.  We help you fix the root cause of your issue, strategize, and execute in a highly efficient process."
        }
        position={"03"}
        reverse={false}
        alt={"Woman planning at whiteboard"}
      />
    </Wrapper>
  );
};

export default ProcessGroup;
