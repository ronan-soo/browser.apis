import React, { Component } from 'react';
import Layout from '../src/layouts/Layout'

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started.</em></p>
            : App.renderForecastsTable(this.state.forecasts);

        return (
            <Layout>
                <div>
                    <h1 id="tabelLabel" >Weather forecast</h1>
                    <p>This component demonstrates fetching data from the server.</p>
                    {contents}
                </div>
            </Layout>
        );
    }

    async populateWeatherData() {
        const response = await fetch('/weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
