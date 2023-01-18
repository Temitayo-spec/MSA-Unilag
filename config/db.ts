import mongoose from 'mongoose';

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI || '');

  console.log('MongoDB Connected', connection.connection.host);
};

export default connectDB;
