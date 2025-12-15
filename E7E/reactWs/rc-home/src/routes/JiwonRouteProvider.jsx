import React, { Children } from 'react'
import { RouterProvider } from 'react-router'
import { jiwonRouter } from './RootRouter'

function JiwonRouteProvider() {
    return (
        <RouterProvider router={jiwonRouter} />
    )
}

export default JiwonRouteProvider