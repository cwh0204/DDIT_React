import { Children } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Side from "./Side"

function RootSumin({ children, setPage }) {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="body">
                    <Side setPage={setPage} />
                    <div className="jiwon">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RootSumin