/*
 * @Author: your name
 * @Date: 2021-09-13 09:25:28
 * @LastEditTime: 2021-09-13 15:08:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/my-react-app/src/components/Header/index.tsx
 */
import React from 'react';
interface IProps {
  handleClick?: () => void;
  name?: string;
}
const Header = React.memo((props: IProps) => {
  const { handleClick, name } = props;
  console.log('=== update')
  return <div onClick={handleClick}>头部{name}</div>
})

export default Header