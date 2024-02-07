import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/ultils/database";
import User from "@/models/user";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    // session to check the user session
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    // profile chứa thông tin từ tài khoản google của người dùng khi đăng nhập, từ những thông tin đó sẽ tạo ra user trong database.
    // Thực chất API của google cloud chiu trách nhiệm cho session và authenticate, nhưng chúng ta có thể lưu thông tin user vào database để sử dụng sau này.
    async signIn({ profile }) {
      try {
        await connectToDatabase();
        //chec if a user already exists
        const userExists = await User.findOne({ email: profile.email });
        // if not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});
export { handler as GET, handler as POST };
