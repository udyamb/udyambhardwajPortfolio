import React from 'react'
import Image from 'next/image';
export default function DisplayPic() {
   
  return (
    <>
    <Image src="/displayPic.jpg" alt="Description"  width={400} height={400}/>
    </>
  )
}
