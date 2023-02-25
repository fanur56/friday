import React from 'react';
import './App.css';
import {Main} from "./Main";
import {Test} from "../../n2-features/f0-test/Test";
import {Navigate, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./NotFound/NotFoundPage";
import {AddNewPassword} from "../../n2-features/f1-auth/a3-assword/AddNewPassword";
import {RecoveryPassword} from "../../n2-features/f1-auth/a3-assword/RecoveryPassword";

export const App = () => {
    return (
        <div className="App">
            <>
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/test"} element={<Test/>}/>
                    <Route path={"/new-password"} element={<AddNewPassword/>}/>
                    <Route path={"/recovery-password"} element={<RecoveryPassword/>}/>
                    <Route path={"/404"} element={<NotFoundPage/>}/>
                    <Route path={"/*"} element={<Navigate to={"/404"}/>}/>
                </Routes>
            </>
        </div>
    );
}

