import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';
import path from 'path';
import schema from './schema';

const app = express();

// const server = new ApolloServer({
// 	schema,
// 	playground: true,
// });
// Allow cross-origin
app.use('*', cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.use(express.static('public'));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
// server.applyMiddleware({ app, path: '/graphql' });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Server started on port http://localhost:${PORT}/graphql`)
);
