import React from 'react'

export default function DisplayPic({data}) {
    console.log(data)
  return (
    <>
    <img src="https://cdn-icons-png.flaticon.com/512/1114/1114110.png" alt="" />
    </>
  )
}

export async function getServerSideProps() {
    // Fetch data here
    const data = 'udyam'; // This could be from an API, database, etc.
console.log(data)
    // Return it as props
    return {
        props: { data },
    };
}