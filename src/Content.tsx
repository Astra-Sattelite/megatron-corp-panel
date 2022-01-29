import React from 'react';
import * as R from "ramda"

import './App.scss'

export const Content = () => {
  return (
    <div className="Content">
      {R.repeat(<div className="ContentItem">Item for overflow with minimum effort</div>, 10)}
    </div>
  )
}
