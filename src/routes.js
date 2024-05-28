import { Route, Routes } from "react-router-dom";
import React from "react";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import HomePage from "./Components/Home/HomePage";


export const RootRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout />
                }
            >
                <Route path="/home" index element={<HomePage />} />
                <Route path="/contact-us" index element={<HomePage />} />
                <Route path="/about-me" index element={<HomePage />} />
                <Route path="/resume" index element={<HomePage />} />
                <Route path="/protofolio" index element={<HomePage />} />
            </Route>
        </Routes>
    );
};
