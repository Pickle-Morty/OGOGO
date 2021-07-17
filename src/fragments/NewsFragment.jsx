import React, { Fragment } from 'react'
import { useGet } from '../hooks/get.hook'
import { Route } from 'react-router-dom'
import { NewsSingle } from '../components/NewsSingle/NewsSingle'

export const NewsFragment = () => {
    const { data, loading } = useGet('news')

    if (loading) {
        return <div className="center"><div className="loading"></div></div>
    }

    return (
        <Fragment>
            {
                data.results ?
                data.results.map(({ id }, i) => {
                    return (
                        <Route key={ i } path={`/news/${id}`} exact>
                            <NewsSingle newsData={ data.results[i] } />
                        </Route>
                    )
                }) : ''
            }
        </Fragment>
    )
}