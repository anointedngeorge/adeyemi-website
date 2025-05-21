import Image from 'next/image'
import React from 'react'

export default function Logo({width=30, height=40, classname= ""}) {
  return (
        <Image
        width={width}
        height={height} src="./img/logo_2.png" className={classname + ` rounded-xl`} alt="logo image" />
  )
}
