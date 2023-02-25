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
                <Routes>
                    <Route path={"friday/"} element={<Main/>}/>
                    <Route path={"friday/test"} element={<Test/>}/>
                    <Route path={"friday/new-password"} element={<AddNewPassword/>}/>
                    <Route path={"friday/recovery-password"} element={<RecoveryPassword/>}/>
                    <Route path={"friday/404"} element={<NotFoundPage/>}/>
                    <Route path={"/*"} element={<Navigate to={"friday/404"}/>}/>
                </Routes>
        </div>
    );
}

