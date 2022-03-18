import styled from 'styled-components';
import { useState } from 'react';
import Progress from '../Progress/Progress';

const ContentContainer = styled.div`
  background-color: white;
  min-height: 300px;
  height: 300px;
  h5 {
    height: 20px;
    text-align: left;
    font-size: 16px;
    line-height: 2em;
  }
`
const TableContainer = styled.div`
  height: 280px;
  overflow-y: auto;
  .table {
    font-size: 12px;
  }
`
export default function Content() {
  const [terms, setTerms] = useState(
    [
      {
        "name": "iPhone",
        "count": 90
      },
      {
        "name": "Android",
        "count": 80
      },
      {
        "name": "Samsung",
        "count": 70
      },
      {
        "name": "Sony",
        "count": 60
      },
      {
        "name": "HTC",
        "count": 50
      },
      {
        "name": "ASUS",
        "count": 40
      },
      {
        "name": "小米",
        "count": 30
      },
      {
        "name": "Nokia",
        "count": 20
      }
    ]
  )
  return (
    <ContentContainer>
      <h5>TOP TERMS</h5>
      <TableContainer>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">TERMS</th>
              <th scope="col">% OF TOTAL POSTS</th>
              <th scope="col"># OF POSTS</th>
            </tr>
          </thead>
          <tbody>
            {terms.map((row) => (
              <tr>
                <th scope="row">{row.name}</th>
                <td>
                  <Progress label={row.count}></Progress>
                </td>
                <td>{row.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </ContentContainer>
  )
}
