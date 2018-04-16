import { gql } from 'apollo-boost';

const getDuplasenaQuery = gql`
  {
    lastDuplasena {
      concurso
      data
      sorteio1
      sorteio2
      id
    }
  }
`;

const getLotofacilQuery = gql`
  {
    lastLotofacil {
      concurso
      data
      sorteio
      id
    }
  }
`;

const getMegasenaQuery = gql`
  {
    lastMegasena {
      concurso
      data
      sorteio
      id
    }
  }
`;

const getQuinasQuery = gql`
  {
    lastQuina {
      concurso
      data
      sorteio
      id
    }
  }
`;

const getLotomaniaQuery = gql`
  {
    lastLotomania {
      concurso
      data
      sorteio
      id
    }
  }
`;

const getTimemaniaQuery = gql`
  {
    lastTimemania {
      concurso
      data
      sorteio
      time
      id
    }
  }
`;

export {
  getDuplasenaQuery,
  getLotofacilQuery,
  getMegasenaQuery,
  getQuinasQuery,
  getLotomaniaQuery,
  getTimemaniaQuery
};
