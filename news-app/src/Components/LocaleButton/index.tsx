import React from "react";
import styled from "styled-components";

import { ILocaleButton } from "./LocaleButton";

import { Button } from "../Basic";

const Container = styled(Button)<{ isActive: boolean }>`
    color: ${({ isActive }) => (isActive ? "#ffffff" : "inherit")};
    font-size: 20px;
    padding: 10px 0;
`;

export const LocaleButton: React.FunctionComponent<ILocaleButton.IProps> = ({
                                                                                text,
    isActive,
    onClick,
}) => {
    return (
        <Container isActive={isActive} onClick={onClick}>
            {text}
        </Container>
    );
};
