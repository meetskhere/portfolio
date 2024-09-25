import { Routes, Route } from "react-router-dom";
import { Dashboard, Resume, AboutMe, PageNotFound, Hobbies } from '../pages'

import { AnimatePresence } from "framer-motion";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/portfolio" element={<Dashboard />}></Route>
                <Route path="/portfolio/resume" element={<Resume />}></Route>
                <Route path="/portfolio/profile" element={<AboutMe />}></Route>
                <Route path="/portfolio/hobbies" element={<Hobbies />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}
