import React from 'react';

import { SvgIcon } from '@material-ui/core';

export const AlusdIcon = (props: any) => (
  <SvgIcon {...props}>
    <image
      id="image0_231:13647"
      width={props.width}
      height={props.height}
      xlinkHref="data:image/png;base64,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"
    />
  </SvgIcon>
);