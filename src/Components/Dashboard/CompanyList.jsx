import React from 'react'
import styled from 'styled-components'

const DataContainer = styled.div`
  width: 1300px;
  margin: 0 auto;
  height: 80vh;
  table {
    width: 100%;
    thead {
      background-color: #18d26e;
      tr {
        background-color: #18d26e;
        th {
          padding: 10px 5px;
          font-size: 1.2rem;
          letter-spacing: 0.13rem;
        }
      }
    }
    tbody {
      tr {
        td {
          font-size: 1.1rem;
          text-align: center;
          padding: 10px 10px;
        }
      }
    }
  }
`;



const data = [
  {
    Name: 'Tiger plants',
    height: `${Math.floor(Math.random() * 1000)} cm`,
    temp: `${Math.floor(Math.random() * 100)} Degree`,
    prevtemp: `${Math.floor(Math.random() * 1000)} cm`,
    prevheight: `${Math.floor(Math.random() * 100)} Degree`,
  },
  {
    Name: 'Rabbit plants',
    height: `${Math.floor(Math.random() * 1000)} cm`,
    temp: `${Math.floor(Math.random() * 100)} Degree`,
    prevtemp: `${Math.floor(Math.random() * 1000)} cm`,
    prevheight: `${Math.floor(Math.random() * 100)} Degree`,
  },
  {
    Name: 'Dog plants',
    height: `${Math.floor(Math.random() * 1000)} cm`,
    temp: `${Math.floor(Math.random() * 100)} Degree`,
    prevtemp: `${Math.floor(Math.random() * 1000)} cm`,
    prevheight: `${Math.floor(Math.random() * 100)} Degree`,
  },
  {
    Name: 'lion plants',
    height: `${Math.floor(Math.random() * 1000)} cm`,
    temp: `${Math.floor(Math.random() * 100)} Degree`,
    prevtemp: `${Math.floor(Math.random() * 1000)} cm`,
    prevheight: `${Math.floor(Math.random() * 100)} Degree`,
  },
  {
    Name: 'Eric plants',
    height: `${Math.floor(Math.random() * 1000)} cm`,
    temp: `${Math.floor(Math.random() * 100)} Degree`,
    prevtemp: `${Math.floor(Math.random() * 1000)} cm`,
    prevheight: `${Math.floor(Math.random() * 100)} Degree`,
  },
  {
    Name: 'Shin plants',
    height: `${Math.floor(Math.random() * 1000)} cm`,
    temp: `${Math.floor(Math.random() * 100)} Degree`,
    prevtemp: `${Math.floor(Math.random() * 1000)} cm`,
    prevheight: `${Math.floor(Math.random() * 100)} Degree`,
  },
];


const CompanyList = () => {
  return (
    <DataContainer>
      <h1>Plants List and Data</h1>
      <table>
        <thead>
          <tr>
            <th>Plant</th>
            <th>Height</th>
            <th>Temp</th>
            <th>height change</th>
            <th>Temp Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((plant, index) => (
            <tr key={index}>
              <td>{plant.Name}</td>
              <td>{plant.height}</td>
              <td>{plant.temp}</td>
              <td>{plant.prevtemp}</td>
              <td>{plant.prevheight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataContainer>
  );
}

export default CompanyList
