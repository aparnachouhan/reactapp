import React from 'react'
import Index from '../../../components';


const AddStaff = (props) => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <Index.Button onClick={()=>{setOpen(true)}} className='bg-blue-500'>{props.title} </Index.Button>
            {open && <> <Index.Card className='fixed w-[50vw] h-[50vw] bg-black p-12 top-0 left-0 shadow-xl text-white'> <h1>Hello</h1> </Index.Card> </>}
        </>
    )
}


export default AddStaff;