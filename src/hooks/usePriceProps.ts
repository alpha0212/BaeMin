import { useEffect, useState } from 'react';

import { getPriceProps } from 'src/utils';

export const usePriceProps = (price: number) => {
  const [props, setProps] = useState(getPriceProps(price));

  useEffect(() => {
    setProps(getPriceProps(price));
  }, [price]);

  return props;
};
