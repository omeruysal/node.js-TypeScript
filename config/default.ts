require('dotenv').config();
export default {
  port: 8080,
  dbUri: `mongodb+srv://username:${process.env.DB_PASSWORD}@cluster0.c8xtj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
