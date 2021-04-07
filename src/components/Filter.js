import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import FilterItem from './FilterItem';

export default function Filter({ filterSettings, setFilterSettings }) {

    const filterInfo = useStaticQuery(graphql`
        query {
            wpgraphql {

                popular_filters(first: 1000) {
                    nodes {
                        uri
                        name
                        id
                        slug
                    }
                }

                games_categories(first: 1000) {
                    nodes {
                        id
                        name
                        uri
                        slug
                    }
                }

                countries(first: 1000) {
                    nodes {
                        uri
                        name
                        id
                        slug
                    }
                }

                game_providers(first: 1000) {
                    nodes {
                        uri
                        title
                        id
                        slug
                    }
                }

                payment_methods(first: 1000) {
                    nodes {
                        uri
                        title
                        id
                        slug
                    }
                }

                licensing_authorities(first: 1000) {
                    nodes {
                        uri
                        name
                        id
                        slug
                    }
                }

                withdrawal_limits(first: 1000) {
                    nodes {
                        uri
                        name
                        id
                        slug
                    }
                }

                currencies(first: 1000) {
                    nodes {
                        uri
                        id
                        name
                        slug
                    }
                }

                languages(first: 1000) {
                    nodes {
                        uri
                        name
                        id
                        slug
                    }
                }

            }
        }
    `)

    const popular_filters = filterInfo.wpgraphql.popular_filters.nodes;
    const games_categories = filterInfo.wpgraphql.games_categories.nodes;
    const countries = filterInfo.wpgraphql.countries.nodes;
    const game_providers = filterInfo.wpgraphql.game_providers.nodes;
    const payment_methods = filterInfo.wpgraphql.payment_methods.nodes;
    const licensing_authorities = filterInfo.wpgraphql.licensing_authorities.nodes;
    const withdrawal_limits = filterInfo.wpgraphql.withdrawal_limits.nodes;
    const currencies = filterInfo.wpgraphql.currencies.nodes;
    const languages = filterInfo.wpgraphql.languages.nodes;
    
    const filtered_games = games_categories.filter((gameCateg) => {
        if(gameCateg.name === 'Latest Online Games'){
            return
        } else if(gameCateg.name === 'Most Popular Online Casino Games') {
            return
        }
        return gameCateg
    });
    
    withdrawal_limits.sort((a, b) => {
        return a.slug - b.slug;
    })

    const popular_filters_svg = `<svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.20097 29.9029C1.87688 18.9495 8.90061 14.9502 8.90061 14.9502C8.40918 20.795 11.7307 25.3485 11.7307 25.3485C12.9523 24.9799 15.2839 23.2573 15.2839 23.2573C15.2839 25.3485 14.0536 29.9003 14.0536 29.9003C14.0536 29.9003 18.3606 26.5701 19.7163 21.039C21.0704 15.5078 17.1372 9.95486 17.1372 9.95486C17.3742 13.8697 16.0498 17.7201 13.455 20.6617C13.5848 20.5118 13.6938 20.3454 13.7774 20.165C14.2436 19.2327 14.992 16.8096 14.5537 11.1982C13.9369 3.32148 6.79985 0 6.79985 0C7.415 4.79924 5.57041 5.90495 1.24952 15.0146C-3.07137 24.1226 5.20097 29.9029 5.20097 29.9029Z" fill="#C2A57B"/>
                                </svg>`;


    const filterHandle = (backResult) => {
        const entries = Object.entries(backResult)
        const key = entries[0][0];
        const valueArray = entries[0][1];
        setFilterSettings({ ...filterSettings, [key]: valueArray })
    }
    
    return (
        <div className="tab-filter-wrap">
            <div className="filter-heading filter-section">
                <h6>Filter Casinos</h6>
            </div>
            {popular_filters.length && (
                <div className="filter-section popular-filter">
                    <FilterItem data={popular_filters} filtrationCategory={'popularFilters'} filterHandle={filterHandle} name={'Popular Filters'} svg={popular_filters_svg}/>
                </div>
            )}
            {countries.length && (
                <div className="filter-section for-players-from-filter">
                    <FilterItem data={countries} filtrationCategory={'forPlayersFrom'} filterHandle={filterHandle} name={'For Players From'} />
                </div>
            )}
            {filtered_games.length && (
                <div className="filter-section games-filter">
                    <FilterItem data={filtered_games} filtrationCategory={'availableGames'} filterHandle={filterHandle} name={'Casino Games'} />
                </div>
            )}
            {game_providers.length && (
                <div className="filter-section game-provider-filter">
                    <FilterItem data={game_providers} filtrationCategory={'gameProvider'} filterHandle={filterHandle} name={'Game Provider'} />
                </div>
            )}
            {payment_methods.length && (
                <div className="filter-section payment-method-filter">
                    <FilterItem data={payment_methods} filtrationCategory={'paymentMethods'} filterHandle={filterHandle} name={'Payment Method'} />
                </div>
            )}
            {licensing_authorities.length && (
                <div className="filter-section licensing-authority-filter">
                    <FilterItem data={licensing_authorities} filtrationCategory={'licensingAuthority'} filterHandle={filterHandle} name={'Licensing Authority'} />
                </div>
            )}
            
            {withdrawal_limits.length && (
                <div className="filter-section withdrawal-limits-filter">
                    <FilterItem data={withdrawal_limits} filtrationCategory={'withdrawalLimit'} filterHandle={filterHandle} name={'Withdrawal Limit'} />
                </div>
            )}
            {currencies.length && (
                <div className="filter-section currencies-filter">
                    <FilterItem data={currencies} filtrationCategory={'currency'} filterHandle={filterHandle} name={'Currency'} />
                </div>
            )}
            {languages.length && (
                <div className="filter-section website-languages-filter">
                    <FilterItem data={languages} filtrationCategory={'websiteLanguage'} filterHandle={filterHandle} name={'Website Language'} />
                </div>
            )}
            {languages.length && (
                <div className="filter-section customer-support-language-filter">
                    <FilterItem data={languages} filtrationCategory={'customerSupportLanguage'} filterHandle={filterHandle} name={'Customer Support Language'} />
                </div>
            )}
            {languages.length && (
                <div className="filter-section live-chat-language-filter">
                    <FilterItem data={languages} filtrationCategory={'liveChatLanguage'} filterHandle={filterHandle} name={'Live Chat Language'} />
                </div>
            )}

        </div>
    )
}
