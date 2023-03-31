import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
// import 'reactjs-popup/dist/index.css';
import Chart from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
import Popup from 'reactjs-popup';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const Dashborad = () => {
  const [data, setdata] = useState([]);
  const [newdata, setnewdata] = useState([]);
  const [uniquecountryarray, setuniquecountryarray] = useState([]);
  const [uniqueregionarray, setuniqueregionarray] = useState([]);
  const [countryselect, setcountryselect] = useState('All');
  const [sectorselect, setsectorselect] = useState('All');
  const [pestleselect, setpestleselect] = useState('All');
  const [sourceselect, setsourceselect] = useState('All');
  const [intensityselect, setintensityselect] = useState('All');
  const [uniquesectorarray, setuniquesectorarray] = useState([]);
  const [regionselect, setregionselect] = useState('All');
  const [topicselect, settopicselect] = useState('All');
  const [uniquetopicarray, setuniquetopicarray] = useState([]);
  const [uniquepestlearray, setuniquepestlearray] = useState([]);
  const [uniquesourcearray, setuniquesourcearray] = useState([]);
  const [uniqueintensityarray, setuniqueintensityarray] = useState([]);
  const [uniquerelevencearray, setuniquerelevencearray] = useState([]);
  const [relevenceselect, setrelevenceselect] = useState('All');

  useEffect(() => {
    const finddata = async () => {
      const gotdata = await axios.get('/find/data');
      setdata(gotdata.data);
      setnewdata(gotdata.data);
      const country = gotdata.data.map((d) => d.country);
      const uniquecountry = country.filter((x, i, a) => a.indexOf(x) == i);
      setuniquecountryarray(uniquecountry);

      const sector = gotdata.data.map((d) => d.sector);
      const uniquesector = sector.filter((x, i, a) => a.indexOf(x) == i);
      setuniquesectorarray(uniquesector);
      const region = gotdata.data.map((d) => d.region);
      const uniqueregion = region.filter((x, i, a) => a.indexOf(x) == i);
      setuniqueregionarray(uniqueregion);

      const topic = gotdata.data.map((d) => d.topic);
      const uniquetopic = topic.filter((x, i, a) => a.indexOf(x) == i);
      setuniquetopicarray(uniquetopic);

      const pestle = gotdata.data.map((d) => d.pestle);
      const uniquepestle = pestle.filter((x, i, a) => a.indexOf(x) == i);
      setuniquepestlearray(uniquepestle);

      const source = gotdata.data.map((d) => d.source);
      const uniquesource = source.filter((x, i, a) => a.indexOf(x) == i);
      setuniquesourcearray(uniquesource);

      const relevence = gotdata.data.map((d) => d.relevence);
      const uniquerelevence = relevence.filter((x, i, a) => a.indexOf(x) == i);
      setuniquerelevencearray(uniquerelevence);

      const intensity = gotdata.data.map((d) => d.intensity);
      const uniqueintensity = intensity.filter((x, i, a) => a.indexOf(x) == i);
      setuniqueintensityarray(uniqueintensity);
    };

    finddata();
  }, []);
  const linedata = {
    labels: data.slice(0, 10).map((c) => c.country), //x-axis
    datasets: [
      {
        label: ['Intensity'],
        data: data.slice(0, 10).map((c) => c.intensity), //y-axis
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  const linedataall = {
    labels: data.map((c) => c.country), //x-axis
    datasets: [
      {
        label: ['Intensity'],
        data: data.map((c) => c.intensity), //y-axis
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  const bardata = {
    labels: data.slice(0, 10).map((c) => c.country), //x-axis
    datasets: [
      {
        label: ['Relevence'],
        data: data.slice(0, 10).map((c) => c.relevance), //y-axis

        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const bardataall = {
    labels: data.map((c) => c.country), //x-axis
    datasets: [
      {
        label: ['Relevence'],
        data: data.map((c) => c.relevance), //y-axis

        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const horibaroptions = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
      },
    },
  };
  const bardata1 = {
    labels: data.slice(0, 10).map((c) => c.region), //x-axis
    datasets: [
      {
        label: ['Likelihood'],
        data: data.slice(0, 10).map((c) => c.likelihood), //y-axis

        backgroundColor: 'rgba(250,99,130,0.4)',
      },
    ],
  };

  const bardata2 = {
    labels: data.slice(0, 10).map((c) => c.topic), //x-axis
    datasets: [
      {
        label: ['end year'],
        data: data.slice(0, 10).map((c) => c.end_year), //y-axis

        backgroundColor: 'rgba(250,99,130,0.4)',
      },
      {
        label: ['start year'],
        data: data.slice(0, 10).map((c) => c.start_year), //y-axis

        backgroundColor: 'rgba(250,99,130,0.4)',
      },
    ],
  };
  const bardata1all = {
    labels: data.map((c) => c.region), //x-axis
    datasets: [
      {
        label: ['Likelihood'],
        data: data.map((c) => c.likelihood), //y-axis

        backgroundColor: 'rgba(250,99,130,0.4)',
      },
    ],
  };

  const bardata2all = {
    labels: data.map((c) => c.topic), //x-axis
    datasets: [
      {
        label: ['end year'],
        data: data.map((c) => c.end_year), //y-axis

        backgroundColor: 'rgba(250,99,130,0.4)',
      },
      {
        label: ['start year'],
        data: data.map((c) => c.start_year), //y-axis

        backgroundColor: 'rgba(250,99,130,0.4)',
      },
    ],
  };
  const handlefilter = (e) => {
    e.preventDefault();
    const filtered = newdata
      .filter(
        countryselect === 'All'
          ? ({ country }) => country !== 'no'
          : ({ country }) => country === countryselect
      )
      .filter(
        sectorselect === 'All'
          ? ({ sector }) => sector !== 'no'
          : ({ sector }) => sector === sectorselect
      )
      .filter(
        topicselect === 'All'
          ? ({ topic }) => topic !== 'no'
          : ({ topic }) => topic === topicselect
      )
      .filter(
        regionselect === 'All'
          ? ({ region }) => region !== 'no'
          : ({ region }) => region === regionselect
      )
      .filter(
        pestleselect === 'All'
          ? ({ pestle }) => pestle !== 'no'
          : ({ pestle }) => pestle === pestleselect
      )
      .filter(
        sourceselect === 'All'
          ? ({ source }) => source !== 'no'
          : ({ source }) => source === sourceselect
      )
      .filter(
        relevenceselect === 'All'
          ? ({ relevence }) => relevence !== 'no'
          : ({ relevence }) => relevence === relevenceselect
      )
      .filter(
        intensityselect === 'All'
          ? ({ intensity }) => intensity !== 'no'
          : ({ intensity }) => intensity === intensityselect
      );
    setdata(filtered);
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  return (
    <>
      <div className="header">
        <img
          className="header_logo"
          src="https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_960_720.png"
          alt="error"
        />
      </div>

      <div className="main">
        <div className="main_filter">
          <div className="main_filter_div">
            <label className="label">Country</label>
            <select
              className="select_div"
              onChange={(e) => {
                setcountryselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniquecountryarray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>
          <div className="main_filter_div">
            <label className="label">Sector</label>
            <select
              className="select_div"
              onChange={(e) => {
                setsectorselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniquesectorarray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>

          <div className="main_filter_div">
            <label className="label">Topic</label>
            <select
              className="select_div"
              onChange={(e) => {
                settopicselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniquetopicarray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>
          <div className="main_filter_div">
            <label className="label">Region</label>

            <select
              className="select_div"
              onChange={(e) => {
                setregionselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniqueregionarray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>
          <div className="main_filter_div">
            <label>Pestle</label>
            <select
              className="select_div"
              onChange={(e) => {
                setpestleselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniquepestlearray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>
          <div className="main_filter_div">
            <label>Source</label>
            <select
              className="select_div"
              onChange={(e) => {
                setsourceselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniquesourcearray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>

          <div className="main_filter_div">
            <label>Intensity</label>
            <select
              className="select_div"
              onChange={(e) => {
                setsourceselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniquesourcearray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>
          <div className="main_filter_div">
            <label>Relevence</label>
            <select
              className="select_div"
              classN
              onChange={(e) => {
                setrelevenceselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniquerelevencearray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>
          <div className="main_filter_div">
            <label>Intensity</label>
            <select
              clas
              onChange={(e) => {
                setintensityselect(e.target.value);
              }}
            >
              <option value="All">All</option>
              {uniqueintensityarray.map((u) => (
                <option value={u}>{u}</option>
              ))}
            </select>
          </div>
          <button className="popup_button" onClick={handlefilter}>
            Submit
          </button>
        </div>
        <div className="main_charts_div">
          <div className="main_chart_div_subdiv">
            <div className="main_chart_div_subdiv_div">
              <Popup
                trigger={
                  <button className="popup_button"> View Full Chart </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <div className="lchart_popup">
                        <Line data={linedataall} />
                      </div>
                    </div>
                    <div>
                      <button onClick={() => close()}>Close modal</button>
                    </div>
                  </div>
                )}
              </Popup>
              <div className="lchart">
                <Line data={linedata} />
              </div>
            </div>
            <div className="main_chart_div_subdiv_div">
              <Popup
                trigger={
                  <button className="popup_button"> View Full Chart </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <div className="bchart">
                        <Bar options={options} data={bardataall} />
                      </div>
                    </div>
                    <div>
                      <button onClick={() => close()}>Close modal</button>
                    </div>
                  </div>
                )}
              </Popup>
              <div className="bchart">
                <Bar options={options} data={bardata} />
              </div>
            </div>
          </div>
          <div className="main_chart_div_subdiv">
            <div className="main_chart_div_subdiv_div">
              <Popup
                trigger={
                  <button className="popup_button"> View Full Chart </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <div className="bchart1">
                        <Bar options={horibaroptions} data={bardata1all} />
                      </div>
                    </div>
                    <div>
                      <button className="popup_button" onClick={() => close()}>
                        Close modal
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
              <div className="bchart1">
                <Bar options={horibaroptions} data={bardata1} />
              </div>
            </div>

            <div className="main_chart_div_subdiv_div">
              <Popup
                trigger={
                  <button className="popup_button"> View Full Chart </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <div className="bchart2">
                        <Bar options={options} data={bardata2all} />
                      </div>
                    </div>
                    <div>
                      <button className="popup_button" onClick={() => close()}>
                        Close modal
                      </button>
                    </div>
                  </div>
                )}
              </Popup>{' '}
              <div className="bchart2">
                <Bar options={options} data={bardata2} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="table">
            <table className="table_e">
              <tr className="table_tr">
                <th>end_year</th>
                <th>intensity</th>
                <th>sector</th>
                <th>topic</th>
                <th>insight</th>
                <th>url</th>
                <th>region</th>
                <th>start_year</th>
                <th>impact</th>
                <th>added</th>
                <th>published</th>
                <th>country</th>
                <th>relevance</th>
                <th>pestle</th>
                <th>source</th>
                <th>title</th>
                <th>likelihood</th>
              </tr>
              {data.slice(0, 10).map((t) => (
                <tr>
                  <td>{t.end_year}</td>
                  <td>{t.intensity}</td>
                  <td>{t.sector}</td>
                  <td>{t.topic}</td>
                  <td>{t.insight}</td>
                  <td>{t.url}</td>
                  <td>{t.region}</td>
                  <td>{t.start_year}</td>
                  <td>{t.impact}</td>
                  <td>{t.added}</td>
                  <td>{t.published}</td>
                  <td>{t.country}</td>
                  <td>{t.relevance}</td>
                  <td>{t.pestle}</td>
                  <td>{t.source}</td>
                  <td>{t.title}</td>
                  <td>{t.likelihood}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
