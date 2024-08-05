import { Routes, Route } from "react-router-dom";
import { Dashboard, Resume, AboutMe, PageNotFound } from '../pages'

import { AnimatePresence } from "framer-motion";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/portfolio/Resume" element={<Resume />}></Route>
                <Route path="/aboutMe" element={<AboutMe />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}
