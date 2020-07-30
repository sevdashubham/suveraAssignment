// #region Global Imports
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import {
    Container,
    Top,
    TopBar,
    Middle,
    MiddleLeft,
    MiddleLeftButtons,
    MiddleRight,
} from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { LocaleButton, NewsCard } from "@Components";
import "./styleHome.scss";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const categories = [
    { label: "All", value: "" },
    { label: "Business", value: "business" },
    { label: "Entertainment", value: "entertainment" },
    { label: "General", value: "general" },
    { label: "Health", value: "health" },
    { label: "Science", value: "science" },
    { label: "Sports", value: "sports" },
    { label: "Technology", value: "technology" },
];

const filterOptions = [
    { value: "publishedAt", label: "Latest" },
    { value: "relevancy", label: "Most relevant" },
    { value: "popularity", label: "Most Popular" },
];


const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
                                                                      t,
                                                                      i18n,
                                                                  }) => {
    const { articles, category, filters } = useSelector((state: IStore) => state.home);
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const dispatch = useDispatch();
    const renderLocaleButtons = () =>
        categories.map(cat => (
            <LocaleButton
                key={cat.value}
                text={cat.label}
                isActive={category === cat.value}
                onClick={() => dispatch(HomeActions.setCategory({
                    type: "headlines",
                    params: { category: cat.value },
                }))}
            />
        ));

    const handleChange = event => {
        const input = event.target.value;
        setSearchTerm(event.target.value);
        if (input) {
            dispatch((HomeActions.setFilter({
                type: "search",
                params: { ...filters, q: input },
            })));
        } else {
            queryTopHeadlines();
        }
    };

    const queryTopHeadlines = () => {
        dispatch(HomeActions.queryNews({ type: "headlines", params: JSON.stringify({ country: "gb" }) }));
    };

    useEffect(() => {
        if (!articles.length) {
            queryTopHeadlines();
        }
        // Update the document title using the browser API
        console.log("badhiya", filters);
    }, []);

    const updateFilter = (selectedOption: object) => {
        dispatch((HomeActions.setFilter({
            type: "search",
            params: { q: searchTerm, sortBy: selectedOption.value },
        })));

    };

    const articleList = articles.length && articles.map(article => {
        return (
            <a href={article.url} className="col-md-6 col-sm-12 col-lg-6 col-xl-4" key={article.url}>
                <NewsCard article={article}/>
            </a>
        );
    });

    const handleToDateChange = (date) => {
        setEndDate(date);
        dispatch((HomeActions.setFilter({
            type: "search",
            params: { ...filters, to: date },
        })));
    };

    const handleFromDateChange = (date) => {
        setStartDate(date);
        dispatch((HomeActions.setFilter({
            type: "search",
            params: { ...filters, from: date },
        })));
    };

    return (
        <Container>
            <Top className="container">

                <div className="row no-gutters">
                    <div className="col-lg-12 col-md-6 col-sm-12 p-1">
                        <div className="row no-gutters">
                            <label htmlFor={"search"} className="m-0 d-none">
                                Search here:&nbsp;
                            </label>
                        <form method="post">
                            <DebounceInput id="search" className="textbox" value={searchTerm} debounceTimeout={500}
                                           placeholder={"Filter news by keyword. Advanced: use quotes ('') for exact matches, and the + / - symbols for needed / excluded words."} onChange={handleChange} type={"text"}/>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-4 col-md-4 col-sm-12 p-1 d-flex flex-row justify-content-center align-items-center">
                        <label htmlFor={"sort"}>
                            Sort By :&nbsp;
                        </label>
                        <div style={{minWidth: 200}}>
                        <Select
                            isDisabled={!searchTerm}
                            inputProps={{
                                id: "sort",
                            }}
                            theme={theme => ({
                                ...theme,
                                borderRadius: 5,
                                colors: {
                                    ...theme.colors,
                                    primary25: "#7F8688",
                                    primary: "#1F2833",
                                },
                            })}
                            defaultValue={filterOptions[0]}
                            options={filterOptions}
                            onChange={updateFilter}
                        />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 p-1 d-flex align-items-center justify-content-center">
                        <label className="m-0">
                            From:&nbsp;
                            <DatePicker disabled={!searchTerm} selected={startDate} onChange={date => handleFromDateChange(date)}/>
                        </label>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 p-1 d-flex align-items-center justify-content-center">
                        <label className="m-0">
                            To:&nbsp;
                            <DatePicker disabled={!searchTerm} selected={endDate} onChange={date => handleToDateChange(date)}/>
                        </label>
                    </div>
                </div>

            </Top>
            <TopBar/>
            <Middle>
                <MiddleLeft>
                    <MiddleLeftButtons>
                        {renderLocaleButtons()}
                    </MiddleLeftButtons>
                </MiddleLeft>
                <MiddleRight>
                    <div className="container">
                        <div className="row no-gutters">
                            {articles.length ? articleList : null}
                        </div>
                    </div>
                </MiddleRight>
            </Middle>
        </Container>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext,
): Promise<IHomePage.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
