import React, { useRef } from "react"
import Styles from "./App.module.css"
import { Switch, Route } from "react-router-dom"
import { Header, Topline, WhyUs, Online, Reviews, News, Animated, Certificate, Footer, Courses } from "./components"
import { NewsPage, Frontend, Python, ProjectManager, JavaBackend, Android, HTML, Design, CoursesPage, ScratchPage } from "./pages"
import { NewsFragment } from "./fragments/NewsFragment";
import { Intensive } from "./pages/Intensive/Intensive"

export const useRoutes = () => {
    const TOPLINE_LINK = useRef(null);
    const COURSES_LINK = useRef(null);
    const WHY_US_LINK = useRef(null);
    const ONLINE_LINK = useRef(null);
    const REVIEWS_LINK = useRef(null);
    const NEWS_LINK = useRef(null);
    const ANIMATED_LINK = useRef(null);
    const CERTIFICATE_LINK = useRef(null);
    const FOOTER_LINK = useRef(null);

    return (
        <div>
            <Header routers={
                [
                    TOPLINE_LINK,
                    COURSES_LINK,
                    ONLINE_LINK,
                    REVIEWS_LINK,
                    NEWS_LINK,
                    FOOTER_LINK,
                    ANIMATED_LINK,
                ]
            } />
            <Switch>
                <Route path="/" exact>
                    <div className={Styles.main}>
                        <Topline link={TOPLINE_LINK} />
                        <Courses link={COURSES_LINK} />
                        <WhyUs link={WHY_US_LINK} />
                        <Online link={ONLINE_LINK} />
                        <Reviews link={REVIEWS_LINK} />
                        <News link={NEWS_LINK} />
                        <Animated link={ANIMATED_LINK} />
                        <Certificate link={CERTIFICATE_LINK} />
                    </div>
                </Route>
                <Route path="/news" exact>
                    <NewsPage />
                </Route>
                <Route path="/news/:id" exact>
                    <NewsFragment />
                </Route>
                <Route path="/courses" exact>
                    <CoursesPage />
                </Route>
                <Route path="/courses/JavaScript" exact>
                    <Frontend />
                </Route>
                <Route path="/courses/Python Backend" exact>
                    <Python />
                </Route>
                <Route path="/courses/Project Management" exact>
                    <ProjectManager />
                </Route>
                <Route path="/courses/Java Backend" exact>
                    <JavaBackend />
                </Route>
                <Route path="/courses/Android разработка" exact>
                    <Android />
                </Route>
                <Route path="/courses/HTML/CSS" exact>
                    <HTML />
                </Route>
                <Route path="/courses/UI/UX Design" exact>
                    <Design />
                </Route>
                <Route path="/courses/scratch" exact>
                    <ScratchPage />
                </Route>
                <Route path="/courses/intensive" exact>
                    <Intensive />
                </Route>
            </Switch>
            <Footer link={FOOTER_LINK} />
        </div>
    )
}