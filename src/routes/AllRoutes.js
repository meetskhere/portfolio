import { Routes, Route } from "react-router-dom";
import { Dashboard, Resume, AboutMe, PageNotFound, Hobbies } from '../pages'

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/meetskhere" element={<Dashboard />}></Route>
                <Route path="/meetskhere/resume" element={<Resume />}></Route>
                <Route path="/meetskhere/profile" element={<AboutMe />}></Route>
                <Route path="/meetskhere/hobbies" element={<Hobbies />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}
