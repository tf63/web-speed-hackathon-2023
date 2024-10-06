import classNames from 'classnames';
import type { FC } from 'react';
import type { IconType } from 'react-icons';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaPlay, FaShoppingCart, FaUser } from 'react-icons/fa';

import * as styles from './Icon.styles';

type IconName = 'FaArrowLeft' | 'FaArrowRight' | 'FaShoppingCart' | 'FaUser' | 'FaPlay' | 'FaCheckCircle';

type Props = {
  type: IconName;
  width: number;
  height: number;
  color: string;
};

const Icons: { [key in IconName]: IconType } = {
  FaArrowLeft: FaArrowLeft,
  FaArrowRight: FaArrowRight,
  FaCheckCircle: FaCheckCircle,
  FaPlay: FaPlay,
  FaShoppingCart: FaShoppingCart,
  FaUser: FaUser,
};

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  const Icon = Icons[type];
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <Icon />
    </span>
  );
};
