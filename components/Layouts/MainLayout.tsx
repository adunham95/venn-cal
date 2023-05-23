import React from 'react'
import { Nav } from '../nav'

export interface IMainLayout{
    children: React.ReactNode
}

const MainLayout = (props: IMainLayout) => {
    const {children} = props
    return (
        <>
        <Nav/>
        <div>
            {children}
        </div>
        </>
    )
}

export default MainLayout
