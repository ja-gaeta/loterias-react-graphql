const graphql = require('graphql');
const Quina = require('../models/quina');
const Megasena = require('../models/megasena');
const Lotofacil = require('../models/lotofacil');
const Duplasena = require('../models/duplasena');
const Timemania = require('../models/timemania');
const Lotomania = require('../models/lotomania');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const QuinaType = new GraphQLObjectType({
  name: 'Quina',
  fields: () => ({
    id: { type: GraphQLID },
    concurso: { type: GraphQLString },
    data: { type: GraphQLString },
    sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
  })
});

const MegasenaType = new GraphQLObjectType({
  name: 'Megasena',
  fields: () => ({
    id: { type: GraphQLID },
    concurso: { type: GraphQLString },
    data: { type: GraphQLString },
    sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
  })
});

const LotofacilType = new GraphQLObjectType({
  name: 'Lotofacil',
  fields: () => ({
    id: { type: GraphQLID },
    concurso: { type: GraphQLString },
    data: { type: GraphQLString },
    sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
  })
});

const DuplasenaType = new GraphQLObjectType({
  name: 'Duplasena',
  fields: () => ({
    id: { type: GraphQLID },
    concurso: { type: GraphQLString },
    data: { type: GraphQLString },
    sorteio1: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    sorteio2: { type: new graphql.GraphQLList(graphql.GraphQLString) }
  })
});

const TimemaniaType = new GraphQLObjectType({
  name: 'Timemania',
  fields: () => ({
    id: { type: GraphQLID },
    concurso: { type: GraphQLString },
    data: { type: GraphQLString },
    time: { type: GraphQLString },
    sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
  })
});

const LotomaniaType = new GraphQLObjectType({
  name: 'Lotomania',
  fields: () => ({
    id: { type: GraphQLID },
    concurso: { type: GraphQLString },
    data: { type: GraphQLString },
    sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    quina: {
      type: QuinaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Quina.findById(args.id);
      }
    },
    megasena: {
      type: MegasenaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Megasena.findById(args.id);
      }
    },
    lotofacil: {
      type: LotofacilType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Lotofacil.findById(args.id);
      }
    },
    duplasena: {
      type: DuplasenaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Duplasena.findById(args.id);
      }
    },
    timemania: {
      type: TimemaniaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Timemania.findById(args.id);
      }
    },
    lotomania: {
      type: LotomaniaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Lotomania.findById(args.id);
      }
    },
    quinas: {
      type: new GraphQLList(QuinaType),
      resolve(parent, args) {
        return Quina.find({});
      }
    },
    lastQuina: {
      type: new GraphQLList(QuinaType),
      resolve(parent, args) {
        return Quina.find()
          .sort({ _id: -1 })
          .limit(1);
      }
    },
    megasenas: {
      type: new GraphQLList(MegasenaType),
      resolve(parent, args) {
        return Megasena.find({});
      }
    },
    lastMegasena: {
      type: new GraphQLList(MegasenaType),
      resolve(parent, args) {
        return Megasena.find()
          .sort({ _id: -1 })
          .limit(1);
      }
    },
    lotofaceis: {
      type: new GraphQLList(LotofacilType),
      resolve(parent, args) {
        return Lotofacil.find({});
      }
    },
    lastLotofacil: {
      type: new GraphQLList(LotofacilType),
      resolve(parent, args) {
        return Lotofacil.find()
          .sort({ _id: -1 })
          .limit(1);
      }
    },
    duplasenas: {
      type: new GraphQLList(DuplasenaType),
      resolve(parent, args) {
        return Duplasena.find({});
      }
    },
    lastDuplasena: {
      type: new GraphQLList(DuplasenaType),
      resolve(parent, args) {
        return Duplasena.find()
          .sort({ _id: -1 })
          .limit(1);
      }
    },
    timemanias: {
      type: new GraphQLList(TimemaniaType),
      resolve(parent, args) {
        return Timemania.find({});
      }
    },
    lastTimemania: {
      type: new GraphQLList(TimemaniaType),
      resolve(parent, args) {
        return Timemania.find()
          .sort({ _id: -1 })
          .limit(1);
      }
    },
    lotomanias: {
      type: new GraphQLList(LotomaniaType),
      resolve(parent, args) {
        return Lotomania.find({});
      }
    },
    lastLotomania: {
      type: new GraphQLList(LotomaniaType),
      resolve(parent, args) {
        return Lotomania.find()
          .sort({ _id: -1 })
          .limit(1);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addQuina: {
      type: QuinaType,
      args: {
        concurso: { type: new GraphQLNonNull(GraphQLString) },
        data: { type: new GraphQLNonNull(GraphQLString) },
        sorteio: {
          type: new GraphQLNonNull(
            new graphql.GraphQLList(graphql.GraphQLString)
          )
        }
      },
      resolve(parent, args) {
        let quina = new Quina({
          concurso: args.concurso,
          data: args.data,
          sorteio: args.sorteio
        });
        return quina.save();
      }
    },
    removeQuina: {
      type: QuinaType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return Quina.findByIdAndRemove(args.id).exec();
      }
    },
    addMegasena: {
      type: MegasenaType,
      args: {
        concurso: { type: GraphQLString },
        data: { type: GraphQLString },
        sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
      },
      resolve(parent, args) {
        let megasena = new Megasena({
          concurso: args.concurso,
          data: args.data,
          sorteio: args.sorteio
        });
        return megasena.save();
      }
    },
    addLotofacil: {
      type: LotofacilType,
      args: {
        concurso: { type: GraphQLString },
        data: { type: GraphQLString },
        sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
      },
      resolve(parent, args) {
        let lotofacil = new Lotofacil({
          concurso: args.concurso,
          data: args.data,
          sorteio: args.sorteio
        });
        return lotofacil.save();
      }
    },
    addDuplasena: {
      type: DuplasenaType,
      args: {
        concurso: { type: GraphQLString },
        data: { type: GraphQLString },
        sorteio1: { type: new graphql.GraphQLList(graphql.GraphQLString) },
        sorteio2: { type: new graphql.GraphQLList(graphql.GraphQLString) }
      },
      resolve(parent, args) {
        let duplasena = new Duplasena({
          concurso: args.concurso,
          data: args.data,
          sorteio1: args.sorteio1,
          sorteio2: args.sorteio2
        });
        return duplasena.save();
      }
    },
    addTimemania: {
      type: TimemaniaType,
      args: {
        concurso: { type: GraphQLString },
        data: { type: GraphQLString },
        time: { type: GraphQLString },
        sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
      },
      resolve(parent, args) {
        let timemania = new Timemania({
          concurso: args.concurso,
          data: args.data,
          time: args.time,
          sorteio: args.sorteio
        });
        return timemania.save();
      }
    },
    addLotomania: {
      type: LotomaniaType,
      args: {
        concurso: { type: GraphQLString },
        data: { type: GraphQLString },
        sorteio: { type: new graphql.GraphQLList(graphql.GraphQLString) }
      },
      resolve(parent, args) {
        let lotomania = new Lotomania({
          concurso: args.concurso,
          data: args.data,
          sorteio: args.sorteio
        });
        return lotomania.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
