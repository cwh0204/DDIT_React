import React from 'react'
import { Route, Routes } from 'react-router'

function Sumin() {
    return (
        <div><h1>Sumin</h1>
            <Routes>
                {/* /sumin/1 Route 자리만 바뀐다는 사실 인식이 중요 */}
                <Route path="1" element={<h1>수민1</h1>} />
                <Route path="2" element={<h1>수민2</h1>} />
                <Route path="3" element={<h1>수민3</h1>} />
                <Route path="4" element={<h1>수민4</h1>} />
            </Routes>
        </div>
    )
}

export default Sumin